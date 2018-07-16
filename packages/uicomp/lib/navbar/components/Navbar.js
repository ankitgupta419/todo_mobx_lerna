"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    color: rgba(0, 0, 0, 0.5);\n    border-color: rgba(0, 0, 0, 0.1);\n    background-color: #f8f9fa !important;\n  "
    ],
    [
      "\n    color: rgba(0, 0, 0, 0.5);\n    border-color: rgba(0, 0, 0, 0.1);\n    background-color: #f8f9fa !important;\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    color: rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 0.1);\n    background-color: #343a40 !important;\n  "
    ],
    [
      "\n    color: rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 0.1);\n    background-color: #343a40 !important;\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n      @media (max-width: ",
      ") {\n        & > nav:not(:last-child) {\n          display: flex !important;\n          width: 100%;\n          justify-content: space-between;\n        }\n      }\n    "
    ],
    [
      "\n      @media (max-width: ",
      ") {\n        & > nav:not(:last-child) {\n          display: flex !important;\n          width: 100%;\n          justify-content: space-between;\n        }\n      }\n    "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  ",
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
      "\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  ",
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

var _styledBaseComponents = require("styled-base-components");

var _styledConfig = require("styled-config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var navbarLight = function navbarLight(props) {
  return props.light && (0, _styledComponents.css)(_templateObject);
};

var navbarDark = function navbarDark(props) {
  return props.dark && (0, _styledComponents.css)(_templateObject2);
};

/* istanbul ignore next */
var navbarExpand = function navbarExpand(props) {
  var thisScreenSize = "";

  if (props.expandSm) {
    thisScreenSize = _styledConfig.screenSize.sm;
  } else if (props.expandMd) {
    thisScreenSize = _styledConfig.screenSize.md;
  } else if (props.expandLg) {
    thisScreenSize = _styledConfig.screenSize.lg;
  } else if (props.expandXl) {
    thisScreenSize = _styledConfig.screenSize.xl;
  }

  if (props.expandSm || props.expandMd || props.expandLg || props.expandXl) {
    return (0, _styledComponents.css)(_templateObject3, thisScreenSize);
  }

  return "";
};

var Navbar = (exports.Navbar = (0, _styledComponents2.default)(
  _styledBaseComponents.Nav
)(
  _templateObject4,
  navbarLight,
  navbarDark,
  navbarExpand,
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
