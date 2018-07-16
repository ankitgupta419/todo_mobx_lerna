"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItem = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    color: #6c757d;\n  "],
    ["\n    color: #6c757d;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n  &:not(:first-child)::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    color: #6c757d;\n    content: "/";\n  }\n  & + &:hover::before {\n    text-decoration: none;\n  }\n  ',
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
      '\n  &:not(:first-child)::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    color: #6c757d;\n    content: "/";\n  }\n  & + &:hover::before {\n    text-decoration: none;\n  }\n  ',
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

var breadcrumbitemActive = function breadcrumbitemActive(props) {
  return props.active && (0, _styledComponents.css)(_templateObject);
};

var BreadcrumbItem = (exports.BreadcrumbItem = _styledComponents2.default.li(
  _templateObject2,
  breadcrumbitemActive,
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
