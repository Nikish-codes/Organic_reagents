// Initialize variables
let currentFilter = 'all';
let isGridView = true;
let bookmarkedReactions = [];
let masteredReactions = [];
let currentReactionIndex = 0;

// Load reactions from data file
let reactions = reactionsData;

// DOM Elements
const reactionsGrid = document.getElementById('reactionsGrid');
const searchInput = document.getElementById('searchInput');
const toggleViewBtn = document.getElementById('toggleView');
const reactionModal = new bootstrap.Modal(document.getElementById('reactionModal'));
const loadingSpinner = document.getElementById('loadingSpinner');
const totalReactionsCounter = document.getElementById('totalReactions');
const bookmarkedReactionsCounter = document.getElementById('bookmarkedReactions');
const masteredReactionsCounter = document.getElementById('masteredReactions');
const nextReactionBtn = document.getElementById('nextReaction');
const prevReactionBtn = document.getElementById('prevReaction');
const modalBookmarkBtn = document.getElementById('modalBookmark');
const modalMasteredBtn = document.getElementById('modalMastered');
const darkModeToggleBtn = document.getElementById('darkModeToggle');

// Process reaction data to fix common LaTeX and mhchem issues
function processReactions() {
    reactions.forEach(reaction => {
        if (reaction.details_tex) {
            // --- Extract main equation for preview ---
            let mainReaction = '';
            if (reaction.details_tex.includes('$$')) {
                const start = reaction.details_tex.indexOf('$$');
                const end = reaction.details_tex.indexOf('$$', start + 2);
                if (start !== -1 && end !== -1) {
                    mainReaction = reaction.details_tex.substring(start, end + 2);
                }
            }
             if (!mainReaction && reaction.details_tex.includes('$')) {
                 const start = reaction.details_tex.indexOf('$');
                 const end = reaction.details_tex.indexOf('$', start + 1);
                 if (start !== -1 && end !== -1) {
                     mainReaction = reaction.details_tex.substring(start, end + 1);
                 }
             }
             if (!mainReaction) {
                mainReaction = reaction.reagent_name;
             }
            reaction.main_equation = mainReaction.trim();
            // --- End: Extract main equation ---

            // --- Extract Title ---
            let reactionTitle = reaction.reagent_name.replace(/\\ce\{|\$\}|\$/g, '').trim();
            if (reaction.details_tex.includes('<strong>')) {
                const match = reaction.details_tex.match(/<strong>(.*?)<\/strong>/i);
                if (match && match[1]) {
                    reactionTitle = match[1].trim();
                }
            }
            reaction.title = reactionTitle;
            // --- End: Extract Title ---

             // Store the original tex for rendering WITHOUT harmful modifications
             reaction.processed_tex = reaction.details_tex;

            // Compound names extraction (Keep this part)
             let compoundNames = [];
             const emRegex = /<em>(.*?)<\/em>/gi;
             let emMatch;
             while ((emMatch = emRegex.exec(reaction.details_tex)) !== null) {
                 if (!emMatch[1].trim().toLowerCase().startsWith('notes:')) {
                     compoundNames.push(emMatch[1].trim());
                 }
             }
             reaction.compound_names = compoundNames;

        } else {
             // Handle missing details_tex
             reaction.processed_tex = "Details not available.";
             reaction.main_equation = reaction.reagent_name;
             reaction.title = reaction.reagent_name.replace(/\\ce\{|\$\}|\$/g, '').trim();
             reaction.compound_names = [];
        }
    });
}
// -------- End Simplified Data Processing --------

