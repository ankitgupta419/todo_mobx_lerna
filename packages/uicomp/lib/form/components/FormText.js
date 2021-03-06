"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormText = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    color: #6c757d;\n  "],
    ["\n    color: #6c757d;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n  display: block;\n  margin-top: 0.25rem;\n  box-sizing: border-box;\n  ",
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
      "\n  display: block;\n  margin-top: 0.25rem;\n  box-sizing: border-box;\n  ",
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

var formTextMuted = function formTextMuted(props) {
  return props.muted && (0, _styledComponents.css)(_templateObject);
};

var FormText = (exports.FormText = (0, _styledComponents2.default)(
  _styledBaseComponents.Small
)(
  _templateObject2,
  formTextMuted,
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
