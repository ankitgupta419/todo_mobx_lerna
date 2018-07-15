"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    color: #6c757d;\n    &:hover,\n    &:focus {\n      color: #6c757d;\n    };\n  "
    ],
    [
      "\n    color: #6c757d;\n    &:hover,\n    &:focus {\n      color: #6c757d;\n    };\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n        color: #495057;\n        border-color: #e9ecef #e9ecef #fff;\n        &:hover,\n        &:focus {\n          color: #495057;\n        };\n      "
    ],
    [
      "\n        color: #495057;\n        border-color: #e9ecef #e9ecef #fff;\n        &:hover,\n        &:focus {\n          color: #495057;\n        };\n      "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n        border-color: transparent;\n      "],
    ["\n        border-color: transparent;\n      "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n      &:hover,\n      &:focus {\n        border-color: #e9ecef #e9ecef #dee2e6;\n      };\n    "
    ],
    [
      "\n      &:hover,\n      &:focus {\n        border-color: #e9ecef #e9ecef #dee2e6;\n      };\n    "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n    border-radius: 0.25rem;\n    color: #fff;\n    background-color: #007bff;\n    &:hover,\n    &:focus {\n      color: #fff;\n    };\n  "
    ],
    [
      "\n    border-radius: 0.25rem;\n    color: #fff;\n    background-color: #007bff;\n    &:hover,\n    &:focus {\n      color: #fff;\n    };\n  "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n  display: block;\n  padding: 0.5rem;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  color: #007bff;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: #0056b3;\n  };\n  ",
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
      "\n  display: block;\n  padding: 0.5rem;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  color: #007bff;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: #0056b3;\n  };\n  ",
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var navLinkDisabled = function navLinkDisabled(props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject);
};

var navLinkTabs = function navLinkTabs(props) {
  if (props.tabs) {
    if (props.active) {
      return (0, _styledComponents.css)(_templateObject2);
    } else if (props.disabled) {
      return (0, _styledComponents.css)(_templateObject3);
    }

    return (0, _styledComponents.css)(_templateObject4);
  }

  return "";
};

var navLinkPills = function navLinkPills(props) {
  return (
    props.pills && props.active && (0, _styledComponents.css)(_templateObject5)
  );
};

var NavLink = (exports.NavLink = (0, _styledComponents2.default)(
  _styledBaseComponents.A
)(
  _templateObject6,
  navLinkDisabled,
  navLinkTabs,
  navLinkPills,
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
