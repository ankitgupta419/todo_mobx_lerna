"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    & > button {\n      width: 100%;\n      &:not(:last-child) {\n        border-bottom-right-radius: 0;\n        border-bottom-left-radius: 0;\n      };\n      &:not(:first-child) {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n      };\n    };\n  "
    ],
    [
      "\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    & > button {\n      width: 100%;\n      &:not(:last-child) {\n        border-bottom-right-radius: 0;\n        border-bottom-left-radius: 0;\n      };\n      &:not(:first-child) {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n      };\n    };\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    & > button {\n      &:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      };\n      &:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      };\n    };\n  "
    ],
    [
      "\n    & > button {\n      &:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      };\n      &:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      };\n    };\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  & > button {\n    line-height: 1.5;\n    position: relative;\n    flex: 0 1 auto;\n    &:hover {\n      z-index: 1;\n    };\n    ",
      ";\n    ",
      ";\n  };\n  ",
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
      "\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  & > button {\n    line-height: 1.5;\n    position: relative;\n    flex: 0 1 auto;\n    &:hover {\n      z-index: 1;\n    };\n    ",
      ";\n    ",
      ";\n  };\n  ",
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

var _Button = require("./Button");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var buttonGroupVertical = function buttonGroupVertical(props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject);
};

var buttonGroupNormal = function buttonGroupNormal(props) {
  return !props.vertical && (0, _styledComponents.css)(_templateObject2);
};

var ButtonGroup = (exports.ButtonGroup = _styledComponents2.default.div(
  _templateObject3,
  _Button.buttonSmall,
  _Button.buttonLarge,
  buttonGroupVertical,
  buttonGroupNormal,
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
