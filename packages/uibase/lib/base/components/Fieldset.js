"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n"],
  ["\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n"]
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

var Fieldset = (exports.Fieldset = _styledComponents2.default.fieldset(
  _templateObject
));
