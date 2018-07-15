"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  overflow: visible;\n  height: 30px;\n  width: 200px;\n  padding: 5px;\n"
  ],
  [
    "\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  overflow: visible;\n  height: 30px;\n  width: 200px;\n  padding: 5px;\n"
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

var Input = (exports.Input = _styledComponents2.default.input(_templateObject));
