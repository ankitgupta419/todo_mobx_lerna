"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n    padding-right: 0.6em;\n    padding-left: 0.6em;\n    border-radius: 10rem;\n  "
    ],
    [
      "\n    padding-right: 0.6em;\n    padding-left: 0.6em;\n    border-radius: 10rem;\n  "
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n        color: #fff;\n        background-color: #007bff;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover,\n        &:focus {\n          background-color: #0062cc; \n        };\n      "
    ],
    [
      "\n        color: #fff;\n        background-color: #007bff;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover,\n        &:focus {\n          background-color: #0062cc; \n        };\n      "
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n      color: #fff;\n      background-color: #007bff;\n    "],
    ["\n      color: #fff;\n      background-color: #007bff;\n    "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n        color: #fff;\n        background-color: #6c757d;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #545b62; \n        };\n      "
    ],
    [
      "\n        color: #fff;\n        background-color: #6c757d;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #545b62; \n        };\n      "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    ["\n      color: #fff;\n      background-color: #6c757d;\n    "],
    ["\n      color: #fff;\n      background-color: #6c757d;\n    "]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n        color: #fff;\n        background-color: #28a745;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #1e7e34; \n        };\n      "
    ],
    [
      "\n        color: #fff;\n        background-color: #28a745;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #1e7e34; \n        };\n      "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    ["\n      color: #fff;\n      background-color: #28a745;\n    "],
    ["\n      color: #fff;\n      background-color: #28a745;\n    "]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n        color: #fff;\n        background-color: #17a2b8;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #117a8b; \n        };\n      "
    ],
    [
      "\n        color: #fff;\n        background-color: #17a2b8;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #117a8b; \n        };\n      "
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    ["\n      color: #fff;\n      background-color: #17a2b8;\n    "],
    ["\n      color: #fff;\n      background-color: #17a2b8;\n    "]
  ),
  _templateObject10 = _taggedTemplateLiteral(
    [
      "\n        color: #212529;\n        background-color: #ffc107;\n        & > a {\n          text-decoration: none;\n          color: #212529;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #212529;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #d39e00; \n        };\n      "
    ],
    [
      "\n        color: #212529;\n        background-color: #ffc107;\n        & > a {\n          text-decoration: none;\n          color: #212529;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #212529;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #d39e00; \n        };\n      "
    ]
  ),
  _templateObject11 = _taggedTemplateLiteral(
    ["\n      color: #212529;\n      background-color: #ffc107;\n    "],
    ["\n      color: #212529;\n      background-color: #ffc107;\n    "]
  ),
  _templateObject12 = _taggedTemplateLiteral(
    [
      "\n        color: #fff;\n        background-color: #dc3545;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #bd2130; \n        };\n      "
    ],
    [
      "\n        color: #fff;\n        background-color: #dc3545;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #bd2130; \n        };\n      "
    ]
  ),
  _templateObject13 = _taggedTemplateLiteral(
    ["\n      color: #fff;\n      background-color: #dc3545;\n    "],
    ["\n      color: #fff;\n      background-color: #dc3545;\n    "]
  ),
  _templateObject14 = _taggedTemplateLiteral(
    [
      "\n        color: #212529;\n        background-color: #f8f9fa;\n        & > a {\n          text-decoration: none;\n          color: #212529;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #212529;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #dae0e5; \n        };\n      "
    ],
    [
      "\n        color: #212529;\n        background-color: #f8f9fa;\n        & > a {\n          text-decoration: none;\n          color: #212529;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #212529;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #dae0e5; \n        };\n      "
    ]
  ),
  _templateObject15 = _taggedTemplateLiteral(
    ["\n      color: #212529;\n      background-color: #f8f9fa;\n    "],
    ["\n      color: #212529;\n      background-color: #f8f9fa;\n    "]
  ),
  _templateObject16 = _taggedTemplateLiteral(
    [
      "\n        color: #fff;\n        background-color: #343a40;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #1d2124; \n        };\n      "
    ],
    [
      "\n        color: #fff;\n        background-color: #343a40;\n        & > a {\n          text-decoration: none;\n          color: #fff;\n          &:hover, &:focus {\n            text-decoration: none;\n            color: #fff;\n          };\n        };\n        &:hover, &:focus {\n          background-color: #1d2124; \n        };\n      "
    ]
  ),
  _templateObject17 = _taggedTemplateLiteral(
    ["\n      color: #fff;\n      background-color: #343a40;\n    "],
    ["\n      color: #fff;\n      background-color: #343a40;\n    "]
  ),
  _templateObject18 = _taggedTemplateLiteral(
    [
      "\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  &:empty {\n    display: none;\n  };\n  ",
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
      "\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  &:empty {\n    display: none;\n  };\n  ",
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

var badgePill = function badgePill(props) {
  return props.pill && (0, _styledComponents.css)(_templateObject);
};

var badgePrimary = function badgePrimary(props) {
  if (props.primary) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject2);
    }

    return (0, _styledComponents.css)(_templateObject3);
  }

  return "";
};

var badgeSecondary = function badgeSecondary(props) {
  if (props.secondary) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject4);
    }

    return (0, _styledComponents.css)(_templateObject5);
  }

  return "";
};

var badgeSuccess = function badgeSuccess(props) {
  if (props.success) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject6);
    }

    return (0, _styledComponents.css)(_templateObject7);
  }

  return "";
};

var badgeInfo = function badgeInfo(props) {
  if (props.info) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject8);
    }

    return (0, _styledComponents.css)(_templateObject9);
  }

  return "";
};

var badgeWarning = function badgeWarning(props) {
  if (props.warning) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject10);
    }

    return (0, _styledComponents.css)(_templateObject11);
  }

  return "";
};

var badgeDanger = function badgeDanger(props) {
  if (props.danger) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject12);
    }

    return (0, _styledComponents.css)(_templateObject13);
  }

  return "";
};

var badgeLight = function badgeLight(props) {
  if (props.light) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject14);
    }

    return (0, _styledComponents.css)(_templateObject15);
  }

  return "";
};

var badgeDark = function badgeDark(props) {
  if (props.dark) {
    if (props.action) {
      return (0, _styledComponents.css)(_templateObject16);
    }

    return (0, _styledComponents.css)(_templateObject17);
  }

  return "";
};

var Badge = (exports.Badge = _styledComponents2.default.span(
  _templateObject18,
  badgePill,
  badgePrimary,
  badgeSecondary,
  badgeSuccess,
  badgeInfo,
  badgeWarning,
  badgeDanger,
  badgeLight,
  badgeDark,
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
