"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipArrow = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    bottom: 0;\n    width: 100%;\n    left: 42%;\n    &::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000;\n    }\n  "
    ],
    [
      "\n    bottom: 0;\n    width: 100%;\n    left: 42%;\n    &::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000;\n    }\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    left: 0;\n    width: 0.4rem;\n    height: 100%;\n    top: 28%;\n    &::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000;\n    }\n  "
    ],
    [
      "\n    left: 0;\n    width: 0.4rem;\n    height: 100%;\n    top: 28%;\n    &::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000;\n    }\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n    top: 0;\n    width: 100%;\n    left: 42%;\n    &::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000;\n    }\n  "
    ],
    [
      "\n    top: 0;\n    width: 100%;\n    left: 42%;\n    &::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000;\n    }\n  "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n    right: 0;\n    width: 0.4rem;\n    height: 100%;\n    top: 28%;\n    &::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000;\n    }\n  "
    ],
    [
      "\n    right: 0;\n    width: 0.4rem;\n    height: 100%;\n    top: 28%;\n    &::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000;\n    }\n  "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      '\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n  &::before {\n    position: absolute;\n    content: "";\n    border-color: transparent;\n    border-style: solid;\n  }\n  ',
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
      ";\n  ",
      ";\n  ",
      ";\n"
    ],
    [
      '\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n  &::before {\n    position: absolute;\n    content: "";\n    border-color: transparent;\n    border-style: solid;\n  }\n  ',
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

var tooltipArrowTop = function tooltipArrowTop(props) {
  return props.top && (0, _styledComponents.css)(_templateObject);
};

var tooltipArrowRight = function tooltipArrowRight(props) {
  return props.right && (0, _styledComponents.css)(_templateObject2);
};

var tooltipArrowBottom = function tooltipArrowBottom(props) {
  return props.bottom && (0, _styledComponents.css)(_templateObject3);
};

var tooltipArrowLeft = function tooltipArrowLeft(props) {
  return props.left && (0, _styledComponents.css)(_templateObject4);
};

var TooltipArrow = (exports.TooltipArrow = _styledComponents2.default.div(
  _templateObject5,
  tooltipArrowTop,
  tooltipArrowRight,
  tooltipArrowBottom,
  tooltipArrowLeft,
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