// Make sure this line calls the correct function:
// Inside your DOMContentLoaded listener:
// processReactionsMinimal(); // *** USE THIS INSTEAD OF processReactions() ***

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Process reactions data
    processReactions();
    
    // Load saved data from local storage
    loadSavedData();
    
    // Display total reactions count
    totalReactionsCounter.textContent = reactions.length;
    updateCounters();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set default filter to 'all' and display reactions immediately
    currentFilter = 'all';
    document.querySelector('.nav-link[data-filter="all"]').classList.add('active');
    
    // Add keyboard shortcuts info to modal title
    const modalTitle = document.querySelector('.modal-title');
    const keyboardInfo = document.createElement('span');
    keyboardInfo.className = 'keyboard-info ms-2';
    keyboardInfo.innerHTML = '<small><i class="bi bi-keyboard me-1"></i> Use ← → arrows</small>';
    modalTitle.appendChild(keyboardInfo);
    
    // Render reactions with loading animation
    showLoading();
    setTimeout(() => {
        renderReactions();
        hideLoading();
    }, 500);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('reactionModal').classList.contains('show')) {
        if (e.key === 'ArrowRight') {
            showNextReaction();
        } else if (e.key === 'ArrowLeft') {
            showPrevReaction();
        }
    }
});

// Load saved data from localStorage
function loadSavedData() {
    const savedBookmarks = localStorage.getItem('bookmarkedReactions');
    if (savedBookmarks) {
        bookmarkedReactions = JSON.parse(savedBookmarks);
    }
    
    const savedMastered = localStorage.getItem('masteredReactions');
    if (savedMastered) {
        masteredReactions = JSON.parse(savedMastered);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('bookmarkedReactions', JSON.stringify(bookmarkedReactions));
    localStorage.setItem('masteredReactions', JSON.stringify(masteredReactions));
    updateCounters();
}

// Update counters
function updateCounters() {
    bookmarkedReactionsCounter.textContent = bookmarkedReactions.length;
    masteredReactionsCounter.textContent = masteredReactions.length;
}

// Setup event listeners
function setupEventListeners() {
    // Main navigation filter links
    document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = e.target.closest('.nav-link').dataset.filter;
            updateActiveFilter(e.target.closest('.nav-link'));
            renderReactions();
        });
    });
    
    // Chapter filter dropdown items
    document.querySelectorAll('.dropdown-item[data-filter]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = e.target.dataset.filter;
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.nav-link[role="button"]').classList.add('active');
            renderReactions();
        });
    });

    // Search input
    searchInput.addEventListener('input', debounce(() => {
        showLoading();
        setTimeout(() => {
            renderReactions();
            hideLoading();
        }, 300);
    }, 300));

    // Toggle view button
    toggleViewBtn.addEventListener('click', () => {
        isGridView = !isGridView;
        toggleViewBtn.innerHTML = isGridView ? 
            '<i class="bi bi-list"></i>' : 
            '<i class="bi bi-grid"></i>';
        renderReactions();
    });
    
    // Modal bookmark button
    modalBookmarkBtn.addEventListener('click', () => {
        const reactionId = modalBookmarkBtn.dataset.reactionId;
        toggleBookmark(reactionId);
        updateBookmarkButtonState(reactionId, modalBookmarkBtn);
    });
    
    // Modal mastered button
    modalMasteredBtn.addEventListener('click', () => {
        const reactionId = modalMasteredBtn.dataset.reactionId;
        toggleMastered(reactionId);
        updateMasteredButtonState(reactionId, modalMasteredBtn);
    });
    
    // Next reaction button
    nextReactionBtn.addEventListener('click', () => {
        showNextReaction();
    });
    
    // Previous reaction button
    prevReactionBtn.addEventListener('click', () => {
        showPrevReaction();
    });
    
    // Dark mode toggle
    if (darkModeToggleBtn) {
        darkModeToggleBtn.addEventListener('click', toggleDarkMode);
    }
}

