// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal content elements
var modalImage = modal.querySelector("img");
var modalBrand = modal.querySelector(".text h1");
var modalItem = modal.querySelector(".text p:nth-child(2)");
var modalPrice = modal.querySelector(".price");
var modalDiscount = modal.querySelector(".discount");
var modalStock = modal.querySelector(".stock");

// Add event listener to the gallery container
document.querySelector(".gallery").addEventListener("click", function(event) {
    if (event.target.classList.contains("buy-now")) {
        var card = event.target.closest(".card");

        var imgSrc = card.querySelector("img").src;
        var brand = card.querySelector(".brand").textContent;
        var item = card.querySelector(".item").textContent;
        var price = card.querySelector(".price").textContent;

        // Update modal content
        modalImage.src = imgSrc;
        modalBrand.textContent = brand;
        modalItem.textContent = item;
        modalPrice.textContent = price;
        modalDiscount.textContent = "50% off"; // Static value or add logic to get this from somewhere
        modalStock.textContent = "In stock"; // Static value or add logic to get this from somewhere

        modal.style.display = "flex";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}