"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Mandatory homework
//1) Implement a class that describes a circle. It must have the following components:
// Demonstrate the work of properties and methods.
var Circle =
/*#__PURE__*/
function () {
  function Circle(width) {
    _classCallCheck(this, Circle);

    this.width = width;
    this.radius = width / 2; // Calculate and store 

    this.diameter = this.radius * 2; // Calculate and store
  } //    a field that stores the radius of the circle;


  _createClass(Circle, [{
    key: "calculateRadius",
    value: function calculateRadius() {
      var radius = this.width / 2;
    } //    a method that calculates the area of a circle;

  }, {
    key: "calculateAreaOfCircle",
    value: function calculateAreaOfCircle() {
      var area = Math.PI * (this.radius * this.radius);
      return area.toFixed(2);
    } //    a method that calculates the length of the circle

  }, {
    key: "calculatelengthofCircle",
    value: function calculatelengthofCircle() {
      var lengthCircle = 2 * Math.PI * this.radius;
      return lengthCircle.toFixed(2);
    } //    get-property that returns the radius of the circle;

  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.radius;
    } //    set-property that sets the radius of the circle;

  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this.radius = radius;
    } //    get-property that returns the diameter of the circle;

  }, {
    key: "getDiameter",
    value: function getDiameter() {
      return this.diameter;
    }
  }]);

  return Circle;
}();

function newValue() {
  var inputValue = document.getElementById("circle_width");
  var inputValueWidth = inputValue.value;
  console.log(inputValueWidth);
  var circle1 = new Circle(inputValueWidth); // is changing the radius on the document

  var radiusDisplay = document.getElementById("radius_display");
  radiusDisplay.textContent = circle1.getRadius(); // is changing the diameter on the document

  var diameterDisplay = document.getElementById("diameter_display");
  diameterDisplay.textContent = circle1.getDiameter(); // is changing the area on the document

  var areaDisplay = document.getElementById("area_display");
  areaDisplay.textContent = circle1.calculateAreaOfCircle(); // is changing the length on the document

  var lengthDisplay = document.getElementById("length_display");
  lengthDisplay.textContent = circle1.calculatelengthofCircle();
}