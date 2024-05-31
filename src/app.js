
document.addEventListener("DOMContentLoaded", function () {
    const togglerBars = document.getElementById("togglerBars");
    const togglerXmark = document.getElementById("togglerXmark");
    const categoryContainer = document.querySelector(".category_container");

    togglerBars.addEventListener('click', function () {
        if (window.innerWidth < 768) {
            if (categoryContainer.style.display === "none" || categoryContainer.style.display === "") {
                categoryContainer.style.display = "block";
            } else {
                categoryContainer.style.display = "none";
            }
        }
    })

    togglerXmark.addEventListener('click', function () {
        if (window.innerWidth < 768) {
            if (categoryContainer.style.display === "block" || categoryContainer.style.display === "") {
                categoryContainer.style.display = "none";
            } else {
                categoryContainer.style.display = "none";
            }
        }
    })


})
