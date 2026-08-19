let currentTargetValue = "";

// 5 Unique reviews per city (4 Positive + 1 Advice/Tip)
const cityReviews = {
    cairo: [
        { name: "Khaled El-Sayed", rating: 5, text: "Unbelievable experience visiting the Pyramids! Everything was punctual.", advice: false },
        { name: "Emily Watson", rating: 5, text: "The museum tour was top-notch. Highly professional tour guides.", advice: false },
        { name: "Mostafa Farag", rating: 5, text: "Great bus transport and very comfy hotel stay in downtown Cairo.", advice: false },
        { name: "Anna Schmidt", rating: 5, text: "Khan El Khalili market trip was magical. Great shopping assistance!", advice: false },
        { name: "Omar Abdelaziz", rating: 4, text: "Tip for company: It would be better if the bus had free Wi-Fi connection during long trips.", advice: true }
    ],
    luxor: [
        { name: "David Miller", rating: 5, text: "Hot air balloon at sunrise in Luxor was breathtaking! 10/10 service.", advice: false },
        { name: "Nourhan Aly", rating: 5, text: "Karnak temple guide was super knowledgeable and patient with kids.", advice: false },
        { name: "Marco Rossi", rating: 5, text: "Very smooth transfer from hotel to the West Bank attractions.", advice: false },
        { name: "Hassan Ibrahim", rating: 5, text: "Best archaeological experience of my life. Perfectly arranged.", advice: false },
        { name: "Sarah Jenkins", rating: 4, text: "Suggestion: Please allow a bit more free time for shopping after Karnak temple.", advice: true }
    ],
    aswan: [
        { name: "Tarek Mansour", rating: 5, text: "Philae Temple at sunset is a dream. Nubian village visit was so fun!", advice: false },
        { name: "Sophie Laurent", rating: 5, text: "Felucca boat ride was super relaxing. Loved every minute of it.", advice: false },
        { name: "Youssef Hamdy", rating: 5, text: "Abu Simbel trip was well coordinated with early morning pickup.", advice: false },
        { name: "Jessica Taylor", rating: 5, text: "Incredible hospitality and very friendly local coordinators.", advice: false },
        { name: "Karim Zaki", rating: 4, text: "Advice: Provide cold water bottles on the morning bus to Abu Simbel.", advice: true }
    ],
    alex: [
        { name: "Mona Hassan", rating: 5, text: "Sea view and seafood dinner recommendation were superb!", advice: false },
        { name: "Lucas Garcia", rating: 5, text: "Qaitbay Citadel was impressive. Great photo stops along the Corniche.", advice: false },
        { name: "Amr Gad", rating: 5, text: "Very comfortable air-conditioned coach from Cairo to Alex.", advice: false },
        { name: "Charlotte Bell", rating: 5, text: "The library tour exceeded my expectations completely.", advice: false },
        { name: "Hany Shenouda", rating: 4, text: "Note for team: Try adding Montaza Palace interior view to the schedule.", advice: true }
    ],
    portsaid: [
        { name: "Wael Samir", rating: 5, text: "Ferry boat trip across the Suez canal was very pleasant.", advice: false },
        { name: "Hannah Brown", rating: 5, text: "Historic lighthouse and architecture tour was truly unique.", advice: false },
        { name: "Mahmoud Fouad", rating: 5, text: "Great shopping trip and very helpful organizers throughout the day.", advice: false },
        { name: "Elena Popov", rating: 5, text: "Peaceful city and excellent fresh seafood lunch included.", advice: false },
        { name: "Ibrahim Nabil", rating: 4, text: "Feedback: Extra 30 minutes in the free-zone area would be awesome.", advice: true }
    ],
    fayoum: [
        { name: "Salma Khaled", rating: 5, text: "Tunis Village pottery workshop was creative and relaxing!", advice: false },
        { name: "John Davis", rating: 5, text: "Sandboarding in Magic lake desert was thrilling!", advice: false },
        { name: "Ramy El-Demerdash", rating: 5, text: "Wadi El Rayan waterfalls were beautiful and clean.", advice: false },
        { name: "Lisa Andersen", rating: 5, text: "Eco lodge stay was rustic, cozy, and super comfortable.", advice: false },
        { name: "Hazem Metwally", rating: 4, text: "Tip: Advise future travelers to bring extra sunscreen for the safari.", advice: true }
    ],
    siwa: [
        { name: "Nader Gameel", rating: 5, text: "Floating in the salt lakes is a once in a lifetime experience!", advice: false },
        { name: "Chloe Martin", rating: 5, text: "Sunset at Fitnas Island was paradise on earth.", advice: false },
        { name: "Gamal Abdelmoaty", rating: 5, text: "The Bedouin dinner under desert stars was unforgettable.", advice: false },
        { name: "Alexandre Dubois", rating: 5, text: "Shali fortress views were stunning. Excellent driver.", advice: false },
        { name: "Dina Samy", rating: 4, text: "Advice: Clarify in advance that phone signal is weak in deep desert.", advice: true }
    ],
    dahab: [
        { name: "Sherif Osman", rating: 5, text: "Blue Hole diving was safe and breathtaking! Professional divers.", advice: false },
        { name: "Olivia Thomas", rating: 5, text: "Relaxed vibe, healthy food recommendations, perfect hotel.", advice: false },
        { name: "Bassem Shawky", rating: 5, text: "Mount Sinai hike sunrise was tough but totally worth it!", advice: false },
        { name: "Sven Lindqvist", rating: 5, text: "Best snorkeling trip ever. Saw sea turtles and corals.", advice: false },
        { name: "Mai Radwan", rating: 4, text: "Suggestion: Offer optional trekking poles for Mount Sinai climb.", advice: true }
    ],
    nweiba: [
        { name: "Hassan El-Shazly", rating: 5, text: "Wishwashi canyon water valley is a hidden gem in Sinai!", advice: false },
        { name: "Clara Meyer", rating: 5, text: "Bedouin camp right on the beach, super peaceful and clean.", advice: false },
        { name: "Seif El-Din", rating: 5, text: "Unplugged relaxation at its finest. Great fresh fish.", advice: false },
        { name: "Peter Parker", rating: 5, text: "Cozy campfire nights and friendly local hosts.", advice: false },
        { name: "Laila Tawfik", rating: 4, text: "Tip for company: Include power banks rental in remote camps.", advice: true }
    ],
    sharm: [
        { name: "Ahmed Mokhtar", rating: 5, text: "Ras Mohamed reserve marine life was extraordinary!", advice: false },
        { name: "Katrin Novak", rating: 5, text: "5-star resort experience, smooth airport transfer, zero hassle.", advice: false },
        { name: "Fady William", rating: 5, text: "Glass bottom boat tour was super fun for my family.", advice: false },
        { name: "George Clark", rating: 5, text: "Naama Bay nightlife tour was energetic and well guided.", advice: false },
        { name: "Noha Soliman", rating: 4, text: "Feedback: Pickup time from resort was delayed by 15 minutes.", advice: true }
    ],
    matrouh: [
        { name: "Eslam El-Gohary", rating: 5, text: "Ageeba beach water looks like the Maldives! Crystal clear.", advice: false },
        { name: "Sandra Bullock", rating: 5, text: "Cleopatra beach was iconic and very clean coastlines.", advice: false },
        { name: "Yasser Abdelshafy", rating: 5, text: "Great family vacation package with flexible scheduling.", advice: false },
        { name: "Mikhail Ivanov", rating: 5, text: "Very friendly guide and drivers knew all hidden spots.", advice: false },
        { name: "Reem Magdy", rating: 4, text: "Advice: Provide sun umbrellas as part of the beach package.", advice: true }
    ],
    alamein: [
        { name: "Ziad El-Bahry", rating: 5, text: "Modern resorts, luxury vibes, and pristine beaches!", advice: false },
        { name: "Sophie Turner", rating: 5, text: "Marina dining and beach club access were top tier.", advice: false },
        { name: "Kareem El-Fiqy", rating: 5, text: "World class city development and high end organization.", advice: false },
        { name: "Daniel Craig", rating: 5, text: "Loved the quiet coastal walks and luxury towers views.", advice: false },
        { name: "Fatma Zahra", rating: 4, text: "Suggestion: Add shuttle bus between towers and marina.", advice: true }
    ]
};

