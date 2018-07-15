"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverArrow = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    width: 100%;\n    bottom: calc((0.5rem + 1px) * -1);\n    left: 42%;\n    &::before,\n    &::after {\n      border-width: 0.5rem 0.5rem 0 0.5rem;\n    };\n    &::before {\n      bottom: 0;\n      border-top-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      bottom: 1px;\n      border-top-color: #fff;\n    };\n  "
    ],
    [
      "\n    width: 100%;\n    bottom: calc((0.5rem + 1px) * -1);\n    left: 42%;\n    &::before,\n    &::after {\n      border-width: 0.5rem 0.5rem 0 0.5rem;\n    };\n    &::before {\n      bottom: 0;\n      border-top-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      bottom: 1px;\n      border-top-color: #fff;\n    };\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 100%;\n    margin: 0.3rem 0;\n    top: 42%;\n    &::before,\n    &::after {\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n    };\n    &::before {\n      left: 0;\n      border-right-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      left: 1px;\n      border-right-color: #fff;\n    };\n  "
    ],
    [
      "\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 100%;\n    margin: 0.3rem 0;\n    top: 42%;\n    &::before,\n    &::after {\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n    };\n    &::before {\n      left: 0;\n      border-right-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      left: 1px;\n      border-right-color: #fff;\n    };\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n    width: 100%;\n    top: calc((0.5rem + 1px) * -1);\n    left: 42%;\n    &::before,\n    &::after {\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n    };\n    &::before {\n      top: 0;\n      border-bottom-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      top: 1px;\n      border-bottom-color: #fff;\n    };\n  "
    ],
    [
      "\n    width: 100%;\n    top: calc((0.5rem + 1px) * -1);\n    left: 42%;\n    &::before,\n    &::after {\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n    };\n    &::before {\n      top: 0;\n      border-bottom-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      top: 1px;\n      border-bottom-color: #fff;\n    };\n  "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 100%;\n    margin: 0.3rem 0;\n    top: 42%;\n    &::before,\n    &::after {\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n    };\n    &::before {\n      right: 0;\n      border-left-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      right: 1px;\n      border-left-color: #fff;\n    };\n  "
    ],
    [
      "\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 100%;\n    margin: 0.3rem 0;\n    top: 42%;\n    &::before,\n    &::after {\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n    };\n    &::before {\n      right: 0;\n      border-left-color: rgba(0, 0, 0, 0.25);\n    };\n    &::after {\n      right: 1px;\n      border-left-color: #fff;\n    };\n  "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      '\n  position: absolute;\n  display: block;\n  width: 1rem;\n  margin: 0 0.3rem;\n  &::before,\n  &::after {\n    position: absolute;\n    display: block;\n    content: "";\n    border-color: transparent;\n    border-style: solid;\n  };\n  ',
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
      '\n  position: absolute;\n  display: block;\n  width: 1rem;\n  margin: 0 0.3rem;\n  &::before,\n  &::after {\n    position: absolute;\n    display: block;\n    content: "";\n    border-color: transparent;\n    border-style: solid;\n  };\n  ',
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var popoverArrowTop = function popoverArrowTop(props) {
  return props.top && (0, _styledComponents.css)(_templateObject);
};

var popoverArrowRight = function popoverArrowRight(props) {
  return props.right && (0, _styledComponents.css)(_templateObject2);
};

var popoverArrowBottom = function popoverArrowBottom(props) {
  return props.bottom && (0, _styledComponents.css)(_templateObject3);
};

var popoverArrowLeft = function popoverArrowLeft(props) {
  return props.left && (0, _styledComponents.css)(_templateObject4);
};

var PopoverArrow = (exports.PopoverArrow = _styledComponents2.default.div(
  _templateObject5,
  popoverArrowTop,
  popoverArrowRight,
  popoverArrowBottom,
  popoverArrowLeft,
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
