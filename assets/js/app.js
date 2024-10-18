function fetchSVG(url, selector) {
    return fetch(url)
        .then(response => response.text())
        .then(svg => {
            document.querySelector(selector).innerHTML = svg;
        });
}

function loadSVG() {
    // Use requestAnimationFrame to ensure the browser is not blocked while loading the SVGs
    requestAnimationFrame(() => {
        Promise.all([
            fetchSVG("assets/images/logo-aestetik.svg", ".logo"),
            fetchSVG("assets/images/aestetik.svg", ".hero-banner")
        ]).then(() => {
            // Show the body after SVGs are loaded
            // document.body.style.display = 'block';
        }).catch(error => {
            console.error('Error loading SVG:', error);
        });
    });
}

// Lazy load SVGs after the window has loaded
window.addEventListener('load', loadSVG);
