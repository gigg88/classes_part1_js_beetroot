"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 2) Implement a class that describes a stationery marker. It must have the following components:
//    a field that stores the color of the marker;
//    a field that stores the amount of ink in the marker (in percent);
//    an input method (accepts a string and prints the text in the corresponding color; the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).
// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.
var Marker =
/*#__PURE__*/
function () {
  function Marker(color, inkAmount) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.inkAmount = inkAmount;
  }

  _createClass(Marker, [{
    key: "setColor",
    value: function setColor(color) {
      this.color = color;
    }
  }, {
    key: "setInkAmount",
    value: function setInkAmount(inkAmount) {
      this.inkAmount = inkAmount;
    }
  }]);

  return Marker;
}();