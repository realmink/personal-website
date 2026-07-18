const container = document.querySelector(".background")

function petals() {
    const element = document.createElement("div");
    element.classList.add("petals")

    let size = Math.random() * (28 - 18) + 18;
    let colors = ["#FFE4E1", "#FFF0F5", "#FDDDE6"];
    let colorsIdx = Math.floor(Math.random() * colors.length)
    let petalColors = colors[colorsIdx];

    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.left = Math.random() * 100 + "%";
    element.style.background = petalColors;
    element.style.animationDuration = "10s";
    element.style.animationDelay = Math.random() * (10 - 2) + 2 + "s";
    element.style.setProperty("--drift", Math.random() * 160 - 80 + "vw");
    element.style.position = "absolute"
    element.style.top = "-10vh"

    return element;
}

    for(let i = 0; i < 50; i++) {
        container.append(petals())
    }