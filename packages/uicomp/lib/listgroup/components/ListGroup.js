"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListGroup = exports.listGroupFlush = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    & > a,\n    & > li {\n      border-right: 0;\n      border-left: 0;\n      border-radius: 0;\n      &:first-child {\n        border-top: 0;\n      }\n      &:last-child {\n        border-bottom: 0;\n      }\n    }\n  "
    ],
    [
      "\n    & > a,\n    & > li {\n      border-right: 0;\n      border-left: 0;\n      border-radius: 0;\n      &:first-child {\n        border-top: 0;\n      }\n      &:last-child {\n        border-bottom: 0;\n      }\n    }\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  ",
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
      "\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  ",
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

var listGroupFlush = (exports.listGroupFlush = function listGroupFlush(props) {
  return props.flush && (0, _styledComponents.css)(_templateObject);
});

var ListGroup = (exports.ListGroup = (0, _styledComponents2.default)(
  _styledBaseComponents.Ul
)(
  _templateObject2,
  listGroupFlush,
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
