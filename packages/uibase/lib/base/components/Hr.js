"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hr = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n"
  ],
  [
    "\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n"
  ]
);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var Hr = (exports.Hr = _styledComponents2.default.hr(_templateObject));
