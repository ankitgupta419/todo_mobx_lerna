"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    padding: 0.4rem 0;\n  "],
    ["\n    padding: 0.4rem 0;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n    padding: 0 0.4rem;\n  "],
    ["\n    padding: 0 0.4rem;\n  "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n      opacity: 0;\n    "],
    ["\n      opacity: 0;\n    "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    ["\n      opacity: 0.9;\n    "],
    ["\n      opacity: 0.9;\n    "]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      '\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  ',
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
      ";\n  ",
      ";\n"
    ],
    [
      '\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  ',
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

var tooltipTop = function tooltipTop(props) {
  return props.top && (0, _styledComponents.css)(_templateObject);
};

var tooltipRight = function tooltipRight(props) {
  return props.right && (0, _styledComponents.css)(_templateObject2);
};

var tooltipBottom = function tooltipBottom(props) {
  return props.bottom && (0, _styledComponents.css)(_templateObject);
};

var tooltipLeft = function tooltipLeft(props) {
  return props.left && (0, _styledComponents.css)(_templateObject2);
};

var tooltipHidden = function tooltipHidden(props) {
  return props.hidden
    ? (0, _styledComponents.css)(_templateObject3)
    : (0, _styledComponents.css)(_templateObject4);
};

var Tooltip = (exports.Tooltip = _styledComponents2.default.div(
  _templateObject5,
  tooltipTop,
  tooltipRight,
  tooltipBottom,
  tooltipLeft,
  tooltipHidden,
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
