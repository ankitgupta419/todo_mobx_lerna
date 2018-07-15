"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    '\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  box-sizing: border-box;\n  @media (min-width: ',
    ") {\n    max-width: ",
    ";\n    box-sizing: border-box;\n  };\n  @media (min-width: ",
    ") {\n    max-width: ",
    ";\n  };\n  @media (min-width: ",
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
    '\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  box-sizing: border-box;\n  @media (min-width: ',
    ") {\n    max-width: ",
    ";\n    box-sizing: border-box;\n  };\n  @media (min-width: ",
    ") {\n    max-width: ",
    ";\n  };\n  @media (min-width: ",
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

var Container = (exports.Container = _styledComponents2.default.div(
  _templateObject,
  _config.screenSize.sm,
  function(props) {
    return props.fluid ? "100%" : "540px";
  },
  _config.screenSize.md,
  function(props) {
    return props.fluid ? "100%" : "720px";
  },
  _config.screenSize.lg,
  function(props) {
    return props.fluid ? "100%" : "960px";
  },
  _config.screenSize.xl,
  function(props) {
    return props.fluid ? "100%" : "1140px";
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
