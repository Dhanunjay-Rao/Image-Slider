document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg",
        "images/image5.jpg"
    ];

    const carouselInner = document.querySelector(".carousel-inner");

    images.forEach((image, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        const img = document.createElement("img");
        img.src = image;
        img.alt = `Slide ${index + 1}`;
        img.classList.add("d-block", "w-100");

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });

    // Automatic Slide Transition
    $('#carouselExample').carousel({
        interval: 3000,  // Change slide every 3 seconds
        ride: 'carousel'
    });
});
