"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    background-color: #e9ecef;\n    opacity: 1;\n    &:focus {\n      background-color: #e9ecef;\n      opacity: 1;\n    }\n  "
    ],
    [
      "\n    background-color: #e9ecef;\n    opacity: 1;\n    &:focus {\n      background-color: #e9ecef;\n      opacity: 1;\n    }\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    border-color: #28a745;\n    &:focus {\n      border-color: #28a745;\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n    }\n  "
    ],
    [
      "\n    border-color: #28a745;\n    &:focus {\n      border-color: #28a745;\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n    }\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n    border-color: #dc3545;\n    &:focus {\n      border-color: #dc3545;\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n    }\n  "
    ],
    [
      "\n    border-color: #dc3545;\n    &:focus {\n      border-color: #dc3545;\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n    }\n  "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n    @media (min-width: ",
      ") {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n    }\n  "
    ],
    [
      "\n    @media (min-width: ",
      ") {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n    }\n  "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n        padding-right: 0;\n        padding-left: 0;\n        padding: 0.25rem 0.5rem;\n        font-size: 0.875rem;\n        line-height: 1.5;\n        border-radius: 0.2rem;\n        height: calc(1.8125rem + 2px);\n      "
    ],
    [
      "\n        padding-right: 0;\n        padding-left: 0;\n        padding: 0.25rem 0.5rem;\n        font-size: 0.875rem;\n        line-height: 1.5;\n        border-radius: 0.2rem;\n        height: calc(1.8125rem + 2px);\n      "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n      border-radius: 0.2rem;\n    "
    ],
    [
      "\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.5;\n      border-radius: 0.2rem;\n    "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      "\n        padding-right: 0;\n        padding-left: 0;\n        padding: 0.5rem 1rem;\n        font-size: 1.25rem;\n        line-height: 1.5;\n        border-radius: 0.3rem;\n        height: calc(2.875rem + 2px);\n      "
    ],
    [
      "\n        padding-right: 0;\n        padding-left: 0;\n        padding: 0.5rem 1rem;\n        font-size: 1.25rem;\n        line-height: 1.5;\n        border-radius: 0.3rem;\n        height: calc(2.875rem + 2px);\n      "
    ]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n      border-radius: 0.3rem;\n    "
    ],
    [
      "\n      padding-right: 0;\n      padding-left: 0;\n      padding: 0.5rem 1rem;\n      font-size: 1.25rem;\n      line-height: 1.5;\n      border-radius: 0.3rem;\n    "
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      "\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  box-sizing: border-box;\n  &::-ms-expand {\n    background-color: transparent;\n    border: 0;\n  }\n  &:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n  &::placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n  ",
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
      "\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  box-sizing: border-box;\n  &::-ms-expand {\n    background-color: transparent;\n    border: 0;\n  }\n  &:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  }\n  &::placeholder {\n    color: #6c757d;\n    opacity: 1;\n  }\n  ",
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
  ),
  _templateObject10 = _taggedTemplateLiteral(
    ["\n    height: calc(2.25rem + 2px);\n  "],
    ["\n    height: calc(2.25rem + 2px);\n  "]
  ),
  _templateObject11 = _taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]),
  _templateObject12 = _taggedTemplateLiteral(
    [
      "\n  ",
      ";\n  ",
      ";\n  &:focus::-ms-value {\n    color: #495057;\n    background-color: #fff;\n  }\n"
    ],
    [
      "\n  ",
      ";\n  ",
      ";\n  &:focus::-ms-value {\n    color: #495057;\n    background-color: #fff;\n  }\n"
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

var formControlDisabledReadonly = function formControlDisabledReadonly(props) {
  return (
    (props.disabled || props.readonly) &&
    (0, _styledComponents.css)(_templateObject)
  );
};

var formControlValid = function formControlValid(props) {
  return props.valid && (0, _styledComponents.css)(_templateObject2);
};

var formControlInvalid = function formControlInvalid(props) {
  return props.invalid && (0, _styledComponents.css)(_templateObject3);
};

var formControlFormInline = function formControlFormInline(props) {
  return (
    props.formInline &&
    (0, _styledComponents.css)(_templateObject4, _styledConfig.screenSize.sm)
  );
};

var formControlSmall = function formControlSmall(props) {
  if (props.sm) {
    if (!props.multiple && props.select) {
      return (0, _styledComponents.css)(_templateObject5);
    }

    return (0, _styledComponents.css)(_templateObject6);
  }

  return "";
};

var formControlLarge = function formControlLarge(props) {
  if (props.lg) {
    if (!props.multiple && props.select) {
      return (0, _styledComponents.css)(_templateObject7);
    }

    return (0, _styledComponents.css)(_templateObject8);
  }

  return "";
};

var formControlStyle = function formControlStyle() {
  return (0, _styledComponents.css)(
    _templateObject9,
    formControlDisabledReadonly,
    formControlInvalid,
    formControlValid,
    formControlFormInline,
    formControlSmall,
    formControlLarge,
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

var formControlSelect = function formControlSelect(props) {
  return !props.multiple && (0, _styledComponents.css)(_templateObject10);
};

var FormControlInput = (0, _styledComponents2.default)(
  _styledBaseComponents.Input
)(_templateObject11, formControlStyle);

var FormControlTextarea = (0, _styledComponents2.default)(
  _styledBaseComponents.Textarea
)(_templateObject11, formControlStyle);

var FormControlSelect = (0, _styledComponents2.default)(
  _styledBaseComponents.Select
)(_templateObject12, formControlSelect, formControlStyle);

var FormControl = (exports.FormControl = function FormControl(props) {
  if (props.textarea) {
    return new FormControlTextarea(props);
  } else if (props.select) {
    return new FormControlSelect(props);
  }

  return new FormControlInput(props);
});
