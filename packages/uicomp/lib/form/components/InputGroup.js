"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    & > div > span {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n    };\n    & > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n      border-radius: 0.2rem;\n    };\n  "
    ],
    [
      "\n    & > div > span {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n    };\n    & > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n      border-radius: 0.2rem;\n    };\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    & > div > span {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n    };\n    & > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n      border-radius: 0.3rem;\n    };\n  "
    ],
    [
      "\n    & > div > span {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n    };\n    & > input {\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n      border-radius: 0.3rem;\n    };\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n  & > input, \n  & > textarea, \n  & > select {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0;\n    &:not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    };\n    &:not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    };\n  };\n  ",
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
      "\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n  & > input, \n  & > textarea, \n  & > select {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0;\n    &:not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    };\n    &:not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    };\n  };\n  ",
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var inputGroupSmall = function inputGroupSmall(props) {
  return props.sm && (0, _styledComponents.css)(_templateObject);
};

var inputGroupLarge = function inputGroupLarge(props) {
  return props.lg && (0, _styledComponents.css)(_templateObject2);
};

var InputGroup = (exports.InputGroup = _styledComponents2.default.div(
  _templateObject3,
  inputGroupSmall,
  inputGroupLarge,
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
