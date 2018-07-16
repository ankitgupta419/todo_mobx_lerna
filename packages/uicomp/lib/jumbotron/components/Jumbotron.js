"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jumbotron = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    padding-right: 0;\n    padding-left: 0;\n    border-radius: 0;\n  "
    ],
    ["\n    padding-right: 0;\n    padding-left: 0;\n    border-radius: 0;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n  @media (min-width: ",
      ") {\n    padding: 4rem 2rem;\n  }\n  ",
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
      "\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n  @media (min-width: ",
      ") {\n    padding: 4rem 2rem;\n  }\n  ",
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

var _styledConfig = require("styled-config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var jumbotronFluid = function jumbotronFluid(props) {
  return props.fluid && (0, _styledComponents.css)(_templateObject);
};

var Jumbotron = (exports.Jumbotron = _styledComponents2.default.div(
  _templateObject2,
  _styledConfig.screenSize.sm,
  jumbotronFluid,
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
