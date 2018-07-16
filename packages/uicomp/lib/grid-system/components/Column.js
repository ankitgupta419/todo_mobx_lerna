"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.lgFlex = exports.mdFlex = exports.smFlex = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  box-sizing: border-box;\n  padding-right: 15px;\n  padding-left: 15px;\n  flex: 0 0 100%;\n  overflow: hidden;\n  word-break: break-all;\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  ",
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
    ";\n  ",
    ";\n  ",
    ";\n  ",
    ";\n  ",
    ";\n"
  ],
  [
    "\n  box-sizing: border-box;\n  padding-right: 15px;\n  padding-left: 15px;\n  flex: 0 0 100%;\n  overflow: hidden;\n  word-break: break-all;\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  @media (min-width: ",
    ") {\n    flex: ",
    ";\n  }\n  ",
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
    ";\n  ",
    ";\n  ",
    ";\n  ",
    ";\n  ",
    ";\n"
  ]
);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require("../../config");

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var calcFlex = function calcFlex(size) {
  switch (size) {
    case 1:
      return "0 0 8.333333%";
    case 2:
      return "0 0 16.666667%";
    case 3:
      return "0 0 25%";
    case 4:
      return "0 0 33.333333%";
    case 5:
      return "0 0 41.666667%";
    case 6:
      return "0 0 50%";
    case 7:
      return "0 0 58.333333%";
    case 8:
      return "0 0 66.666667%";
    case 9:
      return "0 0 75%";
    case 10:
      return "0 0 83.333333%";
    case 11:
      return "0 0 91.666667%";
    default:
    case 12:
      return "0 0 100%";
  }
};

var smFlex = (exports.smFlex = function smFlex(props) {
  if (props.xl || props.md || props.lg) {
    return "0 0 100%";
  }

  if (props.sm) {
    return calcFlex(props.sm);
  }

  return "0 0 100%";
});

var mdFlex = (exports.mdFlex = function mdFlex(props) {
  if (props.lg || props.xl) {
    return "0 0 100%";
  }

  if (props.sm || props.md) {
    return calcFlex(props.sm || props.md);
  }

  return "0 0 100%";
});

var lgFlex = (exports.lgFlex = function lgFlex(props) {
  if (props.xl) {
    return "0 0 100%";
  }

  if (props.sm || props.md || props.lg) {
    return calcFlex(props.sm || props.md || props.lg);
  }

  return "0 0 100%";
});

var Column = (exports.Column = _styledComponents2.default.div(
  _templateObject,
  _config.screenSize.sm,
  function(props) {
    return smFlex(props);
  },
  _config.screenSize.md,
  function(props) {
    return mdFlex(props);
  },
  _config.screenSize.lg,
  function(props) {
    return lgFlex(props);
  },
  _config.screenSize.xl,
  function(props) {
    return calcFlex(props.sm || props.md || props.lg || props.xl);
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
  _styledSystem.borders,
  _styledSystem.alignItems,
  _styledSystem.alignContent,
  _styledSystem.justifyContent,
  _styledSystem.flexWrap,
  _styledSystem.flexBasis,
  _styledSystem.flexDirection,
  _styledSystem.flex,
  _styledSystem.justifySelf,
  _styledSystem.alignSelf
));