// Feature Details Data
const featureData = {
    daily_tours: {
        title: "Daily Guided Tours",
        icon: '<i class="fas fa-calendar-day"></i>',
        description: "Explore Egypt's iconic landmarks every single day with top-rated professional local tour guides fluent in multiple languages.",
        highlights: [
            "Expert certified Egyptologist guides.",
            "Flexible schedules starting every morning.",
            "Skip-the-line museum & temple entry tickets included."
        ]
    },
    cycling: {
        title: "Cycling Trips",
        icon: '<i class="fas fa-bicycle"></i>',
        description: "Experience active exploration with our specialized bicycle tours through historic city streets, coastal walkways, and scenic desert trails.",
        highlights: [
            "High-quality, regularly maintained bicycles & safety helmets.",
            "Escort vehicle & support crew on every route.",
            "Routes suitable for both beginners and experienced cyclists."
        ]
    },
    support: {
        title: "24/7 Dedicated Support",
        icon: '<i class="fas fa-headset"></i>',
        description: "Our dedicated customer care team is always active to assist you before, during, and after your trip whenever you need help.",
        highlights: [
            "Instant response via WhatsApp, Phone, or Email.",
            "Real-time itinerary adjustments & emergency help.",
            "Multilingual customer support representatives."
        ]
    },
    eco_lodges: {
        title: "Eco Lodges & Sustainable Tours",
        icon: '<i class="fas fa-tree"></i>',
        description: "Stay in eco-friendly lodges that preserve local environment while offering authentic cultural hospitality in places like Siwa & Fayoum.",
        highlights: [
            "Authentic local architecture built with natural materials.",
            "Organic farm-to-table traditional meals.",
            "Direct contribution to local community development."
        ]
    },
    bus_transport: {
        title: "Bus & Coach Transport",
        icon: '<i class="fas fa-bus"></i>',
        description: "Travel comfortably across cities in our modern, fully air-conditioned tourist buses equipped with modern safety features.",
        highlights: [
            "Reclining seats & spacious legroom.",
            "Experienced and licensed highway drivers.",
            "Direct intercity transfers between Cairo, Luxor, Dahab & more."
        ]
    },
    new_destinations: {
        title: "New & Exclusive Destinations",
        icon: '<i class="fas fa-compass"></i>',
        description: "Discover newly opened tourist spots, off-the-beaten-path locations, and secret gems across Egypt before everyone else.",
        highlights: [
            "Exclusive access to newly developed coastal & desert spots.",
            "Curated itineraries refreshed every season.",
            "Unique photo opportunities away from heavy crowds."
        ]
    },
    desert_journeys: {
        title: "Desert Journeys & Safaris",
        icon: '<i class="fas fa-route"></i>',
        description: "Embark on thrilling 4x4 desert safaris, dune bashing, sandboarding, and overnight Bedouin camping under stargazing skies.",
        highlights: [
            "Professional 4x4 desert drivers and equipment.",
            "Traditional Bedouin dinners cooked over open fire.",
            "Camping gear, tents, and safety equipment provided."
        ]
    },
    wildlife: {
        title: "Wildlife & Nature Reserves",
        icon: '<i class="fas fa-heart"></i>',
        description: "Visit protected marine and land nature reserves including Ras Mohamed in Sharm, Wadi El-Rayan in Fayoum, and Abu Galum in Dahab.",
        highlights: [
            "Guided snorkeling & marine life observation.",
            "Birdwatching tours in natural lakes and oases.",
            "Eco-guided walks through protected national parks."
        ]
    }
};

