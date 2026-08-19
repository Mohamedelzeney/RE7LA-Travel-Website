const destinationFilter = document.getElementById("destinationFilter");
const typeFilter = document.getElementById("typeFilter");
const tripFilter = document.getElementById("tripFilter");

const tourCards = document.querySelectorAll(".tour-card");


// =========================
// FILTER TOURS
// =========================

function filterTours() {

    const selectedDestination = destinationFilter.value;
    const selectedType = typeFilter.value;
    const selectedTrip = tripFilter.value;


    tourCards.forEach(function (card) {

        const destination = card.dataset.destination;
        const type = card.dataset.type;
        const trip = card.dataset.trip;


        const destinationMatch =
            selectedDestination === "all" ||
            selectedDestination === destination;


        const typeMatch =
            selectedType === "all" ||
            selectedType === type;


        const tripMatch =
            selectedTrip === "all" ||
            selectedTrip === trip;


        if (destinationMatch && typeMatch && tripMatch) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// FILTER EVENTS

destinationFilter.addEventListener("change", filterTours);

typeFilter.addEventListener("change", filterTours);

tripFilter.addEventListener("change", filterTours);


// =========================
// DETAILS
// =========================

const detailsButtons = document.querySelectorAll(".details-btn");


detailsButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const card = this.closest(".tour-card");

        const details = card.querySelector(".tour-details");


        if (details.style.display === "block") {

            details.style.display = "none";

        } else {

            details.style.display = "block";

        }

    });

});