// Update active filter in navigation
function updateActiveFilter(clickedLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

// Toggle bookmark status
function toggleBookmark(reactionId) {
    const index = bookmarkedReactions.indexOf(reactionId);
    if (index === -1) {
        bookmarkedReactions.push(reactionId);
    } else {
        bookmarkedReactions.splice(index, 1);
    }
    saveData();
    renderReactions();
}

// Toggle mastered status
function toggleMastered(reactionId) {
    const index = masteredReactions.indexOf(reactionId);
    if (index === -1) {
        masteredReactions.push(reactionId);
    } else {
        masteredReactions.splice(index, 1);
    }
    saveData();
    renderReactions();
}

// Update bookmark button state
function updateBookmarkButtonState(reactionId, button) {
    if (bookmarkedReactions.includes(reactionId)) {
        button.innerHTML = '<i class="bi bi-bookmark-fill"></i>';
        button.classList.add('active');
    } else {
        button.innerHTML = '<i class="bi bi-bookmark"></i>';
        button.classList.remove('active');
    }
}

// Update mastered button state
function updateMasteredButtonState(reactionId, button) {
    if (masteredReactions.includes(reactionId)) {
        button.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
        button.classList.add('active');
    } else {
        button.innerHTML = '<i class="bi bi-check-circle"></i>';
        button.classList.remove('active');
    }
}

// Toggle dark mode
function toggleDarkMode() {
    // Not implemented - already in dark mode
    darkModeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
}

// Show loading spinner
function showLoading() {
    loadingSpinner.classList.remove('d-none');
    reactionsGrid.classList.add('d-none');
}

// Hide loading spinner
function hideLoading() {
    loadingSpinner.classList.add('d-none');
    reactionsGrid.classList.remove('d-none');
}

// Show next reaction
function showNextReaction() {
    const filteredReactions = getFilteredReactions();
    if (filteredReactions.length === 0) return;
    
    currentReactionIndex = (currentReactionIndex + 1) % filteredReactions.length;
    showReactionDetails(filteredReactions[currentReactionIndex]);
}

// Show previous reaction
function showPrevReaction() {
    const filteredReactions = getFilteredReactions();
    if (filteredReactions.length === 0) return;
    
    currentReactionIndex = (currentReactionIndex - 1 + filteredReactions.length) % filteredReactions.length;
    showReactionDetails(filteredReactions[currentReactionIndex]);
}

// Get filtered reactions
function getFilteredReactions() {
    return reactions.filter(reaction => {
        // Filter by chapter or bookmark status
        const matchesChapterFilter = 
            currentFilter === 'all' || 
            (currentFilter === 'bookmarks' && bookmarkedReactions.includes(reaction.id)) ||
            reaction.chapter === currentFilter;
        
        // Filter by search term
        const searchTerm = searchInput.value.toLowerCase();
        const matchesSearch = searchTerm === '' || 
            reaction.reagent_name.toLowerCase().includes(searchTerm) ||
            (reaction.title && reaction.title.toLowerCase().includes(searchTerm)) ||
            (reaction.processed_tex && reaction.processed_tex.toLowerCase().includes(searchTerm));
        
        return matchesChapterFilter && matchesSearch;
    });
}

// Create reaction card
function createReactionCard(reaction) {
    const isBookmarked = bookmarkedReactions.includes(reaction.id);
    const isMastered = masteredReactions.includes(reaction.id);
    
    const card = document.createElement('div');
    card.className = `col-md-${isGridView ? '4' : '12'} mb-4`;
    
    card.innerHTML = `
        <div class="card reaction-card" data-id="${reaction.id}">
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="chapter-badge badge">${reaction.chapter}</span>
                    <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${reaction.id}">
                        <i class="bi bi-bookmark${isBookmarked ? '-fill' : ''}"></i>
                    </button>
                </div>
                <h5 class="card-title mt-2">${reaction.title || reaction.reagent_name}</h5>
            </div>
            <div class="card-body">
                <div class="chemical-formula">
                    ${reaction.main_equation || reaction.reagent_name}
                </div>
                <div class="mt-3 d-flex justify-content-between align-items-center">
                    <small class="text-muted">Page: ${reaction.page_ref}</small>
                    ${isMastered ? '<span class="badge bg-success"><i class="bi bi-check-circle"></i> Mastered</span>' : ''}
                </div>
            </div>
        </div>
    `;

    // Add click event for the card
    card.querySelector('.reaction-card').addEventListener('click', (e) => {
        if (!e.target.closest('.bookmark-btn')) {
            const index = getFilteredReactions().findIndex(r => r.id === reaction.id);
            currentReactionIndex = index !== -1 ? index : 0;
            showReactionDetails(reaction);
        }
    });
    
    // Add click event for the bookmark button
    card.querySelector('.bookmark-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(reaction.id);
        updateBookmarkButtonState(reaction.id, e.currentTarget);
    });

    return card;
}

