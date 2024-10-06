// 2) Implement a class that describes a stationery marker. It must have the following components:

//    a field that stores the color of the marker;
//    a field that stores the amount of ink in the marker (in percent);
//    an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).

// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.

class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    setInkAmount(inkAmount) {
        this.inkAmount = 100;
    }

    getInkAmount() {
        return this.inkAmount;
    }

    printText(text) {
        const inkPerCharacter = 0.5;
        const requiredInk = text.length * inkPerCharacter;
        
        if(requiredInk <= this.inkAmount) {
            this.inkAmount -= requiredInk;
                         

        } else {
            console.log("Out of ink");
        }
    }

}

class RefillableMarker extends Marker {
    refill() {
        this.setInkAmount(100);
    }
}

const inputText = document.getElementById("inputText");
const textArea = document.getElementById("textarea");
const inkValue = document.getElementById("ink_value");

function btnClick() {
    const inputValue = inputText.value;
    textArea.textContent = inputValue;

    const refillableMarker = new RefillableMarker("blue", 100);
    refillableMarker.printText(inputValue);

    inkValue.textContent = `Remaining ink: ${refillableMarker.getInkAmount()}%`;

    inputText.value ='';
}

