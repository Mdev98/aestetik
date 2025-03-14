const produitDetails = {
    'template-rs': {
        title: "Template RS",
        heading: "Template RS",
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        price: "125.000 XOF",
        details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
    },
    'branding-checklist': {
        title: "Brand Checklist",
        heading: "Brand Checklist",
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        price: "125.000 XOF",
        details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
    },
    'strat-contenu': {
        title: "Stratégie de contenu",
        heading: "Stratégie de contenu",
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        price: "125.000 XOF",
        details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
    },
    '12-week-year': {
        title: "12 Week Year",
        heading: "12 Week Year",
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        price: "125.000 XOF",
        details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
    },
    'Planner': {
        title: "Planner",
        heading: "Planner",
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
        price: "125.000 XOF",
        details: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
    },
}

function loadProductDetails() {
    const url = window.location.href;
    const decodedUrl = decodeURIComponent(url);
    const produitName = decodedUrl.split("#")[1];
    
    const produit = produitDetails[produitName];
    if (!produit) {
        window.location.href = "./produit.html";
        return;
    }

    document.querySelector(".produit-content-title").textContent = produit.title;
    document.querySelector(".produit-content-text").textContent = produit.content;
    
    const produitItems = document.querySelectorAll(".produit-content-item");
    produitItems.forEach((item, index) => {
        const title = item.querySelector(".produit-content-item-title");
        const text = item.querySelector(".produit-content-item-text");
        
        if (produit.items[index]) {
            title.innerHTML = produit.items[index].title;
            text.textContent = produit.items[index].content;
        }
    });
}

document.addEventListener("DOMContentLoaded", loadServiceDetails);