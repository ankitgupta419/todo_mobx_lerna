"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    & th,\n    & td {\n      padding: 0.3rem;\n    }\n  "],
    ["\n    & th,\n    & td {\n      padding: 0.3rem;\n    }\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    border: 1px solid #dee2e6;\n    & th,\n    & td {\n      border: 1px solid #dee2e6;\n    }\n    & thead th,\n    & thead td {\n      border-bottom-width: 2px;\n    }\n  "
    ],
    [
      "\n    border: 1px solid #dee2e6;\n    & th,\n    & td {\n      border: 1px solid #dee2e6;\n    }\n    & thead th,\n    & thead td {\n      border-bottom-width: 2px;\n    }\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:nth-of-type(odd) {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  "
    ],
    [
      "\n    & tbody tr:nth-of-type(odd) {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n  "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n  "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n    & thead th {\n      color: #fff;\n      background-color: #212529;\n      border-color: #32383e;\n    }\n  "
    ],
    [
      "\n    & thead th {\n      color: #fff;\n      background-color: #212529;\n      border-color: #32383e;\n    }\n  "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n    & thead th {\n      color: #495057;\n      background-color: #e9ecef;\n      border-color: #dee2e6;\n    }\n  "
    ],
    [
      "\n    & thead th {\n      color: #495057;\n      background-color: #e9ecef;\n      border-color: #dee2e6;\n    }\n  "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    ["\n    border: 0;\n  "],
    ["\n    border: 0;\n  "]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:nth-of-type(odd) {\n      background-color: rgba(255, 255, 255, 0.05);\n    }\n  "
    ],
    [
      "\n    & tbody tr:nth-of-type(odd) {\n      background-color: rgba(255, 255, 255, 0.05);\n    }\n  "
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: rgba(255, 255, 255, 0.075);\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: rgba(255, 255, 255, 0.075);\n    }\n  "
    ]
  ),
  _templateObject10 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #212529;\n    & th,\n    & td,\n    & thead th {\n      border-color: #32383e;\n    }\n    ",
      ";\n    ",
      ";\n    ",
      ";\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #212529;\n    & th,\n    & td,\n    & thead th {\n      border-color: #32383e;\n    }\n    ",
      ";\n    ",
      ";\n    ",
      ";\n  "
    ]
  ),
  _templateObject11 = _taggedTemplateLiteral(
    [
      "\n    @media (max-width: 575.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ],
    [
      "\n    @media (max-width: 575.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ]
  ),
  _templateObject12 = _taggedTemplateLiteral(
    [
      "\n    @media (max-width: 767.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ],
    [
      "\n    @media (max-width: 767.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ]
  ),
  _templateObject13 = _taggedTemplateLiteral(
    [
      "\n    @media (max-width: 991.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ],
    [
      "\n    @media (max-width: 991.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ]
  ),
  _templateObject14 = _taggedTemplateLiteral(
    [
      "\n    @media (max-width: 1199.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ],
    [
      "\n    @media (max-width: 1199.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ",
      ";\n    }\n  "
    ]
  ),
  _templateObject15 = _taggedTemplateLiteral(
    [
      "\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    ",
      ";\n  "
    ],
    [
      "\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    ",
      ";\n  "
    ]
  ),
  _templateObject16 = _taggedTemplateLiteral(
    [
      "\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  & th,\n  & td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6;\n  }\n  & thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6;\n  }\n  & tbody + tbody {\n    border-top: 2px solid #dee2e6;\n  }\n  & + & {\n    background-color: #fff;\n  }\n  ",
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
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n"
    ],
    [
      "\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  & th,\n  & td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6;\n  }\n  & thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6;\n  }\n  & tbody + tbody {\n    border-top: 2px solid #dee2e6;\n  }\n  & + & {\n    background-color: #fff;\n  }\n  ",
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

var tableSmall = function tableSmall(props) {
  return props.sm && (0, _styledComponents.css)(_templateObject);
};

var tableBordered = function tableBordered(props) {
  return props.bordered && (0, _styledComponents.css)(_templateObject2);
};

var tableStriped = function tableStriped(props) {
  return props.striped && (0, _styledComponents.css)(_templateObject3);
};

var tableHover = function tableHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject4);
};

var tableHeadDark = function tableHeadDark(props) {
  return props.theadDark && (0, _styledComponents.css)(_templateObject5);
};

var tableHeadLight = function tableHeadLight(props) {
  return props.theadLight && (0, _styledComponents.css)(_templateObject6);
};

var tableDarkDarkBordered = function tableDarkDarkBordered(props) {
  return props.bordered && (0, _styledComponents.css)(_templateObject7);
};

var tableDarkDarkStriped = function tableDarkDarkStriped(props) {
  return props.striped && (0, _styledComponents.css)(_templateObject8);
};

var tableDarkDarkHover = function tableDarkDarkHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject9);
};

var tableDarkDark = function tableDarkDark(props) {
  return (
    props.tableDark &&
    (0, _styledComponents.css)(
      _templateObject10,
      tableDarkDarkBordered,
      tableDarkDarkStriped,
      tableDarkDarkHover
    )
  );
};

var tableResponsiveBordered = function tableResponsiveBordered(props) {
  return props.bordered && (0, _styledComponents.css)(_templateObject7);
};

var tableResponsiveSmall = function tableResponsiveSmall(props) {
  return (
    props.responsiveSm &&
    (0, _styledComponents.css)(_templateObject11, tableResponsiveBordered)
  );
};

var tableResponsiveMedium = function tableResponsiveMedium(props) {
  return (
    props.responsiveMd &&
    (0, _styledComponents.css)(_templateObject12, tableResponsiveBordered)
  );
};

var tableResponsiveLarge = function tableResponsiveLarge(props) {
  return (
    props.responsiveLg &&
    (0, _styledComponents.css)(_templateObject13, tableResponsiveBordered)
  );
};

var tableResponsiveXLarge = function tableResponsiveXLarge(props) {
  return (
    props.responsiveXl &&
    (0, _styledComponents.css)(_templateObject14, tableResponsiveBordered)
  );
};

var tableResponsive = function tableResponsive(props) {
  return (
    props.responsive &&
    (0, _styledComponents.css)(_templateObject15, tableResponsiveBordered)
  );
};

var Table = (exports.Table = (0, _styledComponents2.default)(
  _styledBaseComponents.Table
)(
  _templateObject16,
  tableSmall,
  tableBordered,
  tableStriped,
  tableHover,
  tableDarkDark,
  tableHeadDark,
  tableHeadLight,
  tableResponsiveSmall,
  tableResponsiveMedium,
  tableResponsiveLarge,
  tableResponsiveXLarge,
  tableResponsive,
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
