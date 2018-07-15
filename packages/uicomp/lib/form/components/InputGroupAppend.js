"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroupAppend = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  display: flex;\n  margin-left: -1px;\n  & > button {\n    position: relative;\n    z-index: 2;\n  };\n  & > span,\n  & > button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    &:not(:last-child) {\n      margin-right: -1px;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    };\n  };\n  ",
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
    "\n  display: flex;\n  margin-left: -1px;\n  & > button {\n    position: relative;\n    z-index: 2;\n  };\n  & > span,\n  & > button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    &:not(:last-child) {\n      margin-right: -1px;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    };\n  };\n  ",
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

var InputGroupAppend = (exports.InputGroupAppend = _styledComponents2.default.div(
  _templateObject,
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
