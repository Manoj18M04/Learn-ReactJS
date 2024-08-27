document.addEventListener("DOMContentLoaded", function () {
    const loaders = document.querySelectorAll(".circular-loader");

    loaders.forEach(loader => {
        const percentage = loader.getAttribute("data-percentage");
        const angle = percentage * 3.6;
        loader.style.background = `conic-gradient(
            #4caf50 ${angle}deg,
            #e0e0e0 ${angle}deg
        )`;
        loader.querySelector(".percentage").textContent = `${percentage}%`;
    });
});
