"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkAmount) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.inkAmount = inkAmount;
  }

  _createClass(Marker, [{
    key: "setInkAmount",
    value: function setInkAmount(inkAmount) {
      if (inkAmount >= 0 && inkAmount <= 100) {
        this.inkAmount = inkAmount;
      } else {
        console.error("Invalid ink amount. Must be between 0 and 100.");
      }
    }
  }, {
    key: "getInkAmount",
    value: function getInkAmount() {
      return this.inkAmount;
    }
  }, {
    key: "printText",
    value: function printText(text) {
      var inkPerCharacter = 0.5;
      var requiredInk = text.length * inkPerCharacter;

      if (requiredInk <= this.inkAmount) {
        this.inkAmount -= requiredInk; // Prevent inkAmount from going below 0

        if (this.inkAmount < 0) {
          this.inkAmount = 0;
        }

        console.log(text);
        console.log("Remaining ink: ".concat(this.inkAmount, "%"));

        var _textArea = document.getElementById("textarea");

        _textArea.textContent = text;
      } else {
        console.log("Out of ink");
      }
    }
  }]);

  return Marker;
}();

var RefillableMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(RefillableMarker, _Marker);

  function RefillableMarker() {
    _classCallCheck(this, RefillableMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(RefillableMarker).apply(this, arguments));
  }

  _createClass(RefillableMarker, [{
    key: "refill",
    value: function refill() {
      this.inkAmount = 100;
      console.log("Marker refilled");
    }
  }]);

  return RefillableMarker;
}(Marker);

var inputText = document.getElementById("inputText");
var textArea = document.getElementById("textarea");
var inkValue = document.getElementById("ink_value");

function btnClick() {
  var inputValue = inputText.value;
  textArea.textContent = inputValue;
  var marker = new Marker("blue", 100); // Initialize marker with 100% ink

  marker.printText(inputValue); // Update ink value display

  inkValue.textContent = "Remaining ink: ".concat(marker.getInkAmount(), "%");
}