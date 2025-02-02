document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.animationDelay = `${index * 0.3}s`;
        }, 500);
    });
});

// Button Navigation
document.getElementById("navigateButton1").onclick = function() {
    window.location.href = "https://open.spotify.com/show/4pPjIJ3sR1rKIOCwee48ZV";
};
document.getElementById("navigateButton2").onclick = function() {
    window.location.href = "https://open.spotify.com/playlist/0mrxIL2fM36cjERDGa9ImO";
};
document.getElementById("navigateButton3").onclick = function() {
    window.location.href = "https://open.spotify.com/show/3v2UftCPOdbAmDxYvnwfGB";
};
