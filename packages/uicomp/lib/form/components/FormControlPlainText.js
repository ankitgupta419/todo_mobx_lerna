"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlPlainText = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    display: inline-block;\n  "],
    ["\n    display: inline-block;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n    padding-right: 0;\n    padding-left: 0;\n  "],
    ["\n    padding-right: 0;\n    padding-left: 0;\n  "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n  box-sizing: border-box;\n  ",
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
      "\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n  box-sizing: border-box;\n  ",
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

var _styledBaseComponents = require("styled-base-components");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var formcontrolPlainTextInline = function formcontrolPlainTextInline(props) {
  return props.inline && (0, _styledComponents.css)(_templateObject);
};

var formControllPlainTextSmallLarge = function formControllPlainTextSmallLarge(
  props
) {
  return (props.sm || props.lg) && (0, _styledComponents.css)(_templateObject2);
};

var FormControlPlainText = (exports.FormControlPlainText = (0,
_styledComponents2.default)(_styledBaseComponents.Input)(
  _templateObject3,
  formcontrolPlainTextInline,
  formControllPlainTextSmallLarge,
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
