"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheck = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    display: inline-flex;\n    align-items: center;\n    padding-left: 0;\n    margin-right: 0.75rem;\n  "
    ],
    [
      "\n    display: inline-flex;\n    align-items: center;\n    padding-left: 0;\n    margin-right: 0.75rem;\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  & > label {\n    margin-bottom: 0;\n  }\n  & > input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0;\n  }\n  ",
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
      "\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  & > label {\n    margin-bottom: 0;\n  }\n  & > input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0;\n  }\n  ",
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

var formCheckInline = function formCheckInline(props) {
  return props.inline && (0, _styledComponents.css)(_templateObject);
};

var FormCheck = (exports.FormCheck = _styledComponents2.default.div(
  _templateObject2,
  formCheckInline,
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
