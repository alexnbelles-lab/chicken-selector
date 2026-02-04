// Chicken database with characteristics
const chickens = [
    {
        name: "Leghorn",
        climate: ["hot", "mediterranean"],
        production: "productive",
        temperament: "independent",
        description: "Excellent egg layers. Heat tolerant and active foragers.",
        eggColor: "White",
        eggSize: "Medium",
        eggsPerYear: 290,
        size: "Small to Medium"
    },
    {
        name: "Rhode Island Red",
        climate: ["cold", "mediterranean"],
        production: "productive",
        temperament: "independent",
        description: "Hardy dual-purpose breed. Great egg producers and good meat quality.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 260,
        size: "Large"
    },
    {
        name: "Orpington",
        climate: ["cold", "mediterranean"],
        production: "medium",
        temperament: "docile",
        description: "Calm, friendly birds excellent for families. Good egg layers and broody.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 200,
        size: "Large"
    },
    {
        name: "Buff Laced Polish",
        climate: ["cold", "mediterranean"],
        production: "poor",
        temperament: "independent",
        description: "Ornamental breed with distinctive crest. Beautiful and unique.",
        eggColor: "Brown",
        eggSize: "Medium",
        eggsPerYear: 120,
        size: "Medium"
    },
    {
        name: "Sussex",
        climate: ["mediterranean", "cold"],
        production: "productive",
        temperament: "docile",
        description: "Friendly and curious breed. Excellent layers and great foragers.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 260,
        size: "Medium"
    },
    {
        name: "Wyandotte",
        climate: ["cold"],
        production: "productive",
        temperament: "aggressive",
        description: "Cold hardy with dense feathering. Good layers and excellent meat birds.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 220,
        size: "Large"
    },
    {
        name: "Cochin",
        climate: ["cold", "mediterranean"],
        production: "poor",
        temperament: "docile",
        description: "Broody and maternal. Excellent mothers for raising chicks.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 150,
        size: "Large"
    },
    {
        name: "Brahma",
        climate: ["cold"],
        production: "medium",
        temperament: "docile",
        description: "Giant gentle breed. Cold hardy and broody. Good dual-purpose birds.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 180,
        size: "Very Large"
    },
    {
        name: "Andalusian",
        climate: ["hot", "mediterranean"],
        production: "productive",
        temperament: "independent",
        description: "Heat tolerant and active. Excellent layers with beautiful blue eggs.",
        eggColor: "Blue",
        eggSize: "Medium",
        eggsPerYear: 170,
        size: "Medium"
    },
    {
        name: "Bantam",
        climate: ["hot", "mediterranean", "cold"],
        production: "poor",
        temperament: "docile",
        description: "Miniature breeds perfect for limited space. Friendly and broody, great for families.",
        eggColor: "Brown",
        eggSize: "Small",
        eggsPerYear: 100,
        size: "Tiny"
    },
    {
        name: "Silkie",
        climate: ["mediterranean", "cold"],
        production: "poor",
        temperament: "docile",
        description: "Fluffy, broody, and extremely friendly. Excellent mothers and pets.",
        eggColor: "Brown",
        eggSize: "Small",
        eggsPerYear: 100,
        size: "Small"
    },
    {
        name: "Australorp",
        climate: ["hot", "mediterranean", "cold"],
        production: "productive",
        temperament: "docile",
        description: "Friendly Australian breed. Heavy layers and adaptable to most climates.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 250,
        size: "Large"
    },
    {
        name: "Campine",
        climate: ["hot", "mediterranean"],
        production: "medium",
        temperament: "independent",
        description: "Heat tolerant and active foragers. Good layers with unique appearance.",
        eggColor: "White",
        eggSize: "Medium",
        eggsPerYear: 150,
        size: "Small to Medium"
    },
    {
        name: "Faverolles",
        climate: ["cold", "mediterranean"],
        production: "medium",
        temperament: "docile",
        description: "Friendly and broody. Good layers and excellent mothers.",
        eggColor: "Brown",
        eggSize: "Medium",
        eggsPerYear: 150,
        size: "Medium"
    },
    {
        name: "Jersey Giant",
        climate: ["cold"],
        production: "medium",
        temperament: "docile",
        description: "Largest chicken breed, very calm. Good meat birds with moderate egg production.",
        eggColor: "Brown",
        eggSize: "Large",
        eggsPerYear: 150,
        size: "Very Large"
    },
    {
        name: "Red Jungle Fowl",
        climate: ["hot", "mediterranean"],
        production: "medium",
        temperament: "aggressive",
        description: "Wild ancestry makes them active and alert. Good foragers, heat tolerant.",
        eggColor: "Brown",
        eggSize: "Medium",
        eggsPerYear: 100,
        size: "Medium"
    }
];

