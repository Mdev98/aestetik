function loadSVG () {
    fetch("assets/images/logo-aestetik.svg")
    .then((response) => { return response.text(); })
    .then((svg) => {
        document.querySelector(".logo").innerHTML = svg;
    });
    fetch("assets/images/aestetik.svg")
    .then((response) => { return response.text(); })
    .then((svg) => {
        document.querySelector(".hero-banner").innerHTML = svg;
    });
    document.body.style.display = 'block';
}

loadSVG();


