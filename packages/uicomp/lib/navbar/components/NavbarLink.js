"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarLink = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n        color: rgba(0, 0, 0, 0.9);\n        &:hover,\n        &:focus {\n          color: rgba(0, 0, 0, 0.9);\n        };\n      "
    ],
    [
      "\n        color: rgba(0, 0, 0, 0.9);\n        &:hover,\n        &:focus {\n          color: rgba(0, 0, 0, 0.9);\n        };\n      "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n        color: rgba(0, 0, 0, 0.3);\n        &:hover,\n        &:focus {\n          color: rgba(0, 0, 0, 0.3);\n        };\n      "
    ],
    [
      "\n        color: rgba(0, 0, 0, 0.3);\n        &:hover,\n        &:focus {\n          color: rgba(0, 0, 0, 0.3);\n        };\n      "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n      color: rgba(0, 0, 0, 0.5);\n      &:hover,\n      &:focus {\n        color: rgba(0, 0, 0, 0.7);\n      };\n    "
    ],
    [
      "\n      color: rgba(0, 0, 0, 0.5);\n      &:hover,\n      &:focus {\n        color: rgba(0, 0, 0, 0.7);\n      };\n    "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n        color: rgba(255, 255, 255, 0.9);\n        &:hover,\n        &:focus {\n          color: rgba(255, 255, 255, 0.9);\n        };\n      "
    ],
    [
      "\n        color: rgba(255, 255, 255, 0.9);\n        &:hover,\n        &:focus {\n          color: rgba(255, 255, 255, 0.9);\n        };\n      "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n        color: rgba(255, 255, 255, 0.25);\n        &:hover,\n        &:focus {\n          color: rgba(255, 255, 255, 0.25);\n        };\n      "
    ],
    [
      "\n        color: rgba(255, 255, 255, 0.25);\n        &:hover,\n        &:focus {\n          color: rgba(255, 255, 255, 0.25);\n        };\n      "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n      color: rgba(255, 255, 255, 0.5);\n      &:hover,\n      &:focus {\n        color: rgba(255, 255, 255, 0.75);\n      };\n    "
    ],
    [
      "\n      color: rgba(255, 255, 255, 0.5);\n      &:hover,\n      &:focus {\n        color: rgba(255, 255, 255, 0.75);\n      };\n    "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      "\n    display: inline-block;\n    padding-top: 0.3125rem;\n    padding-bottom: 0.3125rem;\n    font-size: 1.25rem;\n    line-height: inherit;\n    white-space: nowrap;\n  "
    ],
    [
      "\n    display: inline-block;\n    padding-top: 0.3125rem;\n    padding-bottom: 0.3125rem;\n    font-size: 1.25rem;\n    line-height: inherit;\n    white-space: nowrap;\n  "
    ]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n  ",
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
      "\n  ",
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

var _styledNavComponent = require("styled-nav-component");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var navbarLinkLight = function navbarLinkLight(props) {
  if (props.light) {
    if (props.active) {
      return (0, _styledComponents.css)(_templateObject);
    } else if (props.disabled) {
      return (0, _styledComponents.css)(_templateObject2);
    }

    return (0, _styledComponents.css)(_templateObject3);
  }

  return "";
};

var navbarLinkDark = function navbarLinkDark(props) {
  if (props.dark) {
    if (props.active) {
      return (0, _styledComponents.css)(_templateObject4);
    } else if (props.disabled) {
      return (0, _styledComponents.css)(_templateObject5);
    }

    return (0, _styledComponents.css)(_templateObject6);
  }

  return "";
};

var navbarLinkBrand = function navbarLinkBrand(props) {
  return props.brand && (0, _styledComponents.css)(_templateObject7);
};

var NavbarLink = (exports.NavbarLink = (0, _styledComponents2.default)(
  _styledNavComponent.NavLink
)(
  _templateObject8,
  navbarLinkBrand,
  navbarLinkLight,
  navbarLinkDark,
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
