function goToAboutPage() {
    window.location.href = "about2.html";
}

function goWork() {
    window.location.href = "work.html";
}

const imageContainer = document.getElementById("image-container");

imageContainer.addEventListener("scroll", () => {
    const scrollTop = imageContainer.scrollTop;
    const images = document.querySelectorAll("img");

    images.forEach((img, index) => {
        const imgTop = img.offsetTop;
        const imgHeight = img.clientHeight;

        if (scrollTop >= imgTop && scrollTop < imgTop + imgHeight) {
            img.style.transform = `scale(${1 + (scrollTop - imgTop) / 100})`;
        } else {
            img.style.transform = "scale(1)";
        }
    });
});

