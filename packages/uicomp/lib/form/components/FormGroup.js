"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormGroup = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    @media (min-width: ",
      ") {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0;\n    };\n  "
    ],
    [
      "\n    @media (min-width: ",
      ") {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0;\n    };\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -5px;\n    margin-left: -5px;\n    & > div > label {\n      margin-bottom: 0;\n    };\n  "
    ],
    [
      "\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -5px;\n    margin-left: -5px;\n    & > div > label {\n      margin-bottom: 0;\n    };\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n    margin-bottom: 0;\n  "],
    ["\n    margin-bottom: 0;\n  "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    ["\n    align-items: center;\n    justify-content: center;\n  "],
    ["\n    align-items: center;\n    justify-content: center;\n  "]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n    & > label, & > div > label {\n      padding-top: calc(0.25rem + 1px);\n      padding-bottom: calc(0.25rem + 1px);\n      font-size: 0.875rem;\n      line-height: 1.5;\n    };\n    & > input, & > div > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n      border-radius: 0.2rem;\n    };\n  "
    ],
    [
      "\n    & > label, & > div > label {\n      padding-top: calc(0.25rem + 1px);\n      padding-bottom: calc(0.25rem + 1px);\n      font-size: 0.875rem;\n      line-height: 1.5;\n    };\n    & > input, & > div > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n      border-radius: 0.2rem;\n    };\n  "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n    & > label, & > div > label {\n      padding-top: calc(0.5rem + 1px);\n      padding-bottom: calc(0.5rem + 1px);\n      font-size: 1.25rem;\n      line-height: 1.5;\n    };\n    & > input, & > div > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n      border-radius: 0.3rem;\n    };\n  "
    ],
    [
      "\n    & > label, & > div > label {\n      padding-top: calc(0.5rem + 1px);\n      padding-bottom: calc(0.5rem + 1px);\n      font-size: 1.25rem;\n      line-height: 1.5;\n    };\n    & > input, & > div > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n      border-radius: 0.3rem;\n    };\n  "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      "\n  margin-bottom: 1rem;\n  box-sizing: border-box;\n  ",
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
      "\n  margin-bottom: 1rem;\n  box-sizing: border-box;\n  ",
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

var _styledConfig = require("styled-config");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var formGroupFormInline = function formGroupFormInline(props) {
  return (
    props.formInline &&
    (0, _styledComponents.css)(_templateObject, _styledConfig.screenSize.sm)
  );
};

var formGroupRow = function formGroupRow(props) {
  return props.row && (0, _styledComponents.css)(_templateObject2);
};

var formGroupNoMarginBottom = function formGroupNoMarginBottom(props) {
  return props.nomb && (0, _styledComponents.css)(_templateObject3);
};

var formGroupAlignItemsJustifyContentCenter = function formGroupAlignItemsJustifyContentCenter(
  props
) {
  return props.justify && (0, _styledComponents.css)(_templateObject4);
};

var formGroupSmall = function formGroupSmall(props) {
  return props.sm && (0, _styledComponents.css)(_templateObject5);
};

var formGroupLarge = function formGroupLarge(props) {
  return props.lg && (0, _styledComponents.css)(_templateObject6);
};

var FormGroup = (exports.FormGroup = _styledComponents2.default.div(
  _templateObject7,
  formGroupFormInline,
  formGroupRow,
  formGroupNoMarginBottom,
  formGroupAlignItemsJustifyContentCenter,
  formGroupSmall,
  formGroupLarge,
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
