// reactions.js (Corrected Version)
const reactionsData = [
    // --- Hydrocarbons ---
    {
        "id": "hydro_1",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{H2 + Ni/Pt/Pd$ (Catalytic Hydrogenation)",
        "details_tex": `
$$ \\ce{H2C=CH2 (Ethene) + H2 ->[Ni/Pt/Pd] H3C-CH3 (Ethane)} $$
$$ \\ce{HC#CH (Ethyne) + 2H2 ->[Ni/Pt/Pd] H3C-CH3 (Ethane)} $$
<em>Notes:</em> Reduction of alkenes and alkynes to alkanes. Syn addition.`,
        "page_ref": 1
    },
    {
        "id": "hydro_3",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{H2 + Zn, H+$",
        "details_tex": `
$$ \\ce{CH3-X (Methyl halide, X=Cl, Br, I) + H2 ->[Zn, H+] CH4 (Methane) + HX} $$
<em>Notes:</em> Reduction of alkyl halides to alkanes.`,
        "page_ref": 3
    },
    {
        "id": "hydro_4",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Na}$ + Dry Ether",
        "details_tex": `
<strong>Wurtz Reaction</strong><br>
$$ \\ce{CH3Br (Bromomethane) + 2Na + BrCH3 ->[Dry Ether] CH3-CH3 (Ethane) + 2NaBr} $$
$$ \\ce{C2H5Br (Bromoethane) + 2Na + BrC2H5 ->[Dry Ether] C2H5-C2H5 (n-Butane) + 2NaBr} $$
<em>Notes:</em> Couples alkyl halides to form higher alkanes. Best for symmetrical alkanes. Radical mechanism.`,
        "page_ref": 4
    },
    {
        "id": "hydro_5",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Na}$ + Dry Ether",
        "details_tex": `
<strong>Fittig Reaction</strong><br>
$$ \\ce{2 C6H5-X (Aryl halide) + 2Na ->[Ether] C6H5-C6H5 (Diphenyl/Biphenyl) + 2NaX} $$
<em>Notes:</em> Couples aryl halides.`,
        "page_ref": 5
    },
    {
        "id": "hydro_6",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Na}$ + Dry Ether",
        "details_tex": `
<strong>Wurtz-Fittig Reaction</strong><br>
$$ \\ce{C6H5Br (Bromobenzene) + 2Na + Br-CH3 ->[Dry Ether] C6H5-CH3 (Toluene) + 2NaBr} $$
$$ \\ce{C6H5Br (Bromobenzene) + 2Na + Br-C6H11 (Bromocyclohexane) ->[Dry Ether] C6H5-C6H11 (Cyclohexylbenzene) + 2NaBr} $$
<em>Notes:</em> Couples an aryl halide and an alkyl halide.`,
        "page_ref": 6
    },
    {
        "id": "hydro_7",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Cl2} + h\\nu$",
        "details_tex": `
<strong>Free Radical Halogenation of Alkanes</strong><br>
$$ \\ce{CH4 (Methane) + Cl2 ->[h\\nu] CH3Cl (Chloromethane) + HCl} $$
$$ \\ce{CH3Cl + Cl2 ->[h\\nu] CH2Cl2 (Dichloromethane) + HCl} $$
$$ \\ce{CH2Cl2 + Cl2 ->[h\\nu] CHCl3 (Trichloromethane/Chloroform) + HCl} $$
$$ \\ce{CHCl3 + Cl2 ->[h\\nu] CCl4 (Tetrachloromethane) + HCl} $$
<em>Notes:</em> Free radical substitution. Can lead to mixtures. Light or heat initiates.`,
        "page_ref": 7
    },
    {
        "id": "hydro_8",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{I2 + HNO3}$ or $\\ce{HIO3}$",
        "details_tex": `
<strong>Iodination of Alkanes</strong><br>
$$ \\ce{CH4 + I2 <=> CH3I + HI} $$
$$ \\ce{HIO3 + 5HI -> 3I2 + 3H2O} $$
<em>Notes:</em> Iodination is slow and reversible. Oxidizing agents ($\\ce{HNO3, HIO3}$) remove HI to shift equilibrium.`,
        "page_ref": 8
    },
    {
        "id": "hydro_9",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{HBr, HCl, HI}$ (Markovnikov)",
        "details_tex": `
<strong>Electrophilic Addition to Alkenes (Markovnikov)</strong><br>
$$ \\ce{CH3-C(CH3)=CH-CH3 + HBr -> CH3-CBr(CH3)-CH2-CH3} $$
$$ \\ce{CH3-C(CH3)=CH-CH2CH3 + HCl -> CH3-CCl(CH3)-CH2CH2CH3} $$
$$ \\text{Decalin derivative alkene} + \\ce{HCl ->} \\text{Chloro-substituted decalin} $$
$$ \\text{Methylenecyclohexane} + \\ce{HI ->} \\text{1-Iodo-1-methylcyclohexane} $$
<em>Notes:</em> Follows Markovnikov's rule. Carbocation intermediate.`,
        "page_ref": 9
    },
    {
        "id": "hydro_10",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{HBr}$ + Peroxide (Anti-Markovnikov)",
        "details_tex": `
<strong>Free Radical Addition (Anti-Markovnikov)</strong><br>
$$ \\ce{CH3-CH=CH2 (Propene) + HBr ->[Peroxide][{(C6H5CO)2O2}] CH3-CH2-CH2Br (1-Bromopropane)} $$
$$ \\text{1-Methylcyclohexene} + \\ce{HBr ->[R-O-O-R][\Delta]} \\text{1-Bromo-2-methylcyclohexane (trans shown)} $$
<em>Notes:</em> Anti-Markovnikov addition. Occurs *only* with HBr + Peroxide. Free radical mechanism.`,
        "page_ref": 10
    },
    {
        "id": "hydro_11",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{H2O + H+}$",
        "details_tex": `
<strong>Acid-Catalyzed Hydration of Alkenes</strong><br>
$$ \\ce{CH3-C(CH3)=CH2 (2-Methylpropene) + H2O ->[H+] CH3-C(OH)(CH3)-CH3 (2-Methylpropan-2-ol)} $$
<em>Notes:</em> Follows Markovnikov's rule. Carbocation intermediate (rearrangements possible).`,
        "page_ref": 11
    },
    {
        "id": "hydro_12",
        "chapter": "Hydrocarbons",
        "reagent_name": "Cold conc. $\\ce{H2SO4}$",
        "details_tex": `
<strong>Addition to Alkenes</strong><br>
$$ \\ce{CH3-CH=CH2 (Propene) + HOSO3H (H2SO4) -> CH3-CH(OSO3H)-CH3 (Propyl hydrogen sulphate)} $$
<em>Notes:</em> Follows Markovnikov's rule. Intermediate in hydration.`,
        "page_ref": 12
    },
    {
        "id": "hydro_13",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Cu}$, 523 K, 100 atm",
        "details_tex": `
<strong>Controlled Oxidation of Alkanes</strong><br>
$$ \\ce{2CH4 (Methane) + O2 ->[Cu/523K/100atm] 2CH3OH (Methanol)} $$
<em>Notes:</em> Specific conditions for partial oxidation.`,
        "page_ref": 13
    },
    {
        "id": "hydro_14",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Mo2O3} / \\Delta$",
        "details_tex": `
<strong>Controlled Oxidation of Alkanes</strong><br>
$$ \\ce{CH4 (Methane) + O2 ->[Mo2O3 / \Delta] HCHO (Methanal) + H2O} $$`,
        "page_ref": 14
    },
    {
        "id": "hydro_15",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{(CH3COO)2Mn} / \\Delta$",
        "details_tex": `
<strong>Controlled Oxidation of Alkanes</strong><br>
$$ \\ce{2CH3CH3 (Ethane) + 3O2 ->[(CH3COO)2Mn / \Delta] 2CH3COOH (Ethanoic acid) + 2H2O} $$`,
        "page_ref": 15
    },
    {
        "id": "hydro_16",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{KMnO4}$ (Controlled Oxidation)",
        "details_tex": `
<strong>Controlled Oxidation of Alkanes</strong><br>
$$ \\ce{(CH3)3CH (Isobutane) ->[KMnO4][Oxidation] (CH3)3COH (tert-Butyl alcohol)} $$
<em>Notes:</em> Oxidizes tertiary C-H bonds to C-OH.`,
        "page_ref": 16
    },
    {
        "id": "hydro_17",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Cr2O3}$ or $\\ce{V2O5}$ or $\\ce{Mo2O3}$, 773K, 10-20 atm",
        "details_tex": `
<strong>Aromatization</strong><br>
$$ \\ce{CH3(CH2)4CH3 (n-Hexane) ->[Cr2O3 etc.][773K, 10-20atm] C6H6 (Benzene) + 4H2} $$
<em>Notes:</em> Conversion of C6+ alkanes to aromatic rings. Dehydrogenation and cyclization.`,
        "page_ref": 17
    },
    {
        "id": "hydro_18",
        "chapter": "Hydrocarbons",
        "reagent_name": "Steam + $\\ce{Ni}$, 1273 K",
        "details_tex": `
<strong>Steam Reforming</strong><br>
$$ \\ce{CH4 (Methane) + H2O (Steam) ->[Ni / 1273K] CO + 3H2} $$
<em>Notes:</em> Industrial production of hydrogen / syngas.`,
        "page_ref": 18
    },
    {
        "id": "hydro_19",
        "chapter": "Hydrocarbons",
        "reagent_name": "Pyrolysis / Cracking",
        "details_tex": `
<strong>Pyrolysis / Cracking</strong><br>
<em>Hexane Example:</em><br>
$$ \\ce{C6H14 ->[773K] C6H12 + H2 / C4H8 + C2H6 / C3H6 + C2H4 + CH4 etc.} $$
<em>Dodecane Example:</em><br>
$$ \\ce{C12H26 ->[Pt/Pd/Ni][973K] C7H16 + C5H10 + other products} $$
<em>Notes:</em> Thermal decomposition into smaller alkanes/alkenes. Free radical mechanism.`,
        "page_ref": 19
    },
    {
        "id": "hydro_20",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{NaOH + CaO} (\\Delta)$",
        "details_tex": `
<strong>Decarboxylation (Soda Lime)</strong><br>
$$ \\ce{CH3COONa+ + NaOH ->[CaO][\Delta] CH4 + Na2CO3} $$
$$ \\ce{C6H5COONa + NaOH ->[CaO][\Delta] C6H6 + Na2CO3} $$
<em>Notes:</em> Removes carboxyl group. Alkane/Arene has one less carbon. CaO keeps NaOH dry.`,
        "page_ref": 20
    },
    {
        "id": "hydro_21",
        "chapter": "Hydrocarbons",
        "reagent_name": "Kolbe's Electrolytic Method",
        "details_tex": `
<strong>Kolbe's Electrolysis</strong><br>
<em>Overall:</em> $$ \\ce{2CH3COONa + 2H2O ->[Electrolysis] CH3-CH3 + 2CO2 ^ + H2 ^ + 2NaOH} $$
<em>Anode:</em> $$ \\ce{2CH3COO- -> 2CH3. + 2CO2 ^ + 2e-} ; \\quad \\ce{2CH3. -> CH3-CH3} $$
<em>Cathode:</em> $$ \\ce{2H2O + 2e- -> H2 ^ + 2OH-} $$
<em>Notes:</em> Electrolysis of carboxylate salts. Forms alkanes via radical coupling.`,
        "page_ref": 21
    },
    {
        "id": "hydro_22",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{H2 + Pd/C}$ (Lindlar's Catalyst)",
        "details_tex": `
<strong>Lindlar's Catalyst</strong><br>
$$ \\ce{RC#CR' (Alkyne) + H2 ->[Pd/C][CaCO3/quinoline 'poison'] cis-RCH=CHR' (cis-Alkene)} $$
<em>Notes:</em> Partial reduction of alkyne to *cis*-alkene. Syn addition. Poisoned catalyst.`,
        "page_ref": 22
    },
    {
        "id": "hydro_23",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Na}$ + Liq $\\ce{NH3}$",
        "details_tex": `
<strong>Birch Reduction (Alkynes)</strong><br>
$$ \\ce{RC#CR' (Alkyne) + 2Na ->[liq NH3] trans-RCH=CHR' (trans-Alkene) + 2NaNH2} $$
<em>Notes:</em> Partial reduction of alkyne to *trans*-alkene. Dissolving metal reduction. Anti addition.`,
        "page_ref": 23
    },
    {
        "id": "hydro_24",
        "chapter": "Hydrocarbons",
        "reagent_name": "Cold dilute $\\ce{KMnO4}$",
        "details_tex": `
<strong>Baeyer's Reagent</strong><br>
$$ \\ce{CH2=CH2 (Ethene) + H2O + [O] ->[dil. KMnO4][273 K] HO-CH2-CH2-OH (Glycol)} $$
$$ \\ce{CH3-CH=CH2 (Propene) + H2O + [O] ->[dil. KMnO4][273 K] CH3CH(OH)CH2OH (Propane-1,2-diol)} $$
<em>Notes:</em> Syn dihydroxylation of alkenes. Purple color disappears. Test for unsaturation. [O] from $\\ce{MnO4-}$.`,
        "page_ref": 24
    },
    {
        "id": "hydro_25",
        "chapter": "Hydrocarbons",
        "reagent_name": "Hot $\\ce{KMnO4}$ or $\\ce{K2Cr2O7} (\\Delta)$",
        "details_tex": `
<strong>Oxidative Cleavage of Alkenes</strong><br>
<em>Basic:</em> $$ \\ce{CH3CH2C(CH3)=CHCH3 ->[KMnO4, OH-][\Delta] CH3CH2C(=O)CH3 + CH3COO-} $$
<em>Acidic:</em> $$ \\ce{CH3CH2CH=CH2 ->[KMnO4, H+][\Delta] CH3CH2COOH + CO2 (+ H2O)} $$
<em>Basic:</em> $$ \\text{Methylenecyclohexane} \\ce{->[KMnO4, OH-][\Delta] Cyclohexanone + CO2} \\text{ (as } \\ce{CO3^2-)} $$
<em>Notes:</em> Cleaves C=C bond. Products: $\\ce{=CH2 -> CO2}$, $\\ce{=CHR -> RCOOH (or RCOO-)}$, $\\ce{=CR2 -> Ketone}$. Vigorous.`,
        "page_ref": 25
    },
    {
        "id": "hydro_26",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{O3}$ + $\\ce{Zn/H2O}$",
        "details_tex": `
<strong>Reductive Ozonolysis</strong><br>
<em>Alkene:</em> $$ \\ce{ >C=C< ->[1. O3, -70^\\circ C][2. Zn/H2O or Me2S] >C=O + O=C< } $$
$$ \\ce{RCH=CHR' -> RCHO + R'CHO} $$
$$ \\ce{R2C=CH2 -> R2C=O + HCHO} $$
<em>Alkyne:</em> $$ \\ce{RC#CR' ->[1. O3][2. Zn/H2O] R-CO-CO-R' } \\text{ (Diketone, or acids)} $$
<em>Notes:</em> Cleaves $\\ce{C=C}$ or $\\ce{C#C}$. Reductive workup gives aldehydes/ketones.`,
        "page_ref": "26 & 28"
    },
    {
        "id": "hydro_27",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{O3 + H2O2}$",
        "details_tex": `
<strong>Oxidative Ozonolysis</strong><br>
<em>Alkene:</em> $$ \\ce{ >C=C< ->[1. O3, -70^\\circ C][2. H2O2] Carboxylic Acids / Ketones} $$
$$ \\ce{RCH=CHR' -> RCOOH + R'COOH} $$
$$ \\ce{R2C=CHR' -> R2C=O + R'COOH} $$
$$ \\ce{R2C=CR'_2 -> R2C=O + R'_2C=O} $$
<em>Notes:</em> Cleaves $\\ce{C=C}$. Oxidative workup gives acids (from $\\ce{=CH2, =CHR}$) and/or ketones (from $\\ce{=CR2}$).`,
        "page_ref": "27 & 28"
    },
    {
        "id": "hydro_29",
        "chapter": "Hydrocarbons",
        "reagent_name": "Carbide + $\\ce{H2O}$",
        "details_tex": `
<strong>Hydrolysis of Carbides</strong><br>
$$ \\ce{Al4C3 + 12H2O ->[\Delta] 4Al(OH)3 + 3CH4} $$
$$ \\ce{Be2C + 4H2O ->[\Delta] 2Be(OH)2 + CH4} $$
$$ \\ce{CaC2 + 2H2O -> Ca(OH)2 + C2H2 (Ethyne)} $$
<em>Notes:</em> Preparation of methane or ethyne.`,
        "page_ref": 29
    },
    {
        "id": "hydro_30",
        "chapter": "Hydrocarbons",
        "reagent_name": "Red Hot $\\ce{Fe}$ tube, 873 K",
        "details_tex": `
<strong>Cyclic Polymerization of Ethyne</strong><br>
$$ \\ce{3 HC#CH (Ethyne) ->[Red hot Fe][873 K] C6H6 (Benzene)} $$
<em>Notes:</em> Trimerization of ethyne.`,
        "page_ref": 30
    },
    {
        "id": "hydro_31",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{NaNH2}$",
        "details_tex": `
<strong>Reaction of Terminal Alkynes</strong><br>
<em>Acid-Base:</em> $$ \\ce{CH3-C#C-H + NaNH2 -> CH3-C#C-Na+ + NH3} $$
<em>Alkylation:</em> $$ \\ce{CH3CH2C#CH ->[1. NaNH2] CH3CH2C#C-Na+ ->[2. CH3CH2Br] CH3CH2C#CCH2CH3} $$
<em>Notes:</em> $\\ce{NaNH2}$ deprotonates terminal alkynes. Acetylide is a good nucleophile.`,
        "page_ref": 31
    },
    {
        "id": "hydro_32",
        "chapter": "Hydrocarbons",
        "reagent_name": "dil $\\ce{HgSO4, H2SO4}$",
        "details_tex": `
<strong>Hydration of Alkynes (Markovnikov)</strong><br>
$$ \\ce{R-C#C-H + H2O ->[HgSO4][H2SO4] [R-C(OH)=CH2] (Enol) <=> R-C(=O)-CH3 (Ketone)} $$
$$ \\ce{HC#CH + H2O ->[HgSO4][H2SO4] [CH2=CHOH] <=> CH3CHO (Ethanal)} $$
<em>Notes:</em> Markovnikov addition of water. Enol tautomerizes to keto form.`,
        "page_ref": 32
    },
    {
        "id": "hydro_35",
        "chapter": "Hydrocarbons",
        "reagent_name": "Anhy. $\\ce{AlCl3/HCl}$",
        "details_tex": `
<strong>Isomerization of Alkanes</strong><br>
$$ \\ce{CH3(CH2)4CH3 (n-Hexane) ->[Anhy. AlCl3/HCl] CH3CH(CH3)(CH2)2CH3 + CH3CH2CH(CH3)CH2CH3} $$
<em>Notes:</em> Converts straight-chain to branched isomers via carbocations.`,
        "page_ref": 35
    },
    {
        "id": "hydro_36",
        "chapter": "Hydrocarbons",
        "reagent_name": "Polymerisation",
        "details_tex": `
<strong>Addition Polymerisation</strong><br>
$$ \\ce{n CH2=CH2 ->[High T/P][Catalyst] [-CH2-CH2-]_n} \\text{ (Polythene)} $$
$$ \\ce{n CH3-CH=CH2 ->[High T/P][Catalyst] [-CH(CH3)-CH2-]_n} \\text{ (Polypropene)} $$
<em>Notes:</em> Belongs to Polymers chapter.`,
        "page_ref": 36
    },
    {
        "id": "hydro_37_91",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Zn}$ dust $(\\Delta)$",
        "details_tex": `
<strong>Reduction of Phenol</strong><br>
$$ \\ce{C6H5OH (Phenol) + Zn ->[\Delta][dust] C6H6 (Benzene) + ZnO} $$
<em>Notes:</em> Reduces phenol to benzene.`,
        "page_ref": "37, 91"
    },
    {
        "id": "hydro_38",
        "chapter": "Hydrocarbons",
        "reagent_name": "Conc. $\\ce{HNO3}$, Conc. $\\ce{H2SO4}$",
        "details_tex": `
<strong>Nitration of Benzene (EAS)</strong><br>
$$ \\ce{C6H6 + HNO3 ->[Conc. H2SO4] C6H5NO2 + H2O} $$
<em>Notes:</em> Electrophilic Aromatic Substitution. Electrophile: $\\ce{NO2+}$.`,
        "page_ref": 38
    },
    {
        "id": "hydro_39",
        "chapter": "Hydrocarbons",
        "reagent_name": "Conc. $\\ce{H2SO4} (\\Delta)$",
        "details_tex": `
<strong>Sulfonation of Benzene (EAS)</strong><br>
$$ \\ce{C6H6 + H2SO4 <=> C6H5SO3H + H2O} $$
<em>Notes:</em> Electrophilic Aromatic Substitution. Electrophile: $\\ce{SO3}$. Reversible.`,
        "page_ref": 39
    },
    {
        "id": "hydro_40",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Cl2, FeCl3 / AlCl3}$",
        "details_tex": `
<strong>Chlorination of Benzene (EAS)</strong><br>
$$ \\ce{C6H6 + Cl2 ->[FeCl3 or AlCl3] C6H5Cl + HCl} $$
<em>Notes:</em> Electrophilic Aromatic Substitution. Lewis acid generates $\\ce{Cl+}$ equivalent.`,
        "page_ref": 40
    },
    {
        "id": "hydro_41",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Br2, FeBr3 / AlBr3}$",
        "details_tex": `
<strong>Bromination of Benzene (EAS)</strong><br>
$$ \\ce{C6H6 + Br2 ->[FeBr3 or AlBr3] C6H5Br + HBr} $$
<em>Notes:</em> Electrophilic Aromatic Substitution. Lewis acid generates $\\ce{Br+}$ equivalent.`,
        "page_ref": 41
    },
    {
        "id": "hydro_42",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{R-Cl + AlCl3}$",
        "details_tex": `
<strong>Friedel-Crafts Alkylation (EAS)</strong><br>
$$ \\ce{C6H6 + R-Cl ->[AlCl3] C6H5-R + HCl} $$
<em>Notes:</em> Electrophilic Aromatic Substitution. Electrophile: $\\ce{R+}$. Limitations: Rearrangements, polyalkylation, deactivated rings fail.`,
        "page_ref": 42
    },
    {
        "id": "hydro_43",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{RCOCl / (RCO)2O + AlCl3}$",
        "details_tex": `
<strong>Friedel-Crafts Acylation (EAS)</strong><br>
$$ \\ce{C6H6 + R-COCl ->[1. AlCl3][2. H2O] C6H5-COR + HCl} $$
$$ \\ce{C6H6 + (RCO)2O ->[1. AlCl3][2. H2O] C6H5-COR + RCOOH} $$
<em>Notes:</em> Electrophilic Aromatic Substitution. Electrophile: $\\ce{R-C#O+}$. No rearrangements. Mono-substitution. Product is Ketone.`,
        "page_ref": 43
    },
    {
        "id": "hydro_104",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{CrO2Cl2 + CS2}$ then $\\ce{H+}$",
        "details_tex": `
<strong>Etard reaction</strong><br>
$$ \\ce{C6H5CH3 (Toluene) ->[1. CrO2Cl2, CS2][2. H3O+] C6H5CHO (Benzaldehyde)} $$
<em>Notes:</em> Oxidation of toluene methyl group to aldehyde via chromium complex.`,
        "page_ref": 104
    },
    {
        "id": "hydro_105",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{CrO3 + (CH3CO)2O}$ then $\\ce{H+/\\Delta}$",
        "details_tex": `
<strong>Oxidation of Toluene</strong><br>
$$ \\ce{C6H5CH3 ->[1. CrO3, (CH3CO)2O][273-283K] [C6H5CH(OCOCH3)2] ->[2. H3O+/\\Delta] C6H5CHO} $$
<em>Notes:</em> Oxidation via benzylidene diacetate intermediate.`,
        "page_ref": 105
    },
    {
        "id": "hydro_106",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{Cl2}/h\\nu$ then $\\ce{H2O/\\Delta}$",
        "details_tex": `
<strong>Side-Chain Halogenation then Hydrolysis</strong><br>
$$ \\ce{C6H5CH3 ->[Cl2/h\\nu] C6H5CHCl2 (Benzal chloride) ->[H2O/373K] C6H5CHO} $$
<em>Notes:</em> Free radical halogenation then hydrolysis of gem-dihalide.`,
        "page_ref": 106
    },
    {
        "id": "hydro_107",
        "chapter": "Hydrocarbons",
        "reagent_name": "$\\ce{CO, HCl + Anhyd. AlCl3/CuCl}$",
        "details_tex": `
<strong>Gattermann-Koch Reaction</strong><br>
$$ \\ce{C6H6 (Benzene) + CO + HCl ->[Anhyd. AlCl3/CuCl] C6H5CHO (Benzaldehyde)} $$
<em>Notes:</em> Formylation of benzene (EAS). Does not work well with phenols/ethers.`,
        "page_ref": 107
    },
    {
        "id": "hydro_151",
        "chapter": "Hydrocarbons",
        "reagent_name": "NBS / light",
        "details_tex": `
<strong>Allylic Bromination</strong><br>
$$ \\ce{R-CH2-CH=CH2 + NBS ->[light/\\Delta/ROOR] R-CHBr-CH=CH2 (+ Succinimide)} $$
<em>Notes:</em> N-Bromosuccinimide for free-radical substitution at allylic position.`,
        "page_ref": 151
    },

    // --- Haloalkanes and Haloarenes ---
    {
        "id": "halo_44",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{PX3}$ (X=Cl, Br)",
        "details_tex": `
<strong>Alcohol to Alkyl Halide</strong><br>
$$ \\ce{3R-OH + PX3 -> 3R-X + H3PO3} $$
<em>Notes:</em> Converts alcohols to alkyl chlorides/bromides.`,
        "page_ref": 44
    },
    {
        "id": "halo_45",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "Red $\\ce{P + X2}$ (X=Br, I)",
        "details_tex": `
<strong>Alcohol to Alkyl Halide</strong><br>
$$ \\ce{R-OH ->[Red P / X2] R-X} $$
<em>Notes:</em> In situ generation of $\\ce{PX3}$. Good for R-Br and R-I.`,
        "page_ref": 45
    },
    {
        "id": "halo_46",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{PCl5}$",
        "details_tex": `
<strong>Alcohol to Alkyl Chloride</strong><br>
$$ \\ce{R-OH + PCl5 -> R-Cl + POCl3 + HCl} $$`,
        "page_ref": 46
    },
    {
        "id": "halo_47",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{SOCl2}$",
        "details_tex": `
<strong>Darzens Process</strong><br>
$$ \\ce{R-OH + SOCl2 ->[Pyridine] R-Cl + SO2 ^ + HCl ^} $$
<em>Notes:</em> Best method for R-Cl from R-OH (gaseous byproducts).`,
        "page_ref": 47
    },
    {
        "id": "halo_48",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{NaI}$ + Dry Acetone",
        "details_tex": `
<strong>Finkelstein Reaction</strong><br>
$$ \\ce{R-Cl/R-Br + NaI <=> R-I + NaCl/NaBr(s) v} $$
$$ \\ce{CH3-CHCl-CH3 + NaI ->[Acetone] CH3-CHI-CH3 + NaCl v} $$
<em>Notes:</em> Halogen exchange (Cl/Br to I). Driven by precipitation. SN2.`,
        "page_ref": 48
    },
    {
        "id": "halo_49",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{NaNO2 + HX}$ then $\\ce{Cu2X2}$",
        "details_tex": `
<strong>Sandmeyer Reaction</strong><br>
<em>Diazotization:</em> $$ \\ce{Ar-NH2 + NaNO2 + 2HX ->[0-5^\\circ C] Ar-N2+X- + NaX + 2H2O} $$
<em>Substitution:</em> $$ \\ce{Ar-N2+X- ->[Cu2X2 / HX] Ar-X + N2} \\quad \\text{(X = Cl, Br)} $$
<em>Notes:</em> Primary aromatic amines to aryl halides via diazonium salts.`,
        "page_ref": 49
    },
    {
        "id": "halo_50",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{Cu/HCl}$ and $\\ce{Cu/HBr}$",
        "details_tex": `
<strong>Gattermann Reaction</strong><br>
$$ \\ce{Ar-N2+X- ->[Cu powder / HX] Ar-X + N2} \\quad \\text{(X=Cl, Br)} $$
<em>Notes:</em> Similar to Sandmeyer but uses Cu powder. Lower yield generally.`,
        "page_ref": 50
    },
    {
        "id": "halo_51",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{HBF4 + \\Delta}$",
        "details_tex": `
<strong>Balz-Schiemann Reaction</strong><br>
$$ \\ce{Ar-N2+Cl- + HBF4 -> Ar-N2+BF4- v + HCl} $$
$$ \\ce{Ar-N2+BF4- ->[\\Delta] Ar-F + BF3 + N2} $$
<em>Notes:</em> Preparation of fluorobenzene from diazonium salt.`,
        "page_ref": 51
    },
    {
        "id": "halo_52",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{KI}$",
        "details_tex": `
<strong>Diazonium Salt to Aryl Iodide</strong><br>
$$ \\ce{Ar-N2+X- + KI ->[Warm] Ar-I + KX + N2} $$
<em>Notes:</em> Preparation of iodobenzene. No copper catalyst needed.`,
        "page_ref": 52
    },
    {
        "id": "halo_53",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{KCN}$ or $\\ce{NaCN}$",
        "details_tex": `
<strong>Alkyl Halide to Nitrile</strong><br>
$$ \\ce{R-X + CN- ->[SN2] R-CN + X-} $$
$$ \\ce{CH3CH2-Br + KCN -> CH3CH2-CN + KBr} $$
<em>Notes:</em> Nucleophilic substitution (SN2). Increases C chain by one. Product: Nitrile.`,
        "page_ref": 53
    },
    {
        "id": "halo_54",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{AgCN}$",
        "details_tex": `
<strong>Alkyl Halide to Isocyanide</strong><br>
$$ \\ce{R-X + AgCN -> R-NC + AgX v} $$
$$ \\ce{CH3CH2-Br + AgCN -> CH3CH2-NC + AgBr v} $$
<em>Notes:</em> Nucleophilic substitution. AgCN (covalent), N attacks. Product: Isocyanide.`,
        "page_ref": 54
    },
    {
        "id": "halo_55",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{KNO2}$ or $\\ce{NaNO2}$",
        "details_tex": `
<strong>Alkyl Halide to Alkyl Nitrite</strong><br>
$$ \\ce{R-X + KNO2 -> R-O-N=O + KX} $$
$$ \\ce{CH3-Br + K+ O-N=O ->[\\Delta] CH3-O-N=O + KBr} $$
<em>Notes:</em> Nucleophilic substitution. $\\ce{NO2-}$ is ambident. Ionic nitrite, O attacks. Product: Alkyl nitrite.`,
        "page_ref": 55
    },
    {
        "id": "halo_56",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{AgNO2}$",
        "details_tex": `
<strong>Alkyl Halide to Nitroalkane</strong><br>
$$ \\ce{R-X + AgNO2 -> R-NO2 + AgX v} $$
$$ \\ce{CH3-Br + Ag-O-N=O ->[C2H5OH/H2O] CH3-NO2 + AgBr v} $$
<em>Notes:</em> Nucleophilic substitution. $\\ce{AgNO2}$ (covalent), N attacks. Product: Nitroalkane.`,
        "page_ref": 56
    },
    {
        "id": "halo_57_59",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{NaOH}$ (Hydrolysis of Haloarenes)",
        "details_tex": `
<strong>Dow's Process / SNAr</strong><br>
<em>Harsh:</em> $$ \\ce{C6H5Cl + NaOH ->[623K, 300atm] C6H5ONa ->[H+] C6H5OH} $$
<em>Easier (-EWG):</em> $$ \\ce{p-NO2-C6H4-Cl ->[1. NaOH, 443K][2. H+] p-NO2-C6H4-OH} $$
<em>Easier still:</em> $$ \\ce{2,4-(NO2)2-C6H3-Cl ->[1. NaOH, 368K][2. H+] 2,4-(NO2)2-C6H3-OH} $$
<em>Easiest:</em> $$ \\ce{2,4,6-(NO2)3-C6H2-Cl + H2O ->[warm] 2,4,6-(NO2)3-C6H2-OH} $$
<em>Notes:</em> Nucleophilic Aromatic Substitution. Difficult normally, facilitated by ortho/para EWGs.`,
        "page_ref": "57-59"
    },
    {
        "id": "halo_108",
        "chapter": "Haloalkanes and Haloarenes",
        "reagent_name": "$\\ce{Mg}$ / Dry Ether or THF",
        "details_tex": `
<strong>Grignard Reagent Formation</strong><br>
$$ \\ce{R-X + Mg ->[Dry ether/THF] R-MgX} $$
$$ \\ce{Cyclohexyl-Br + Mg ->[ether] Cyclohexyl-MgBr} $$
$$ \\ce{CH2=CHBr + Mg ->[THF] CH2=CHMgBr} $$
<em>Notes:</em> Preparation requires anhydrous conditions.`,
        "page_ref": 108
    },

    // --- Alcohols, Phenols, and Ethers ---
    {
        "id": "alc_33",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "(i) $\\ce{Hg(OAc)2 + H2O}$ (ii) $\\ce{NaBH4}$",
        "details_tex": `
<strong>Oxymercuration–Demercuration</strong><br>
$$ \\ce{R-CH=CH2 ->[1. Hg(OAc)2/THF-H2O][2. NaBH4/OH-] R-CH(OH)-CH3} $$
<em>Notes:</em> Markovnikov hydration of alkenes. No rearrangement. Anti addition overall.`,
        "page_ref": 33
    },
    {
        "id": "alc_34",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "(i) $\\ce{B2H6/THF}$ (ii) $\\ce{H2O2/OH-}$",
        "details_tex": `
<strong>Hydroboration–Oxidation</strong><br>
$$ \\ce{R-CH=CH2 ->[1. B2H6/THF][2. H2O2/OH-] R-CH2-CH2-OH} $$
$$ \\ce{CH3CH=CH2 ->[1. B2H6/THF][2. H2O2/OH-] CH3CH2CH2OH} $$
<em>Notes:</em> Anti-Markovnikov hydration. Syn addition. No rearrangement.`,
        "page_ref": 34
    },
    {
        "id": "alc_67",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{H3PO4} / \\text{Heat}$",
        "details_tex": `
<strong>Dehydration of Alcohols</strong><br>
$$ \\ce{CH3CH(OH)CH3 ->[85\\% H3PO4][440 K] CH3-CH=CH2 + H2O} $$
$$ \\ce{(CH3)3C-OH ->[20\\% H3PO4][358 K] (CH3)2C=CH2 + H2O} $$
<em>Notes:</em> Elimination to form alkenes. Follows Saytzeff's rule. Higher temp favors elimination.`,
        "page_ref": 67
    },
    {
        "id": "alc_68",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{ZnCl2 + HCl}$",
        "details_tex": `
<strong>Lucas Reagent Test</strong><br>
<em>3° Alcohol:</em> $$ \\ce{R3C-OH + HCl ->[ZnCl2] R3C-Cl + H2O} \\text{ (Immediate turbidity)} $$
<em>2° Alcohol:</em> $$ \\ce{R2CH-OH + HCl ->[ZnCl2] R2CH-Cl + H2O} \\text{ (Turbidity in 5-20 min)} $$
<em>1° Alcohol:</em> $$ \\ce{RCH2-OH + HCl ->[ZnCl2]} \\text{ No Reaction at Room Temp.} $$
<em>Notes:</em> Distinguishes 1°, 2°, 3° alcohols based on SN1 rate. Reagent: Anhyd. $\\ce{ZnCl2}$ in conc. $\\ce{HCl}$.`,
        "page_ref": 68
    },
    {
        "id": "alc_76",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{Na2Cr2O7 + H2SO4}$",
        "details_tex": `
<strong>Oxidation of Primary Alcohol</strong><br>
$$ \\ce{RCH2OH ->[Na2Cr2O7][H2SO4] RCOOH} $$
$$ \\text{Cyclohexylmethanol} \\ce{ ->[Na2Cr2O7][H2SO4] } \\text{Cyclohexanecarboxylic acid} $$
<em>Notes:</em> Strong oxidation to carboxylic acid.`,
        "page_ref": 76
    },
    {
        "id": "alc_77_78",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "PCC",
        "details_tex": `
<strong>PCC Oxidation</strong><br>
<em>(Pyridinium Chlorochromate: $\\ce{[C5H5NH]+[CrO3Cl]-}$)</em><br>
$$ \\ce{R-CH2OH (1^\\circ alcohol) ->[PCC / CH2Cl2] R-CHO (Aldehyde)} $$
$$ \\ce{R2CHOH (2^\\circ alcohol) ->[PCC / CH2Cl2] R2C=O (Ketone)} $$
<em>Notes:</em> Mild oxidation. Stops at aldehyde for 1° alcohols.`,
        "page_ref": "77, 78"
    },
    {
        "id": "alc_79",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "PDC",
        "details_tex": `
<strong>PDC Oxidation</strong><br>
<em>(Pyridinium Dichromate)</em><br>
$$ \\text{1-(Hydroxymethyl)cyclohexan-3-ol} \\ce{->[PDC / CH2Cl2]} \\text{3-Oxocyclohexanecarbaldehyde} $$
<em>Notes:</em> Similar to PCC. Oxidizes 1° alcohols to aldehydes, 2° alcohols to ketones.`,
        "page_ref": 79
    },
    {
        "id": "alc_80",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{CrO3}$ / $\\ce{Na2Cr2O7} + \\ce{H+/Acetone}$",
        "details_tex": `
<strong>Jones Reagent (Secondary Alcohol)</strong><br>
$$ \\ce{R2CHOH (2^\\circ alcohol) ->[CrO3/H2SO4][Acetone] R2C=O (Ketone)} $$
$$ \\ce{CH3CH(OH)CH2CH3 ->[Jones] CH3C(=O)CH2CH3} $$
$$ \\ce{Cyclohexanol ->[Jones] Cyclohexanone} $$
<em>Notes:</em> Oxidizes 2° alcohols to ketones.`,
        "page_ref": 80
    },
    {
        "id": "alc_81",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{CrO3 - H2SO4}$",
        "details_tex": `
<strong>Jones Reagent (Primary Alcohol)</strong><br>
$$ \\ce{RCH2OH (1^\\circ alcohol) ->[CrO3-H2SO4][Acetone] RCOOH (Carboxylic acid)} $$
$$ \\ce{CH3(CH2)8CH2OH (1-Decanol) ->[Jones] CH3(CH2)8COOH (Decanoic acid)} $$
<em>Notes:</em> Oxidizes 1° alcohols to carboxylic acids.`,
        "page_ref": 81
    },
    {
        "id": "alc_82",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{Cu} + \\text{Heat (573K)}$",
        "details_tex": `
<strong>Catalytic Dehydrogenation/Dehydration</strong><br>
<em>1° Alcohol:</em> $$ \\ce{RCH2OH ->[Cu][573K] RCHO + H2} $$
<em>2° Alcohol:</em> $$ \\ce{R2CHOH ->[Cu][573K] R2C=O + H2} $$
<em>3° Alcohol:</em> $$ \\ce{R3COH ->[Cu][573K] Alkene + H2O} \\text{ (Dehydration)} $$
<em>Notes:</em> Oxidation for 1°/2° alcohols; Dehydration for 3° alcohols.`,
        "page_ref": 82
    },
    {
        "id": "alc_83",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{MnO2}$",
        "details_tex": `
<strong>Selective Oxidation (Allylic/Benzylic)</strong><br>
$$ \\text{Allylic/Benzylic } \\ce{-CH2OH ->[MnO2] Allylic/Benzylic -CHO} $$
$$ \\text{Allylic/Benzylic } \\ce{ >CHOH ->[MnO2] Allylic/Benzylic >C=O} $$
$$ \\ce{H2C=CH-CH2OH ->[MnO2] H2C=CH-CHO} $$
$$ \\ce{C6H5-CH(OH)-CH3 ->[MnO2] C6H5-C(=O)-CH3} $$
<em>Notes:</em> Selectively oxidizes allylic/benzylic alcohols. Saturated alcohols usually unreactive.`,
        "page_ref": 83
    },
    {
        "id": "alc_84",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{KMnO4 / K2Cr2O7}$",
        "details_tex": `
<strong>Oxidation of Primary Alcohol</strong><br>
$$ \\ce{RCH2OH ->[1. alkaline KMnO4][2. H3O+] RCOOH} $$
<em>Notes:</em> Strong oxidation to carboxylic acids.`,
        "page_ref": 84
    },
    {
        "id": "alc_85",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{O2 + H+}$",
        "details_tex": `
<strong>Cumene Process</strong><br>
$$ \\ce{Cumene ->[O2] Cumene hydroperoxide ->[H+][H2O] Phenol + Acetone} $$
$$ \\ce{C6H5-CH(CH3)2 ->[O2] C6H5-C(CH3)2(OOH) ->[H+] C6H5OH + CH3COCH3} $$
<em>Notes:</em> Industrial synthesis of phenol and acetone.`,
        "page_ref": 85
    },
    {
        "id": "alc_86",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "Dilute $\\ce{HNO3}$",
        "details_tex": `
<strong>Nitration of Phenol (Mild)</strong><br>
$$ \\ce{Phenol + Dilute HNO3 -> o-Nitrophenol + p-Nitrophenol} $$
<em>Notes:</em> EAS. -OH is activating, o/p directing. Products separable by steam distillation.`,
        "page_ref": 86
    },
    {
        "id": "alc_87",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "Conc. $\\ce{HNO3}$ (+ Conc. $\\ce{H2SO4}$)",
        "details_tex": `
<strong>Nitration of Phenol (Vigorous)</strong><br>
$$ \\ce{Phenol ->[1. Conc. H2SO4][2. Conc. HNO3] 2,4,6-Trinitrophenol (Picric acid)} $$
<em>Notes:</em> Vigorous EAS giving tri-substituted product. Direct nitration can cause oxidation.`,
        "page_ref": 87
    },
    {
        "id": "alc_88",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{Br2 + CS2}$ (or $\\ce{CCl4}$)",
        "details_tex": `
<strong>Bromination of Phenol (Nonpolar Solvent)</strong><br>
$$ \\ce{Phenol + Br2 ->[CS2][273 K] o-Bromophenol (Minor) + p-Bromophenol (Major)} $$
<em>Notes:</em> EAS. Less polar solvent reduces activation, favors mono-substitution (para).`,
        "page_ref": 88
    },
    {
        "id": "alc_89",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{NaOH + CO2 + H+}$",
        "details_tex": `
<strong>Kolbe's Reaction (Kolbe-Schmitt)</strong><br>
$$ \\ce{Phenol ->[1. NaOH] Sodium Phenoxide ->[2. CO2, T, P][3. H+] Salicylic acid} $$
<em>Notes:</em> Electrophilic substitution on activated phenoxide by weak electrophile $\\ce{CO2}$.`,
        "page_ref": 89
    },
    {
        "id": "alc_90",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{CHCl3}$ + aq $\\ce{NaOH}$",
        "details_tex": `
<strong>Reimer-Tiemann Reaction</strong><br>
$$ \\ce{Phenol + CHCl3 + NaOH ->[\\Delta] Intermediate ->[H+] Salicylaldehyde} $$
<em>Notes:</em> Formylation of phenol. Electrophile: dichlorocarbene ($\\ce{:CCl2}$). Mainly ortho.`,
        "page_ref": 90
    },
    {
        "id": "alc_92",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{Na2Cr2O7 + H2SO4}$",
        "details_tex": `
<strong>Oxidation of Phenol</strong><br>
$$ \\ce{Phenol ->[Na2Cr2O7][H2SO4] Benzoquinone } \\text{ (p-Benzoquinone)} $$
<em>Notes:</em> Oxidation to conjugated diketone.`,
        "page_ref": 92
    },
    {
        "id": "alc_93",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{H2 + ZnO + Cr2O3}$",
        "details_tex": `
<strong>Methanol Synthesis</strong><br>
$$ \\ce{CO + 2H2 ->[ZnO-Cr2O3][200-300 atm, 573-673 K] CH3OH} $$
<em>Notes:</em> Industrial synthesis from syngas.`,
        "page_ref": 93
    },
    {
        "id": "alc_94",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "Conc. $\\ce{H2SO4}$, 443K",
        "details_tex": `
<strong>Dehydration of Alcohol to Alkene</strong><br>
$$ \\ce{ RCH-C(OH)R ->[Conc. H2SO4][443K] Alkene + H2O} $$
<em>Notes:</em> Higher temperature favors elimination. E1 or E2.`,
        "page_ref": 94
    },
    {
        "id": "alc_95",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "Conc. $\\ce{H2SO4}$, 413K",
        "details_tex": `
<strong>Dehydration of Alcohol to Ether</strong><br>
$$ \\ce{2 R-OH ->[Conc. H2SO4][413K (140^\\circ C)] R-O-R + H2O} $$
$$ \\ce{2 C2H5OH ->[Conc. H2SO4][140^\\circ C] C2H5OC2H5 + H2O} $$
<em>Notes:</em> Lower temperature favors substitution (ether). Best for primary alcohols (SN2).`,
        "page_ref": 95
    },
    {
        "id": "alc_96",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{RO-Na+ + R'-X}$",
        "details_tex": `
<strong>Williamson Ether Synthesis</strong><br>
$$ \\ce{R-ONa + R'-X ->[Heat] R-O-R' + NaX} $$
$$ \\ce{C2H5ONa + C2H5I ->[55^\\circ C] C2H5OC2H5 + NaI} $$
<em>Notes:</em> SN2 reaction. Best with primary alkyl halides ($\ce{R'-X}$).`,
        "page_ref": 96
    },
    {
        "id": "alc_97",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "$\\ce{RO-Na+}$ (Base/Nucleophile)",
        "details_tex": `
<strong>Alkoxide as Base/Nucleophile</strong><br>
<em>Elimination (E2):</em> $$ \\ce{(CH3)3C-Br + Na+ OCH3- -> (CH3)2C=CH2 + NaBr + CH3OH} $$
<em>Substitution (SN2):</em> $$ \\ce{(CH3)3C-O-Na+ + CH3CH2Cl -> (CH3)3C-O-CH2CH3 + NaCl} $$
<em>Notes:</em> Strong base favors E2 with 2°/3° halides. Strong nucleophile favors SN2 with 1° halides.`,
        "page_ref": 97
    },
    {
        "id": "alc_98",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "Phenoxide + $\\ce{R-X}$",
        "details_tex": `
<strong>Williamson Synthesis (Aryl Ethers)</strong><br>
$$ \\ce{Phenol ->[NaOH] C6H5O-Na+ ->[R-X (1^\circ)] C6H5-O-R + NaX} $$
<em>Notes:</em> Phenoxide reacts with primary alkyl halide via SN2.`,
        "page_ref": 98
    },
    {
        "id": "alc_99",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "Conc. $\\ce{HI / HBr}$",
        "details_tex": `
<strong>Cleavage of Ethers</strong><br>
$$ \\ce{R-O-R' + HX ->[\\Delta] RX + R'-OH} \\quad (\\ce{-> RX + R'X + H2O } \\text{ if excess HX}) $$
<em>Notes:</em> Cleaved by strong acids $\\ce{HI}$ or $\\ce{HBr}$. SN1 or SN2. Reactivity: $\\ce{HI > HBr >> HCl}$. Phenyl ether gives Phenol + RX.`,
        "page_ref": 99
    },
    {
        "id": "alc_150",
        "chapter": "Alcohols, Phenols and Ethers",
        "reagent_name": "CAN",
        "details_tex": `
<strong>Test for Alcohols (Ceric Ammonium Nitrate)</strong><br>
$$ \\ce{(NH4)2[Ce(NO3)6] (Yellow) + ROH -> [Ce(NO3)4(ROH)_n] (Red complex)} $$
<em>Notes:</em> Qualitative test for alcohols.`,
        "page_ref": 150
    },

    // --- Aldehydes, Ketones, and Carboxylic Acids ---
    {
        "id": "ald_ket_2",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{H2 + Ni/Pt/Pd}$",
        "details_tex": `
<strong>Reduction of Imine/Nitrile</strong><br>
$$ \\ce{RCH=NR' (Imine) + H2 ->[Pt/Pd/Ni] RCH2NHR' (2^\\circ amine)} $$
$$ \\ce{RC#N (Nitrile) + 2H2 ->[Pt/Pd/Ni] RCH2NH2 (1^\\circ amine)} $$
<em>Notes:</em> Reduces $\\ce{C=N}$ and $\\ce{C#N}$. (Connects to Amines).`,
        "page_ref": 2
    },
    {
        "id": "ald_ket_65",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{NaBH4}$",
        "details_tex": `
<strong>Reduction with $\\ce{NaBH4}$</strong><br>
$$ \\ce{RCHO (Aldehyde) ->[1. NaBH4, MeOH][2. H3O+] RCH2OH (1^\\circ alcohol)} $$
$$ \\ce{R-CO-R' (Ketone) ->[1. NaBH4, MeOH][2. H3O+] R-CH(OH)-R' (2^\\circ alcohol)} $$
$$ \\ce{RCOCl (Acid chloride) ->[1. NaBH4, MeOH][2. H3O+] RCH2OH (1^\\circ alcohol)} $$
<em>Notes:</em> Milder reducing agent. Reduces Ald/Ket/Acid Chloride. Not Ester/Acid/Amide/Nitrile typically.`,
        "page_ref": 65
    },
    {
        "id": "ald_ket_69",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Raney $\\ce{Ni + H2}$",
        "details_tex": `
<strong>Reduction with Raney Ni</strong><br>
$$ \\ce{RCHO (Aldehyde) + H2 ->[Raney Ni] RCH2OH} $$
$$ \\ce{R-CO-R' (Ketone) + H2 ->[Raney Ni] R-CH(OH)-R'} $$`,
        "page_ref": 69
    },
    {
        "id": "ald_ket_71_73_102_103",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "DIBAL-H",
        "details_tex": `
<strong>Reduction with DIBAL-H</strong><br>
<em>(Diisobutyl Aluminium Hydride: $\\ce{[(CH3)2CHCH2]2AlH}$)</em><br>
<em>Nitrile:</em> $$ \\ce{R-C#N ->[1. DIBAL-H, -78^\\circ C][2. H2O] R-CHO (Aldehyde)} $$
<em>Ester:</em> $$ \\ce{R-COOR' ->[1. DIBAL-H, -78^\\circ C][2. H2O] R-CHO (Aldehyde)} $$
<em>Notes:</em> Reduces nitriles and esters to aldehydes at low temp.`,
        "page_ref": "71-73, 102-103"
    },
    {
        "id": "ald_ket_74",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Red $\\ce{P + HI} (\\Delta)$",
        "details_tex": `
<strong>Reduction to Alkane</strong><br>
$$ \\ce{R-CO-R' (Ketone) ->[Red P + HI][\Delta] R-CH2-R' (Alkane)} $$
$$ \\ce{R-CHO (Aldehyde) ->[Red P + HI][\Delta] R-CH3 (Alkane)} $$
$$ \\ce{R-CH2OH (Alcohol) ->[Red P + HI][\Delta] R-CH3 (Alkane)} $$
<em>Notes:</em> Very strong reducing agent. Reduces $\\ce{C=O}$ and $\\ce{C-OH}$ to $\\ce{C-H}$.`,
        "page_ref": 74
    },
    {
        "id": "ald_ket_75",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{OsO4 + H2O2}$",
        "details_tex": `
<strong>Syn Dihydroxylation (OsO<sub>4</sub>)</strong><br>
$$ \\ce{ Alkene (>C=C<) ->[1. OsO4][2. H2O2 or NaHSO3] syn-Diol (-C(OH)-C(OH)-)} $$
<em>Notes:</em> Syn addition of two OH groups. Toxic/expensive. Compare Baeyer's Reagent.`,
        "page_ref": 75
    },
    {
        "id": "ald_ket_100",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{H2, Pd-BaSO4}$",
        "details_tex": `
<strong>Rosenmund Reduction</strong><br>
$$ \\ce{R-COCl (Acid chloride) + H2 ->[Pd-BaSO4][poison] R-CHO (Aldehyde) + HCl} $$
$$ \\ce{C6H5COCl ->[Rosenmund] C6H5CHO} $$
<em>Notes:</em> Reduction of acid chlorides to aldehydes. Poisoned catalyst prevents over-reduction.`,
        "page_ref": 100
    },
    {
        "id": "ald_ket_101",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{SnCl2 + HCl}$ then $\\ce{H3O+}$",
        "details_tex": `
<strong>Stephen Reaction</strong><br>
$$ \\ce{RCN (Nitrile) ->[1. SnCl2, HCl] [RCH=NH2+]Cl- ->[2. H3O+, boil] RCHO + NH4Cl} $$
<em>Notes:</em> Reduction of nitriles to aldehydes via imine intermediate.`,
        "page_ref": 101
    },
    {
        "id": "ald_ket_109",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Grignard Reagent + Carbonyls",
        "details_tex": `
<strong>Addition to Carbonyls</strong><br>
<em>Formaldehyde:</em> $$ \\ce{R-MgX + HCHO ->[1. ether][2. H3O+] R-CH2OH (1^\\circ alcohol)} $$
<em>Aldehyde:</em> $$ \\ce{R-MgX + R'-CHO ->[1. ether][2. H3O+] R-CH(OH)-R' (2^\\circ alcohol)} $$
<em>Ketone:</em> $$ \\ce{R-MgX + R'-CO-R'' ->[1. ether][2. H3O+] R-C(OH)(R')(R'') (3^\\circ alcohol)} $$
<em>Notes:</em> Nucleophilic addition forms alcohols. Increases C skeleton.`,
        "page_ref": 109
    },
    {
        "id": "ald_ket_110",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Grignard Reagent + Acid Chloride/Ester",
        "details_tex": `
<strong>Addition to Acid Derivatives (Excess Grignard)</strong><br>
$$ \\ce{2 R-MgX + R'-COCl ->[1. ether][2. H3O+] R2C(OH)R' (3^\\circ alcohol)} $$
$$ \\ce{2 R-MgX + R'-COOR'' ->[1. ether][2. H3O+] R2C(OH)R' (3^\\circ alcohol) + R''OH} $$
<em>Notes:</em> Two equivalents react via ketone intermediate to form tertiary alcohols.`,
        "page_ref": 110
    },
    {
        "id": "ald_ket_111",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Grignard Reagent + Nitrile",
        "details_tex": `
<strong>Addition to Nitriles</strong><br>
$$ \\ce{R-C#N + R'-MgX ->[1. ether][2. H3O+] R-C(=O)-R' (Ketone)} $$
$$ \\ce{CH3CH2CN + C6H5MgBr ->[1. ether][2. H3O+] CH3CH2COC6H5} $$
<em>Notes:</em> Forms ketones after hydrolysis of imine intermediate.`,
        "page_ref": 111
    },
    {
        "id": "ald_ket_112",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Grignard Reagent + Ethylene Oxide",
        "details_tex": `
<strong>Addition to Epoxides</strong><br>
$$ \\ce{R-MgX + Ethylene oxide ->[1. ether][2. H3O+] R-CH2CH2-OH} $$
<em>Notes:</em> Nucleophilic ring opening. Lengthens chain by two carbons. Forms 1° alcohol.`,
        "page_ref": 112
    },
    {
        "id": "ald_ket_113",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Grignard Reagent + Acidic H Source",
        "details_tex": `
<strong>Reaction with Acidic Hydrogen</strong><br>
$$ \\ce{R-MgX + H-A -> R-H (Alkane) + A-MgX} \\quad (A=OH, OR', NHR', etc.) $$
$$ \\ce{R-MgX + H2O -> R-H + HOMgX} $$
<em>Notes:</em> Grignard reagents are strong bases. Destroyed by protic sources.`,
        "page_ref": 113
    },
    {
        "id": "ald_ket_114",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Grignard Reagent + $\\ce{CO2}$",
        "details_tex": `
<strong>Carboxylation</strong><br>
$$ \\ce{R-MgX + CO2 ->[1. ether][2. H3O+] R-COOH} $$
$$ \\ce{CH3CH2CH2MgBr + CO2 ->[1. ether][2. H3O+] CH3CH2CH2COOH} $$
<em>Notes:</em> Forms carboxylic acids with one more carbon.`,
        "page_ref": 114
    },
    {
        "id": "ald_ket_115",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{H2O}$ (Hydration of Carbonyls)",
        "details_tex": `
<strong>Hydration (Gem-diol Formation)</strong><br>
$$ \\ce{ >C=O + H2O <=> >C(OH)2 } \\text{ (Hydrate)} $$
<em>Equilibrium Position:</em> Formaldehyde (favors hydrate) > Acetaldehyde > Acetone (favors ketone)<br>
<em>Notes:</em> Reversible addition. Favored by less sterics and EWGs.`,
        "page_ref": 115
    },
    {
        "id": "ald_ket_116",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{R-OH / H+}$",
        "details_tex": `
<strong>Acetal/Ketal Formation</strong><br>
$$ \\ce{RCHO + R'OH <=> Hemiacetal + R'OH <=>[H+][-H2O] RCH(OR')2 (Acetal)} $$
$$ \\ce{R2C=O + R'OH <=> Hemiketal + R'OH <=>[H+][-H2O] R2C(OR')2 (Ketal)} $$
<em>Notes:</em> Acid-catalyzed, reversible. Protecting groups for carbonyls. Stable to base.`,
        "page_ref": 116
    },
    {
        "id": "ald_ket_117",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{NaHSO3}$",
        "details_tex": `
<strong>Bisulfite Addition</strong><br>
$$ \\ce{ >C=O (Ald/Me-Ket) + NaHSO3 <=> >C(OH)SO3-Na+ } \\text{ (Crystalline adduct)} $$
<em>Notes:</em> Nucleophilic addition. Useful for purification/separation. Reversible.`,
        "page_ref": 117
    },
    {
        "id": "ald_ket_118",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{HCN}$",
        "details_tex": `
<strong>Cyanohydrin Formation</strong><br>
$$ \\ce{ >C=O + HCN <=> >C(OH)CN (Cyanohydrin)} $$
<em>Notes:</em> Nucleophilic addition ($\\ce{CN-}$). Increases C chain by one. Base catalyzed.`,
        "page_ref": 118
    },
    {
        "id": "ald_ket_119",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{NH2-NH2, OH-, Heat}$",
        "details_tex": `
<strong>Wolff-Kishner Reduction</strong><br>
$$ \\ce{ >C=O ->[1. H2NNH2] >C=NNH2 ->[2. KOH/glycol][\\Delta] >CH2 + N2} $$
<em>Notes:</em> Reduces $\\ce{C=O}$ to $\\ce{CH2}$ under basic conditions.`,
        "page_ref": 119
    },
    {
        "id": "ald_ket_120",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{Zn-Hg}$, conc. $\\ce{HCl}$",
        "details_tex": `
<strong>Clemmensen Reduction</strong><br>
$$ \\ce{ >C=O ->[Zn(Hg)][Conc. HCl, \\Delta] >CH2 + H2O} $$
<em>Notes:</em> Reduces $\\ce{C=O}$ to $\\ce{CH2}$ under acidic conditions.`,
        "page_ref": 120
    },
    {
        "id": "ald_ket_121",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{H2N-Z}$ (Amine Derivatives)",
        "details_tex": `
<strong>Condensation with Amine Derivatives</strong><br>
$$ \\ce{ >C=O + H2N-Z -> >C=N-Z + H2O} $$
<em>Examples (Product):</em> Imine (Z=H), Schiff Base (Z=R), Oxime (Z=OH), Hydrazone (Z=NH2), Phenylhydrazone (Z=NHPh), 2,4-DNP derivative (Z=NH-C6H3(NO2)2), Semicarbazone (Z=NHCONH2)<br>
<em>Notes:</em> Forms $\\ce{C=N}$ bond. DNPH gives colored ppt (test).`,
        "page_ref": 121
    },
    {
        "id": "ald_ket_122",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{HNO3}$ or $\\ce{KMnO4}$, $\\ce{K2Cr2O7}$",
        "details_tex": `
<strong>Oxidation of Ketones/Aldehydes</strong><br>
<em>Aldehyde:</em> $$ \\ce{R-CHO ->[[O]] R-COOH} \\text{ (Easy)} $$
<em>Ketone:</em> $$ \\ce{R-CH2-CO-CH2-R' ->[[O], vigorous][\Delta] Mixture of RCOOH, R'CH2COOH, etc.} $$
<em>Notes:</em> Aldehydes easily oxidized. Ketones require vigorous conditions, C-C cleavage (Popoff's rule).`,
        "page_ref": 122
    },
    {
        "id": "ald_ket_123",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Tollen's Reagent",
        "details_tex": `
<strong>Tollen's Test (Silver Mirror)</strong><br>
$$ \\ce{R-CHO + 2[Ag(NH3)2]+ + 3OH- -> RCOO- + 2Ag(s) v + 4NH3 + 2H2O} $$
<em>Notes:</em> Oxidizes aldehydes (aliphatic & aromatic). Ketones unreactive (except $\\alpha$-hydroxy ketones). Test for aldehydes.`,
        "page_ref": 123
    },
    {
        "id": "ald_ket_124",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Fehling's Reagent",
        "details_tex": `
<strong>Fehling's Test</strong><br>
$$ \\ce{R-CHO (Aliphatic) + 2Cu^2+(tartrate) + 5OH- -> RCOO- + Cu2O(s) v (Red-brown) + 3H2O} $$
<em>Notes:</em> Oxidizes *aliphatic* aldehydes. Aromatic aldehydes & ketones unreactive. Test for aliphatic aldehydes.`,
        "page_ref": 124
    },
    {
        "id": "ald_ket_125",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{RCOOOH}$ (Peroxy acid)",
        "details_tex": `
<strong>Baeyer–Villiger Oxidation</strong><br>
<em>Aldehyde:</em> $$ \\ce{R'-CHO + RCOOOH -> R'-COOH} $$
<em>Ketone:</em> $$ \\ce{R'-CO-R'' + RCOOOH -> R'-COO-R'' (Ester) + RCOOH} \\text{ (or } \\ce{R'-OCO-R'')} $$
<em>Notes:</em> Oxidizes Ald to Acid, Ket to Ester (O insertion). Follows migratory aptitude: $\\ce{H > 3^\\circ > Ph \\approx 2^\\circ > 1^\\circ > Me}$.`,
        "page_ref": 125
    },
    {
        "id": "ald_ket_126",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{NaOX}$ (X=Cl, Br, I)",
        "details_tex": `
<strong>Haloform Reaction</strong><br>
$$ \\ce{R-CO-CH3 + 3NaOX -> R-COONa + CHX3 v + 2NaOH} $$
<em>Iodoform Test (X=I):</em> Gives yellow ppt ($\\ce{CHI3}$).<br>
<em>Notes:</em> Requires methyl ketone or $\\ce{R-CH(OH)-CH3}$. Test for these groups.`,
        "page_ref": 126
    },
    {
        "id": "ald_ket_127",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Dil $\\ce{NaOH / Ba(OH)2} (\\Delta)$",
        "details_tex": `
<strong>Aldol Condensation</strong><br>
<em>Aldehyde:</em> $$ \\ce{2 CH3CHO <=> Aldol ->[\\Delta][-H2O] CH3CH=CHCHO} $$
<em>Ketone:</em> $$ \\ce{2 CH3COCH3 <=> Ketol ->[\\Delta][-H2O] (CH3)2C=CHCOCH3} $$
<em>Notes:</em> Requires $\\alpha$-hydrogen. Forms $\\beta$-hydroxy carbonyl, then $\\alpha,\\beta$-unsaturated carbonyl upon heating.`,
        "page_ref": 127
    },
    {
        "id": "ald_ket_128_129",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Dil $\\ce{NaOH / Ba(OH)2} (\\Delta)$",
        "details_tex": `
<strong>Crossed Aldol Condensation</strong><br>
$$ \\ce{A + B ->[dil. base][\\Delta] Mixture of 4 products } \\text{ (unless one has no } \\alpha \\text{-H)} $$
$$ \\ce{C6H5CHO (no } \\alpha \\text{-H)} + \\ce{CH3COC6H5 ->[OH-] C6H5CH=CHCOC6H5} $$
<em>Notes:</em> Reaction between two different carbonyls (one needs $\\alpha$-H).`,
        "page_ref": "128, 129"
    },
    {
        "id": "ald_ket_130",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "Conc. $\\ce{KOH / NaOH} (\\Delta)$",
        "details_tex": `
<strong>Cannizzaro Reaction</strong><br>
<em>(Requires no $\\alpha$-hydrogen)</em><br>
$$ \\ce{2 HCHO + KOH ->[\\Delta] CH3OH + HCOOK} $$
$$ \\ce{2 C6H5CHO + NaOH ->[\\Delta] C6H5CH2OH + C6H5COONa} $$
<em>Notes:</em> Disproportionation of aldehydes without $\\alpha$-H in strong base.`,
        "page_ref": 130
    },
    {
        "id": "ald_ket_131",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{Na / NaOH / NaHCO3}$",
        "details_tex": `
<strong>Reactions of Carboxylic Acids (Acidity)</strong><br>
$$ \\ce{2RCOOH + 2Na -> 2RCOONa + H2 ^} $$
$$ \\ce{RCOOH + NaOH -> RCOONa + H2O} $$
$$ \\ce{RCOOH + NaHCO3 -> RCOONa + H2O + CO2 ^} $$
<em>Notes:</em> Acids react with active metals, strong bases, weak bases ($\\ce{NaHCO3}$ test distinguishes from phenols).`,
        "page_ref": 131
    },
    {
        "id": "ald_ket_132",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{H2SO4}$ or $\\ce{P2O5} / \\Delta$",
        "details_tex": `
<strong>Anhydride Formation</strong><br>
$$ \\ce{2 RCOOH ->[P2O5 / \\Delta] (RCO)2O + H2O} $$
$$ \\ce{2 CH3COOH ->[P2O5 / \\Delta] (CH3CO)2O + H2O} $$
<em>Notes:</em> Dehydration of carboxylic acids.`,
        "page_ref": 132
    },
    {
        "id": "ald_ket_133",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{PCl5, PCl3, SOCl2}$",
        "details_tex": `
<strong>Carboxylic Acid to Acid Chloride</strong><br>
$$ \\ce{RCOOH + PCl5 -> RCOCl + POCl3 + HCl} $$
$$ \\ce{3RCOOH + PCl3 -> 3RCOCl + H3PO3} $$
$$ \\ce{RCOOH + SOCl2 -> RCOCl + SO2 ^ + HCl ^} $$
<em>Notes:</em> Conversion to acid chloride. $\\ce{SOCl2}$ often preferred.`,
        "page_ref": 133
    },
    {
        "id": "ald_ket_136",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{LiAlH4}$ or $\\ce{B2H6}$",
        "details_tex": `
<strong>Reduction of Carboxylic Acids</strong><br>
$$ \\ce{R-COOH ->[1. LiAlH4/ether or B2H6][2. H3O+] R-CH2OH (1^\\circ alcohol)} $$
<em>Notes:</em> Strong reduction to primary alcohols. $\\ce{NaBH4}$ does not work.`,
        "page_ref": 136
    },
    {
        "id": "ald_ket_137",
        "chapter": "Aldehydes, Ketones and Carboxylic Acids",
        "reagent_name": "$\\ce{X2}$ + Red $\\ce{P}$ then $\\ce{H2O}$",
        "details_tex": `
<strong>Hell-Volhard-Zelinsky (HVZ) Reaction</strong><br>
$$ \\ce{R-CH2-COOH (needs } \\alpha \\text{-H)} \\ce{ ->[1. X2/Red P][2. H2O] R-CH(X)-COOH } \\quad \\text{(X=Cl, Br)} $$
<em>Notes:</em> Halogenation at the $\\alpha$-carbon of a carboxylic acid.`,
        "page_ref": 137
    },

    // --- Organic Compounds Containing Nitrogen ---
    {
        "id": "amine_138",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{H2/Pd}$ or $\\ce{Fe/HCl}$ or $\\ce{Sn/HCl}$",
        "details_tex": `
<strong>Reduction of Nitroarenes</strong><br>
$$ \\ce{Ar-NO2 ->[H2/Pd or Sn/HCl or Fe/HCl] Ar-NH2} $$
$$ \\ce{C6H5NO2 ->[Reduction] C6H5NH2} $$
<em>Notes:</em> Common methods for preparing aromatic amines.`,
        "page_ref": 138
    },
    {
        "id": "amine_139",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{R-X}$ (Ammonolysis / Alkylation)",
        "details_tex": `
<strong>Alkylation of Amines / Ammonolysis</strong><br>
$$ \\ce{NH3 ->[R-X] RNH2 ->[R-X] R2NH ->[R-X] R3N ->[R-X] R4N+X-} $$
$$ \\ce{RNH3+X- + NaOH -> RNH2 + H2O + NaX} $$
<em>Notes:</em> Nucleophilic substitution. Leads to mixtures. Excess $\\ce{NH3}$ favors 1° amine.`,
        "page_ref": 139
    },
    {
        "id": "amine_140",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{H2/Ni}$ or $\\ce{Na(Hg)/C2H5OH}$",
        "details_tex": `
<strong>Reduction of Nitriles (Mendius Reduction)</strong><br>
$$ \\ce{R-C#N ->[H2/Ni or Na(Hg)/C2H5OH] R-CH2-NH2 (1^\\circ amine)} $$
<em>Notes:</em> Reduces nitriles to primary amines.`,
        "page_ref": 140
    },
    {
        "id": "amine_60",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{H2/Pd(C)}$ or $\\ce{H2/Pt}$ or $\\ce{H2/Ni}$",
        "details_tex": `
<strong>Catalytic Hydrogenation/Reduction (Summary)</strong><br>
$$ \\ce{RCOCl -> RCH2OH} $$
$$ \\ce{RNO2 -> RNH2} $$
$$ \\ce{RC#CR -> RCH2CH2R} $$
$$ \\ce{RCHO -> RCH2OH} $$
$$ \\ce{RCH=CHR -> RCH2CH2R} $$
$$ \\ce{RCOR -> RCHOHR} $$
$$ \\ce{RCN -> RCH2NH2} $$
<em>Notes:</em> General reduction. Selectivity possible (Lindlar, Rosenmund).`,
        "page_ref": 60
    },
    {
        "id": "amine_61_64",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{LiAlH4}$ (LAH)",
        "details_tex": `
<strong>Reduction with $\\ce{LiAlH4}$</strong><br>
<em>Reduces:</em><br>
AldehydeKetoneAcidEsterAcid ChlorideAnhydride $\\ce{->}$ Alcohol<br>
Nitrile (RCN) $\\ce{-> RCH2NH2}$<br>
Amide (RCONH2) $\\ce{-> RCH2NH2}$<br>
Nitro (RNO2) $\\ce{-> RNH2}$<br>
Isocyanide (RNC) $\\ce{-> RNHCH3}$<br>
<em>Notes:</em> Very strong reducing agent. Requires ether/THF solvent and $\\ce{H2O}$ workup.`,
        "page_ref": "61-64"
    },
    {
        "id": "amine_66",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{LiAlH4}$ vs $\\ce{NaBH4}$ Comparison",
        "details_tex": `
<strong>$\\ce{LiAlH4}$ vs $\\ce{NaBH4}$</strong><br>
<em>Aldehyde/Ketone/Acid Chloride:</em> Both reduce to alcohol.<br>
<em>Ester/Acid/Amide/Nitrile/Nitro:</em> Only $\\ce{LiAlH4}$ reduces.<br>
<em>Alkene/Alkyne:</em> Neither reduces.<br>
<em>Notes:</em> LAH is stronger, less selective. $\\ce{NaBH4}$ is milder, safer, used in protic solvents.`,
        "page_ref": 66
    },
    {
        "id": "amine_70",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{Na/C2H5OH}$",
        "details_tex": `
<strong>Bouveault-Blanc Reduction</strong><br>
<em>Reduces:</em><br>
$$ \\text{Aldehyde/Ketone/Ester/Acid Halide} \\ce{->} \\text{Alcohol} $$
$$ \\ce{Nitrile (RCN) -> RCH2NH2} \\text{ (1^\\circ amine)} $$
<em>Notes:</em> Dissolving metal reduction.`,
        "page_ref": 70
    },
    {
        "id": "amine_134_135",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{NH3} (\\Delta)$",
        "details_tex": `
<strong>Amide Formation</strong><br>
$$ \\ce{RCOOH + NH3 <=> RCOONH4+ ->[\\Delta][-H2O] RCONH2} $$
$$ \\ce{Phthalic acid + 2NH3 <=> Ammonium phthalate ->[\\Delta][-2H2O] Phthalamide ->[Strong heat][-NH3] Phthalimide} $$
<em>Notes:</em> Acid + Ammonia gives salt, then dehydration gives amide.`,
        "page_ref": "134, 135"
    },
    {
        "id": "amine_141",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{KOH + R-X + NaOH(aq)}$",
        "details_tex": `
<strong>Gabriel Phthalimide Synthesis</strong><br>
$$ \\text{Phthalimide} \\ce{->[1. KOH][2. R-X (1^\\circ)] N-Alkylphthalimide ->[3. NaOH(aq) or H2NNH2] R-NH2} $$
<em>Notes:</em> Synthesizes pure primary amines via SN2 on 1° alkyl halide.`,
        "page_ref": 141
    },
    {
        "id": "amine_142",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{Br2 + NaOH}$",
        "details_tex": `
<strong>Hoffmann Bromamide Degradation</strong><br>
$$ \\ce{R-CONH2 + Br2 + 4NaOH -> R-NH2 + Na2CO3 + 2NaBr + 2H2O} $$
<em>Notes:</em> Converts primary amides to primary amines with one less carbon. Degradation involving rearrangement.`,
        "page_ref": 142
    },
    {
        "id": "amine_143",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{CHCl3 + KOH}$",
        "details_tex": `
<strong>Carbylamine Reaction (Isocyanide Test)</strong><br>
$$ \\ce{R-NH2 (1^\\circ amine) + CHCl3 + 3KOH ->[Heat] R-NC (Isocyanide - foul smell) + 3KCl + 3H2O} $$
<em>Notes:</em> Test for primary amines only.`,
        "page_ref": 143
    },
    {
        "id": "amine_144",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{C6H5SO2Cl}$ (Hinsberg's Reagent)",
        "details_tex": `
<strong>Hinsberg's Test</strong><br>
<em>1° Amine:</em> $$ \\ce{RNH2 + C6H5SO2Cl -> C6H5SO2NHR ->[KOH] Soluble Salt} $$
<em>2° Amine:</em> $$ \\ce{R2NH + C6H5SO2Cl -> C6H5SO2NR2 ->[KOH] Insoluble} $$
<em>3° Amine:</em> $$ \\ce{R3N + C6H5SO2Cl -> No Reaction} $$
<em>Notes:</em> Distinguishes 1°, 2°, 3° amines.`,
        "page_ref": 144
    },
    {
        "id": "amine_145",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{Br2 / H2O}$",
        "details_tex": `
<strong>Bromination of Aniline</strong><br>
$$ \\ce{C6H5NH2 + 3Br2(aq) -> 2,4,6-Tribromoaniline (White ppt) v + 3HBr} $$
<em>Notes:</em> EAS. Highly activating $\\ce{-NH2}$ leads to tri-substitution. Test for aniline.`,
        "page_ref": 145
    },
    {
        "id": "amine_146",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{(CH3CO)2O}$ / Pyridine",
        "details_tex": `
<strong>Acetylation of Aniline</strong><br>
$$ \\ce{C6H5NH2 + (CH3CO)2O ->[Pyridine] C6H5NHCOCH3 (Acetanilide) + CH3COOH} $$
<em>Notes:</em> Protection of amino group. Reduces activating effect for controlled EAS.`,
        "page_ref": 146
    },
    {
        "id": "amine_147",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{HNO3, H2SO4}$, 288K",
        "details_tex": `
<strong>Nitration of Aniline</strong><br>
$$ \\ce{Aniline + HNO3/H2SO4 ->[288K] p-Nitroaniline (51\\%) + m-Nitroaniline (47\\%) + o-Nitroaniline (2\\%)} $$
<em>Notes:</em> EAS. Significant meta product due to formation of anilinium ion ($\\ce{C6H5NH3+}$) in strong acid.`,
        "page_ref": 147
    },
    {
        "id": "amine_148",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "Conc. $\\ce{H2SO4}$",
        "details_tex": `
<strong>Sulfonation of Aniline</strong><br>
$$ \\ce{Aniline + Conc. H2SO4 -> Anilinium hydrogensulphate ->[453-473 K] Sulphanilic acid } \\text{ (p-isomer, Zwitterion)} $$
<em>Notes:</em> EAS. Primarily para isomer. Exists as zwitterion.`,
        "page_ref": 148
    },
    {
        "id": "amine_149",
        "chapter": "Organic Compounds Containing Nitrogen",
        "reagent_name": "$\\ce{Cu2Cl2, NH4OH}$",
        "details_tex": `
<strong>Test for Terminal Alkynes</strong><br>
$$ \\ce{R-C#C-H + Cu2Cl2 ->[NH4OH] R-C#C-Cu (Copper acetylide - Red ppt.) v} $$
$$ \\ce{HC#CH ->[Cu2Cl2, NH4OH] Cu-C#C-Cu (Red ppt.) v} $$
<em>Notes:</em> Test for acidic H of terminal alkynes. (Connects to Hydrocarbons).`,
        "page_ref": 149
    }
];