// Calculate match score based on selected criteria
function calculateMatchScore(chicken, selectedCriteria) {
    let score = 0;
    let maxScore = 0;

    // Climate matching
    if (selectedCriteria.climate && selectedCriteria.climate.length > 0) {
        maxScore += selectedCriteria.climate.length;
        const climateMatches = selectedCriteria.climate.filter(c => 
            chicken.climate.includes(c)
        ).length;
        score += climateMatches;
    }

    // Production matching
    if (selectedCriteria.production && selectedCriteria.production.length > 0) {
        maxScore += selectedCriteria.production.length;
        const productionMap = {
            "productive": "productive",
            "medium": "medium",
            "poor": "poor"
        };
        const matches = selectedCriteria.production.filter(p => 
            productionMap[p] === chicken.production
        ).length;
        score += matches;
    }

    // Temperament matching
    if (selectedCriteria.temperament && selectedCriteria.temperament.length > 0) {
        maxScore += selectedCriteria.temperament.length;
        const matches = selectedCriteria.temperament.filter(t => 
            chicken.temperament === t
        ).length;
        score += matches;
    }

    // Egg size matching
    if (selectedCriteria.eggSize && selectedCriteria.eggSize.length > 0) {
        maxScore += selectedCriteria.eggSize.length;
        const eggSizeMatches = selectedCriteria.eggSize.filter(es => 
            chicken.eggSize.toLowerCase() === es
        ).length;
        score += eggSizeMatches;
    }

    // Avoid aggressive temperament if not selected
    if (!selectedCriteria.temperament?.includes("aggressive") && chicken.temperament === "aggressive") {
        score = Math.max(0, score - 1);
    }

    // If no criteria selected, return 0
    if (maxScore === 0) return 0;

    // Return percentage match
    return Math.round((score / maxScore) * 100);
}

// Get selected options from checkboxes
function getSelectedCriteria() {
    const criteria = {
        climate: Array.from(document.querySelectorAll('input[name="climate"]:checked'))
            .map(cb => cb.value),
        production: Array.from(document.querySelectorAll('input[name="production"]:checked'))
            .map(cb => cb.value),
        temperament: Array.from(document.querySelectorAll('input[name="temperament"]:checked'))
            .map(cb => cb.value),
        eggSize: Array.from(document.querySelectorAll('input[name="eggSize"]:checked'))
            .map(cb => cb.value)
    };
    return criteria;
}

// Check if any criteria is selected
function hasCriteria(criteria) {
    return criteria.climate.length > 0 || 
           criteria.production.length > 0 || 
           criteria.temperament.length > 0 ||
           criteria.eggSize.length > 0;
}

// Suggest chickens based on selected criteria
function suggestChickens() {
    const selectedCriteria = getSelectedCriteria();
    const resultsDiv = document.getElementById('results');
    const noSelectionDiv = document.getElementById('noSelection');
    const chickenListDiv = document.getElementById('chickenList');

    if (!hasCriteria(selectedCriteria)) {
        resultsDiv.style.display = 'none';
        noSelectionDiv.style.display = 'block';
        return;
    }

    noSelectionDiv.style.display = 'none';

    // Calculate match scores for all chickens
    const matches = chickens
        .map(chicken => ({
            ...chicken,
            matchScore: calculateMatchScore(chicken, selectedCriteria)
        }))
        .filter(chicken => chicken.matchScore > 0) // Only show matches
        .sort((a, b) => b.matchScore - a.matchScore); // Sort by score descending

    // Display results
    chickenListDiv.innerHTML = matches.map(chicken => `
        <div class="chicken-card">
            <h3>${chicken.name}</h3>
            <p class="match-score">Match: ${chicken.matchScore}%</p>
            <p>${chicken.description}</p>
            <p><span class="stat-label">Eggs Per Year:</span> <span class="stat-value">${chicken.eggsPerYear}</span></p>
            <p><span class="stat-label">Egg Color/Size:</span> <span class="stat-value">${chicken.eggColor} (${chicken.eggSize})</span></p>
            <p><span class="stat-label">Bird Size:</span> <span class="stat-value">${chicken.size}</span></p>
            <p><span class="stat-label">Temperament:</span> <span class="stat-value">${chicken.temperament.charAt(0).toUpperCase() + chicken.temperament.slice(1)}</span></p>
        </div>
    `).join('');

    resultsDiv.style.display = 'block';
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('suggestBtn').addEventListener('click', suggestChickens);

    // Optional: Allow Enter key to suggest
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            suggestChickens();
        }
    });
});
