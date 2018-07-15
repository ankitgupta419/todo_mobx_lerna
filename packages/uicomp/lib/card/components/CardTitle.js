"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardTitle = exports.CardTitleH6 = exports.CardTitleH5 = exports.CardTitleH4 = exports.CardTitleH3 = exports.CardTitleH2 = exports.CardTitleH1 = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n    margin-top: -0.375rem;\n    margin-bottom: 0;\n  "],
    ["\n    margin-top: -0.375rem;\n    margin-bottom: 0;\n  "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n    color: #6c757d;\n  "],
    ["\n    color: #6c757d;\n  "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      "\n    margin-bottom: 0.75rem;\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n  "
    ],
    [
      "\n    margin-bottom: 0.75rem;\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n    ",
      ";\n  "
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(["\n  ", ";\n"], ["\n  ", ";\n"]);

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

var cardTitleSubtitle = function cardTitleSubtitle(props) {
  return props.subtitle && (0, _styledComponents.css)(_templateObject);
};

var cardTitleMuted = function cardTitleMuted(props) {
  return props.muted && (0, _styledComponents.css)(_templateObject2);
};

var cardTitleStyle = function cardTitleStyle() {
  return (0, _styledComponents.css)(
    _templateObject3,
    cardTitleSubtitle,
    cardTitleMuted,
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

var CardTitleH1 = (exports.CardTitleH1 = (0, _styledComponents2.default)(
  _styledBaseComponents.H1
)(_templateObject4, cardTitleStyle));

var CardTitleH2 = (exports.CardTitleH2 = (0, _styledComponents2.default)(
  _styledBaseComponents.H2
)(_templateObject4, cardTitleStyle));

var CardTitleH3 = (exports.CardTitleH3 = (0, _styledComponents2.default)(
  _styledBaseComponents.H3
)(_templateObject4, cardTitleStyle));

var CardTitleH4 = (exports.CardTitleH4 = (0, _styledComponents2.default)(
  _styledBaseComponents.H4
)(_templateObject4, cardTitleStyle));

var CardTitleH5 = (exports.CardTitleH5 = (0, _styledComponents2.default)(
  _styledBaseComponents.H5
)(_templateObject4, cardTitleStyle));

var CardTitleH6 = (exports.CardTitleH6 = (0, _styledComponents2.default)(
  _styledBaseComponents.H6
)(_templateObject4, cardTitleStyle));

var CardTitle = (exports.CardTitle = function CardTitle(props) {
  if (props.h1) {
    return new CardTitleH1(props);
  } else if (props.h2) {
    return new CardTitleH2(props);
  } else if (props.h3) {
    return new CardTitleH3(props);
  } else if (props.h4) {
    return new CardTitleH4(props);
  } else if (props.h5) {
    return new CardTitleH5(props);
  } else if (props.h6) {
    return new CardTitleH6(props);
  }

  return new CardTitleH4(props);
});
