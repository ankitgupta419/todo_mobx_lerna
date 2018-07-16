"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    justify-content: center !important;\n  "],
    ["\n    justify-content: center !important;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n    justify-content: flex-end !important;\n  "],
    ["\n    justify-content: flex-end !important;\n  "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n    justify-content: flex-start !important;\n  "],
    ["\n    justify-content: flex-start !important;\n  "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    ["\n    flex-direction: column !important;\n  "],
    ["\n    flex-direction: column !important;\n  "]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    ["\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  "],
    ["\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  "]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    ["\n    flex: 1 1 auto;\n    text-align: center;\n  "],
    ["\n    flex: 1 1 auto;\n    text-align: center;\n  "]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      "\n    border-bottom: 1px solid #dee2e6;\n    & > a {\n      margin-bottom: -1px;\n    }\n  "
    ],
    [
      "\n    border-bottom: 1px solid #dee2e6;\n    & > a {\n      margin-bottom: -1px;\n    }\n  "
    ]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n      @media (max-width: ",
      ") {\n        display: flex;\n        flex-basis: auto;\n        flex-direction: column;\n        & > a {\n          padding-right: 0.5rem;\n          padding-left: 0.5rem;\n          flex: 1;\n          text-align: left;\n        }\n      }\n    "
    ],
    [
      "\n      @media (max-width: ",
      ") {\n        display: flex;\n        flex-basis: auto;\n        flex-direction: column;\n        & > a {\n          padding-right: 0.5rem;\n          padding-left: 0.5rem;\n          flex: 1;\n          text-align: left;\n        }\n      }\n    "
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      "\n      @media (max-width: ",
      ") {\n        display: none;\n        flex-basis: auto;\n        flex-direction: column;\n        & > a {\n          padding-right: 0.5rem;\n          padding-left: 0.5rem;\n          flex: 1;\n          text-align: left;\n        }\n      }\n    "
    ],
    [
      "\n      @media (max-width: ",
      ") {\n        display: none;\n        flex-basis: auto;\n        flex-direction: column;\n        & > a {\n          padding-right: 0.5rem;\n          padding-left: 0.5rem;\n          flex: 1;\n          text-align: left;\n        }\n      }\n    "
    ]
  ),
  _templateObject10 = _taggedTemplateLiteral(
    [
      "\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  & > a {\n    text-decoration: none;\n    ",
      ";\n    ",
      ";\n  }\n  &:last-child {\n    flex: 1;\n  }\n  ",
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
      "\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  & > a {\n    text-decoration: none;\n    ",
      ";\n    ",
      ";\n  }\n  &:last-child {\n    flex: 1;\n  }\n  ",
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

var _styledSystem = require("styled-system");

var _styledBaseComponents = require("styled-base-components");

var _styledConfig = require("styled-config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var navJustifyContentCenter = function navJustifyContentCenter(props) {
  return props.center && (0, _styledComponents.css)(_templateObject);
};

var navJustifyContentEnd = function navJustifyContentEnd(props) {
  return props.end && (0, _styledComponents.css)(_templateObject2);
};

var navJustifyContentStart = function navJustifyContentStart(props) {
  return props.start && (0, _styledComponents.css)(_templateObject3);
};

var navFlexDirectionColumn = function navFlexDirectionColumn(props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject4);
};

var navJustified = function navJustified(props) {
  return props.justified && (0, _styledComponents.css)(_templateObject5);
};

var navFill = function navFill(props) {
  return props.fill && (0, _styledComponents.css)(_templateObject6);
};

var navTabs = function navTabs(props) {
  return props.tabs && (0, _styledComponents.css)(_templateObject7);
};

/* istanbul ignore next */
var navCollapse = function navCollapse(props) {
  var thisScreenSize = "";

  if (props.expandSm) {
    thisScreenSize = _styledConfig.screenSize.sm;
  } else if (props.expandMd) {
    thisScreenSize = _styledConfig.screenSize.md;
  } else if (props.expandLg) {
    thisScreenSize = _styledConfig.screenSize.lg;
  } else if (props.expandXl) {
    thisScreenSize = _styledConfig.screenSize.xl;
  }

  if (
    (props.expandSm || props.expandMd || props.expandLg || props.expandXl) &&
    props.collapse &&
    !props.hidden
  ) {
    return (0, _styledComponents.css)(_templateObject8, thisScreenSize);
  } else if (
    (props.expandSm || props.expandMd || props.expandLg || props.expandXl) &&
    props.collapse &&
    props.hidden
  ) {
    return (0, _styledComponents.css)(_templateObject9, thisScreenSize);
  }

  return "";
};

var Nav = (exports.Nav = (0, _styledComponents2.default)(
  _styledBaseComponents.Nav
)(
  _templateObject10,
  navJustified,
  navFill,
  navJustifyContentStart,
  navJustifyContentCenter,
  navJustifyContentEnd,
  navFlexDirectionColumn,
  navTabs,
  navCollapse,
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
