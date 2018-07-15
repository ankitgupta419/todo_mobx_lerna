"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.largeModalWidth = exports.smallModalWidth = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: ",
    ";\n  overflow: hidden;\n  outline: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  @media (min-width: ",
    ") {\n    max-width: ",
    ";\n  };\n  @media (min-width: ",
    ") {\n    max-width: ",
    ";\n  };\n  ",
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
    "\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: ",
    ";\n  overflow: hidden;\n  outline: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  @media (min-width: ",
    ") {\n    max-width: ",
    ";\n  };\n  @media (min-width: ",
    ") {\n    max-width: ",
    ";\n  };\n  ",
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

var _styledConfig = require("styled-config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var smallModalWidth = (exports.smallModalWidth = function smallModalWidth(
  props
) {
  if (props.sm) {
    return "300px";
  }

  return "";
});

var largeModalWidth = (exports.largeModalWidth = function largeModalWidth(
  props
) {
  if (props.lg) {
    return "800px";
  }

  return "";
});

var modalDisplay = function modalDisplay(props) {
  if (props.hidden) {
    return "none";
  }

  return "block";
};

var Modal = (exports.Modal = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return modalDisplay(props);
  },
  _styledConfig.screenSize.sm,
  function(props) {
    return smallModalWidth(props);
  },
  _styledConfig.screenSize.lg,
  function(props) {
    return largeModalWidth(props);
  },
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
