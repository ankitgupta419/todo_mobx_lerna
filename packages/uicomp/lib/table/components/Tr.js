"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tr = exports.tableActive = exports.tableDark = exports.tableLight = exports.tableDanger = exports.tableWarning = exports.tableInfo = exports.tableSuccess = exports.tableSecondary = exports.tablePrimary = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #9fcdff;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #9fcdff;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #9fcdff;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #9fcdff;\n    }\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #b8daff;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #b8daff;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #c8cbcf;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #c8cbcf;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #c8cbcf;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #c8cbcf;\n    }\n  "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #d6d8db;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #d6d8db;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #b1dfbb;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #b1dfbb;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #b1dfbb;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #b1dfbb;\n    }\n  "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #c3e6cb;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #c3e6cb;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #abdde5;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #abdde5;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #abdde5;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #abdde5;\n    }\n  "
    ]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #bee5eb;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #bee5eb;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #ffe8a1;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #ffe8a1;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #ffe8a1;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #ffe8a1;\n    }\n  "
    ]
  ),
  _templateObject10 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #ffeeba;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #ffeeba;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject11 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #f1b0b7;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #f1b0b7;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #f1b0b7;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #f1b0b7;\n    }\n  "
    ]
  ),
  _templateObject12 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #f5c6cb;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #f5c6cb;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject13 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #ececf6;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #ececf6;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #ececf6;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #ececf6;\n    }\n  "
    ]
  ),
  _templateObject14 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #fdfdfe;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #fdfdfe;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject15 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: #b9bbbe;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #b9bbbe;\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: #b9bbbe;\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: #b9bbbe;\n    }\n  "
    ]
  ),
  _templateObject16 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: #c6c8ca;\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: #c6c8ca;\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject17 = _taggedTemplateLiteral(
    [
      "\n    & tbody tr:hover {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n  "
    ],
    [
      "\n    & tbody tr:hover {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n    & tbody tr:hover > th,\n    & tbody tr:hover > td {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n  "
    ]
  ),
  _templateObject18 = _taggedTemplateLiteral(
    [
      "\n    & > th,\n    & > td {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n    ",
      ";\n  "
    ],
    [
      "\n    & > th,\n    & > td {\n      background-color: rgba(0, 0, 0, 0.075);\n    }\n    ",
      ";\n  "
    ]
  ),
  _templateObject19 = _taggedTemplateLiteral(
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

var tablePrimaryHover = function tablePrimaryHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject);
};

var tablePrimary = (exports.tablePrimary = function tablePrimary(props) {
  return (
    props.primary &&
    (0, _styledComponents.css)(_templateObject2, tablePrimaryHover)
  );
});

var tableSecondaryHover = function tableSecondaryHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject3);
};

var tableSecondary = (exports.tableSecondary = function tableSecondary(props) {
  return (
    props.secondary &&
    (0, _styledComponents.css)(_templateObject4, tableSecondaryHover)
  );
});

var tableSuccessHover = function tableSuccessHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject5);
};

var tableSuccess = (exports.tableSuccess = function tableSuccess(props) {
  return (
    props.success &&
    (0, _styledComponents.css)(_templateObject6, tableSuccessHover)
  );
});

var tableInfoHover = function tableInfoHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject7);
};

var tableInfo = (exports.tableInfo = function tableInfo(props) {
  return (
    props.info && (0, _styledComponents.css)(_templateObject8, tableInfoHover)
  );
});

var tableWarningHover = function tableWarningHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject9);
};

var tableWarning = (exports.tableWarning = function tableWarning(props) {
  return (
    props.warning &&
    (0, _styledComponents.css)(_templateObject10, tableWarningHover)
  );
});

var tableDangerHover = function tableDangerHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject11);
};

var tableDanger = (exports.tableDanger = function tableDanger(props) {
  return (
    props.danger &&
    (0, _styledComponents.css)(_templateObject12, tableDangerHover)
  );
});

var tableLightHover = function tableLightHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject13);
};

var tableLight = (exports.tableLight = function tableLight(props) {
  return (
    props.light &&
    (0, _styledComponents.css)(_templateObject14, tableLightHover)
  );
});

var tableDarkHover = function tableDarkHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject15);
};

var tableDark = (exports.tableDark = function tableDark(props) {
  return (
    props.dark && (0, _styledComponents.css)(_templateObject16, tableDarkHover)
  );
});

var tableActiveHover = function tableActiveHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject17);
};

var tableActive = (exports.tableActive = function tableActive(props) {
  return (
    props.active &&
    (0, _styledComponents.css)(_templateObject18, tableActiveHover)
  );
});

var Tr = (exports.Tr = _styledComponents2.default.tr(
  _templateObject19,
  tablePrimary,
  tableSecondary,
  tableSuccess,
  tableInfo,
  tableWarning,
  tableDanger,
  tableLight,
  tableDark,
  tableActive,
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
