"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDialog = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n      display: flex;\n      align-items: center;\n      min-height: calc(100% - (0.5rem * 2));\n      @media (min-width: ",
      ") { \n        min-height: calc(100% - (1.75rem * 2));\n      };\n    "
    ],
    [
      "\n      display: flex;\n      align-items: center;\n      min-height: calc(100% - (0.5rem * 2));\n      @media (min-width: ",
      ") { \n        min-height: calc(100% - (1.75rem * 2));\n      };\n    "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n  @media (min-width: ",
      ") {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  };\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n"
    ],
    [
      "\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n  @media (min-width: ",
      ") {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  };\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n"
    ]
  );

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledConfig = require("styled-config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var dialogCentered = function dialogCentered(props) {
  if (props.centered) {
    return (0, _styledComponents.css)(
      _templateObject,
      _styledConfig.screenSize.sm
    );
  }

  return "";
};

var ModalDialog = (exports.ModalDialog = _styledComponents2.default.div(
  _templateObject2,
  _styledConfig.screenSize.sm,
  function(props) {
    return dialogCentered(props);
  },
  _styledSystem.space,
  _styledSystem.width,
  _styledSystem.color,
  _styledSystem.fontSize,
  _styledSystem.fontWeight,
  _styledSystem.textAlign,
  _styledSystem.lineHeight,
  _styledSystem.display,
  _styledSystem.borderRadius,
  _styledSystem.borderColor,
  _styledSystem.borders
));
