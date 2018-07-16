"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverHeader = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      '\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: "";\n    border-bottom: 1px solid #f7f7f7;\n  '
    ],
    [
      '\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: "";\n    border-bottom: 1px solid #f7f7f7;\n  '
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    padding: 0.5rem 0.75rem;\n    margin-bottom: 0;\n    font-size: 1rem;\n    color: inherit;\n    background-color: #f7f7f7;\n    border-bottom: 1px solid #ebebeb;\n    border-top-left-radius: calc(0.3rem - 1px);\n    border-top-right-radius: calc(0.3rem - 1px);\n    ",
      ";\n    &:empty {\n      display: none;\n    }\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n  "
    ],
    [
      "\n    padding: 0.5rem 0.75rem;\n    margin-bottom: 0;\n    font-size: 1rem;\n    color: inherit;\n    background-color: #f7f7f7;\n    border-bottom: 1px solid #ebebeb;\n    border-top-left-radius: calc(0.3rem - 1px);\n    border-top-right-radius: calc(0.3rem - 1px);\n    ",
      ";\n    &:empty {\n      display: none;\n    }\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledBaseComponents = require("styled-base-components");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var popoverHeaderBottom = function popoverHeaderBottom(props) {
  return props.bottom && (0, _styledComponents.css)(_templateObject);
};

var popoverHeaderStyle = function popoverHeaderStyle() {
  return (0, _styledComponents.css)(
    _templateObject2,
    popoverHeaderBottom,
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
  );
};

var PopoverHeaderH1 = (0, _styledComponents2.default)(_styledBaseComponents.H1)(
  _templateObject3,
  popoverHeaderStyle
);

var PopoverHeaderH2 = (0, _styledComponents2.default)(_styledBaseComponents.H2)(
  _templateObject3,
  popoverHeaderStyle
);

var PopoverHeaderH3 = (0, _styledComponents2.default)(_styledBaseComponents.H3)(
  _templateObject3,
  popoverHeaderStyle
);

var PopoverHeaderH4 = (0, _styledComponents2.default)(_styledBaseComponents.H4)(
  _templateObject3,
  popoverHeaderStyle
);

var PopoverHeaderH5 = (0, _styledComponents2.default)(_styledBaseComponents.H5)(
  _templateObject3,
  popoverHeaderStyle
);

var PopoverHeaderH6 = (0, _styledComponents2.default)(_styledBaseComponents.H6)(
  _templateObject3,
  popoverHeaderStyle
);

var PopoverHeader = (exports.PopoverHeader = function PopoverHeader(props) {
  if (props.h1) {
    return new PopoverHeaderH1(props);
  } else if (props.h2) {
    return new PopoverHeaderH2(props);
  } else if (props.h3) {
    return new PopoverHeaderH3(props);
  } else if (props.h4) {
    return new PopoverHeaderH4(props);
  } else if (props.h5) {
    return new PopoverHeaderH5(props);
  } else if (props.h6) {
    return new PopoverHeaderH6(props);
  }

  return new PopoverHeaderH4(props);
});
