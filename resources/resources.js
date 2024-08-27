// resources.js
document.addEventListener("DOMContentLoaded", function () {
    // Image Sources
    const images = {
        image1: "https://via.placeholder.com/600x400?text=Mind+Image",
        image2: "https://via.placeholder.com/600x400?text=Brain+Image"
    };

    // Set image sources
    document.getElementById("image1").src = images.image1;
    document.getElementById("image2").src = images.image2;
});
