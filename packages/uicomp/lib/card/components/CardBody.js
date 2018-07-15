"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardBody = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  & > a {\n    &:hover {\n      text-decoration: none;\n    };\n    & + a {\n      margin-left: 1.25rem;\n    };\n  };\n  ",
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
    "\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  & > a {\n    &:hover {\n      text-decoration: none;\n    };\n    & + a {\n      margin-left: 1.25rem;\n    };\n  };\n  ",
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

var CardBody = (exports.CardBody = _styledComponents2.default.div(
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
