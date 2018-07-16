"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff;\n  "
    ],
    [
      "\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff;\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n    color: #6c757d;\n    background-color: transparent;\n  "],
    ["\n    color: #6c757d;\n    background-color: transparent;\n  "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  &:hover,\n  &:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa;\n  }\n  ",
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
      ";\n  ",
      ";\n"
    ],
    [
      "\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  &:hover,\n  &:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa;\n  }\n  ",
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

var dropdownItemActive = function dropdownItemActive(props) {
  return props.active && (0, _styledComponents.css)(_templateObject);
};

var dropdownItemDisabled = function dropdownItemDisabled(props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject2);
};

var DropdownItem = (exports.DropdownItem = _styledComponents2.default.div(
  _templateObject3,
  dropdownItemActive,
  dropdownItemDisabled,
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