// City Modal Functions
function showOverview(cityKey, cityName, highlights) {
    document.getElementById('modalTargetTitle').innerText = cityName;
    document.getElementById('modalTargetKey').innerText = highlights;
    currentTargetValue = cityKey;

    const container = document.getElementById('reviewsContainer');
    container.innerHTML = "";

    const reviews = cityReviews[cityKey] || [];
    reviews.forEach(rev => {
        const starsHtml = '<i class="fas fa-star"></i>'.repeat(rev.rating);
        const adviceClass = rev.advice ? 'feedback-advice' : '';
        const tagAdvice = rev.advice ? '💡 <em>Company Advice</em> - ' : '';

        const item = document.createElement('div');
        item.className = `feedback-item ${adviceClass}`;
        item.innerHTML = `
            <div class="feedback-header">
                <span class="feedback-user">${rev.name}</span>
                <span class="feedback-stars">${starsHtml}</span>
            </div>
            <p>${tagAdvice}"${rev.text}"</p>
        `;
        container.appendChild(item);
    });

    document.getElementById('infoModal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('infoModal').style.display = 'none';
}

function confirmDestinationSelection() {
    hideModal();
    const selectElement = document.getElementById('destination');
    selectElement.value = currentTargetValue;
    document.getElementById('bookingForm').scrollIntoView({ behavior: 'smooth' });
}

// Feature Details Modal Functions
function showFeatureDetails(featureKey) {
    const feature = featureData[featureKey];
    if (!feature) return;

    document.getElementById('featureTitle').innerText = feature.title;
    document.getElementById('featureIcon').innerHTML = feature.icon;
    document.getElementById('featureDescription').innerText = feature.description;

    const highlightsContainer = document.getElementById('featureHighlights');
    highlightsContainer.innerHTML = "<strong style='display:block; margin-bottom: 8px; color: var(--brand-primary);'>Key Benefits:</strong>";
    
    feature.highlights.forEach(item => {
        const div = document.createElement('div');
        div.className = 'feature-bullet';
        div.innerHTML = `<i class="fas fa-check-circle"></i> <span>${item}</span>`;
        highlightsContainer.appendChild(div);
    });

    document.getElementById('featureModal').style.display = 'flex';
}

function hideFeatureModal() {
    document.getElementById('featureModal').style.display = 'none';
}

// Close Modals when clicking outside
window.onclick = function(e) {
    const cityModal = document.getElementById('infoModal');
    const featureModal = document.getElementById('featureModal');
    
    if (e.target === cityModal) hideModal();
    if (e.target === featureModal) hideFeatureModal();
}