"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    margin-bottom: 0.5rem;\n  "],
    ["\n    margin-bottom: 0.5rem;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n    margin-left: 0.5rem;\n  "],
    ["\n    margin-left: 0.5rem;\n  "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n    margin-top: 0.5rem;\n  "],
    ["\n    margin-top: 0.5rem;\n  "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    ["\n    margin-right: 0.5rem;\n  "],
    ["\n    margin-right: 0.5rem;\n  "]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    ["\n        display: none;\n      "],
    ["\n        display: none;\n      "]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    ["\n        display: block;\n      "],
    ["\n        display: block;\n      "]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      '\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  ',
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
      '\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  ',
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

var popoverTop = function popoverTop(props) {
  return props.top && (0, _styledComponents.css)(_templateObject);
};

var popoverRight = function popoverRight(props) {
  return props.right && (0, _styledComponents.css)(_templateObject2);
};

var popoverBottom = function popoverBottom(props) {
  return props.bottom && (0, _styledComponents.css)(_templateObject3);
};

var popoverLeft = function popoverLeft(props) {
  return props.left && (0, _styledComponents.css)(_templateObject4);
};

var popoverHidden = function popoverHidden(props) {
  return props.hidden
    ? (0, _styledComponents.css)(_templateObject5)
    : (0, _styledComponents.css)(_templateObject6);
};

var Popover = (exports.Popover = _styledComponents2.default.div(
  _templateObject7,
  popoverTop,
  popoverRight,
  popoverBottom,
  popoverLeft,
  popoverHidden,
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
