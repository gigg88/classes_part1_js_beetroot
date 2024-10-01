//Mandatory homework

//1) Implement a class that describes a circle. It must have the following components:

// Demonstrate the work of properties and methods.

class Circle {
    constructor(width) {
        this.width = width;
        this.radius = width / 2; // Calculate and store 
        this.diameter = this.radius * 2; // Calculate and store
    }
//    a field that stores the radius of the circle;
    calculateRadius() {
        const radius = this.width / 2;
                  
    } 

//    a method that calculates the area of a circle;
     calculateAreaOfCircle() {
        const area = Math.PI*(this.radius * this.radius);
        return area.toFixed(2);

     }

//    a method that calculates the length of the circle
     calculatelengthofCircle() {
        const lengthCircle = (2 * Math.PI) * this.radius;
        return lengthCircle.toFixed(2);
     }
//    get-property that returns the radius of the circle;
    getRadius() {
        return this.radius;
    }

//    set-property that sets the radius of the circle;
    setRadius(radius) {
        this.radius = radius;
    }

//    get-property that returns the diameter of the circle;
    getDiameter() {
        return this.diameter;
    }
}

function newValue() {
    const inputValue = document.getElementById("circle_width");
const inputValueWidth = inputValue.value;
console.log(inputValueWidth);

const circle1 = new Circle(inputValueWidth);



// is changing the radius on the document
const radiusDisplay = document.getElementById("radius_display");
radiusDisplay.textContent = circle1.getRadius();

// is changing the diameter on the document
const diameterDisplay = document.getElementById("diameter_display");
diameterDisplay.textContent = circle1.getDiameter();

// is changing the area on the document
const areaDisplay = document.getElementById("area_display");
areaDisplay.textContent = circle1.calculateAreaOfCircle();

// is changing the length on the document
const lengthDisplay = document.getElementById("length_display");
lengthDisplay.textContent = circle1.calculatelengthofCircle();

}