// Show reaction details in modal
function showReactionDetails(reaction) {
    const modalBody = document.querySelector('.modal-body');
    
    // Update bookmark and mastered buttons
    modalBookmarkBtn.dataset.reactionId = reaction.id;
    modalMasteredBtn.dataset.reactionId = reaction.id;
    updateBookmarkButtonState(reaction.id, modalBookmarkBtn);
    updateMasteredButtonState(reaction.id, modalMasteredBtn);
    
    // Create compound names HTML if available
    let compoundNamesHTML = '';
    if (reaction.compound_names && reaction.compound_names.length > 0) {
        compoundNamesHTML = `
            <div class="compound-names">
                ${reaction.compound_names.map(name => `<div class="compound-name">${name}</div>`).join('')}
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="reaction-details">
            <div class="d-flex justify-content-between mb-2">
                <h5 class="text-primary">${reaction.chapter}</h5>
                <small class="text-muted">Page: ${reaction.page_ref}</small>
            </div>
            <h2 class="reaction-title">${reaction.title || reaction.reagent_name}</h2>
            <div class="chemical-formula">
                ${reaction.processed_tex || ''}
            </div>
            ${compoundNamesHTML}
        </div>
    `;
    
    reactionModal.show();
    
    // Render math when modal is shown
    setTimeout(() => {
        if (window.MathJax) {
            MathJax.typesetPromise([modalBody])
                .then(() => {
                    // Only hide error messages, not the actual content
                    hideErrorMessages(modalBody);
                })
                .catch((err) => {
                    console.error('Error typesetting math:', err);
                });
        }
    }, 100);
}

// Helper function to hide MathJax error messages
function hideErrorMessages(container) {
    if (!container) return;
    
    // Only target actual error messages, not all MathJax content
    container.querySelectorAll('.mjx-error, mjx-merror').forEach(el => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
    });
    
    // Look for text nodes with error messages
    const errorTexts = ['extra close brace', 'missing open brace', 'math processing error'];
    
    // Find any element containing error text
    container.querySelectorAll('*').forEach(el => {
        if (el.childNodes && el.childNodes.length > 0) {
            for (let i = 0; i < el.childNodes.length; i++) {
                const node = el.childNodes[i];
                if (node.nodeType === 3 && node.nodeValue) { // Text node
                    for (const errorText of errorTexts) {
                        if (node.nodeValue.toLowerCase().includes(errorText)) {
                            node.nodeValue = '';
                            break;
                        }
                    }
                }
            }
        }
    });
}

// Render reactions
function renderReactions() {
    reactionsGrid.innerHTML = '';
    const filteredReactions = getFilteredReactions();
    
    if (filteredReactions.length === 0) {
        reactionsGrid.innerHTML = `
            <div class="col-12 text-center my-5">
                <i class="bi bi-emoji-frown" style="font-size: 3rem; opacity: 0.5;"></i>
                <h4 class="mt-3">No reactions found</h4>
                <p>Try changing your search criteria or select a different chapter</p>
            </div>
        `;
        return;
    }
    
    filteredReactions.forEach(reaction => {
        reactionsGrid.appendChild(createReactionCard(reaction));
    });
    
    // Render math for all cards
    setTimeout(() => {
        if (window.MathJax) {
            MathJax.typesetPromise([reactionsGrid])
                .then(() => {
                    // After successful typesetting, hide errors
                    hideErrorMessages(reactionsGrid);
                })
                .catch((err) => {
                    console.error('Error typesetting math:', err);
                    // Don't show errors to the user, just continue
                    hideErrorMessages(reactionsGrid);
                });
        }
    }, 100);
}

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 