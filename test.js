class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    setInkAmount(inkAmount) {
        if (inkAmount >= 0 && inkAmount <= 100) {
            this.inkAmount = inkAmount;
        } else {
            console.error("Invalid ink amount. Must be between 0 and 100.");
        }
    }

    getInkAmount() {
        return this.inkAmount;
    }

    printText(text) {
        const inkPerCharacter = 0.5;
        const requiredInk = text.length * inkPerCharacter;

        if (requiredInk <= this.inkAmount) {
            this.inkAmount -= requiredInk;

            // Prevent inkAmount from going below 0
            if (this.inkAmount < 0) {
                this.inkAmount = 0;
            }

            console.log(text);
            console.log(`Remaining ink: ${this.inkAmount}%`);

            const textArea = document.getElementById("textarea");
            textArea.textContent = text;
        } else {
            console.log("Out of ink");
        }
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.inkAmount = 100;
        console.log("Marker refilled");
    }
}

const inputText = document.getElementById("inputText");
const textArea = document.getElementById("textarea");
const inkValue = document.getElementById("ink_value");

function btnClick() {
    const inputValue = inputText.value;
    textArea.textContent = inputValue;

    const marker = new Marker("blue", 100); // Initialize marker with 100% ink
    marker.printText(inputValue);

    // Update ink value display
    inkValue.textContent = `Remaining ink: ${marker.getInkAmount()}%`;
}