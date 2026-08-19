const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // إزالة Active من كل الأزرار
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // إضافة Active للزرار اللي اتضغط
        button.classList.add("active");

        const selectedCategory = button.textContent.trim().toLowerCase();

        galleryItems.forEach(item => {

            const image = item.querySelector("img");

            const imageCategory =
                image.getAttribute("data-category")?.trim().toLowerCase();

            if (
                selectedCategory === "all" ||
                imageCategory === selectedCategory
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});