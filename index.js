const display = document.getElementById("display-text");
let current = [];
let showingAnswer = false;

const appendToDisplay = x => {
    if (showingAnswer) {
        cls()
        showingAnswer = false;
    }
    display.innerText = `${display.innerText}${x}`;
}

const cls = () => {
    display.innerText = "";
}

const ac = () => {
    current = []
    cls()
}


const appendToCurrent = operation => {
    if (current.length < 2) {
        current.push(Number(display.innerText))
        current.push(operation)
    } else {
        current.push(Number(display.innerText))
        switch (current[1]) {
            case "muli": {
                current[0] = current[0] * current[2];
                break;
            }
            case "divi": {
                current[0] = current[0] / current[2];
                break;
            }
            case "addi": {
                current[0] = current[0] + current[2];
                break;

            }
            case "subi": {
                current[0] = current[0] - current[2];
                break;
            }
            case "eq": {
                switch (operation) {
                    case "muli": {
                        display.innerText = current[0] * current[2];
                        break;
                    }
                    case "divi": {
                        display.innerText = current[0] / current[2];
                        break;
                    }
                    case "addi": {
                        display.innerText = current[0] + current[2];
                        break;
        
                    }
                    case "subi": {
                        display.innerText = current[0] - current[2];
                        break;
                    }
                }
                current = [];
            }
        }
        current[1] = operation;
        current.pop();
    }
    cls()
    appendToDisplay(current[0].toString())
    showingAnswer = true;
}

