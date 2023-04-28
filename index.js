const display = document.getElementById("display-text");

const appendToDisplay = x => {
    display.innerText = `${display.innerText}${x}`;
}

const cls = () => {
    display.innerText = "";
}
