"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n      display: none;\n    "],
    ["\n      display: none;\n    "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n      display: block;\n    "],
    ["\n      display: block;\n    "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  ",
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
      "\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  ",
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var dropdownMenuHidden = function dropdownMenuHidden(props) {
  return props.hidden
    ? (0, _styledComponents.css)(_templateObject)
    : (0, _styledComponents.css)(_templateObject2);
};

var DropdownMenu = (exports.DropdownMenu = _styledComponents2.default.div(
  _templateObject3,
  dropdownMenuHidden,
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
