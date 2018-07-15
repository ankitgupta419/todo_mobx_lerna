"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonLarge = exports.buttonSmall = undefined;

var _templateObject = _taggedTemplateLiteral(
    ["\n      opacity: 0.65;\n    "],
    ["\n      opacity: 0.65;\n    "]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ["\n      cursor: pointer;\n    "],
    ["\n      cursor: pointer;\n    "]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ["\n    background-image: none;\n  "],
    ["\n    background-image: none;\n  "]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      "\n      color: #fff;\n      background-color: #007bff;\n      border-color: #007bff;\n      &:hover {\n        color: #fff;\n        background-color: #007bff;\n        border-color: #007bff;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #fff;\n      background-color: #007bff;\n      border-color: #007bff;\n      &:hover {\n        color: #fff;\n        background-color: #007bff;\n        border-color: #007bff;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n      };\n    "
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    &:hover {\n      color: #fff;\n      background-color: #0069d9;\n      border-color: #0062cc;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    &:hover {\n      color: #fff;\n      background-color: #0069d9;\n      border-color: #0062cc;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n  "
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      "\n      color: #007bff;\n      background-color: transparent;\n      background-image: none;\n      border-color: #007bff;\n      &:hover {\n        color: #007bff;\n        background-color: transparent;\n        background-image: none;\n        border-color: #007bff;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #007bff;\n      background-color: transparent;\n      background-image: none;\n      border-color: #007bff;\n      &:hover {\n        color: #007bff;\n        background-color: transparent;\n        background-image: none;\n        border-color: #007bff;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n      };\n    "
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      "\n    color: #007bff;\n    background-color: transparent;\n    background-image: none;\n    border-color: #007bff;\n    &:hover {\n      color: #fff;\n      background-color: #007bff;\n      border-color: #007bff;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #007bff;\n    background-color: transparent;\n    background-image: none;\n    border-color: #007bff;\n    &:hover {\n      color: #fff;\n      background-color: #007bff;\n      border-color: #007bff;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n  "
    ]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #0062cc;\n      border-color: #005cbf;\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #0062cc;\n      border-color: #005cbf;\n    };\n  "
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      "\n      color: #fff;\n      background-color: #6c757d;\n      border-color: #6c757d;\n      &:hover {\n        color: #fff;\n        background-color: #6c757d;\n        border-color: #6c757d;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #fff;\n      background-color: #6c757d;\n      border-color: #6c757d;\n      &:hover {\n        color: #fff;\n        background-color: #6c757d;\n        border-color: #6c757d;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n      };\n    "
    ]
  ),
  _templateObject10 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n    &:hover {\n      color: #fff;\n      background-color: #5a6268;\n      border-color: #545b62;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n    &:hover {\n      color: #fff;\n      background-color: #5a6268;\n      border-color: #545b62;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n    };\n  "
    ]
  ),
  _templateObject11 = _taggedTemplateLiteral(
    [
      "\n      color: #6c757d;\n      background-color: transparent;\n      background-image: none;\n      border-color: #6c757d;\n      &:hover {\n        color: #6c757d;\n        background-color: transparent;\n        background-image: none;\n        border-color: #6c757d;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #6c757d;\n      background-color: transparent;\n      background-image: none;\n      border-color: #6c757d;\n      &:hover {\n        color: #6c757d;\n        background-color: transparent;\n        background-image: none;\n        border-color: #6c757d;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n      };\n    "
    ]
  ),
  _templateObject12 = _taggedTemplateLiteral(
    [
      "\n    color: #6c757d;\n    background-color: transparent;\n    background-image: none;\n    border-color: #6c757d;\n    &:hover {\n      color: #fff;\n      background-color: #6c757d;\n      border-color: #6c757d;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #6c757d;\n    background-color: transparent;\n    background-image: none;\n    border-color: #6c757d;\n    &:hover {\n      color: #fff;\n      background-color: #6c757d;\n      border-color: #6c757d;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n    };\n  "
    ]
  ),
  _templateObject13 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #545b62;\n      border-color: #4e555b;\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #545b62;\n      border-color: #4e555b;\n    };\n  "
    ]
  ),
  _templateObject14 = _taggedTemplateLiteral(
    [
      "\n      color: #fff;\n      background-color: #28a745;\n      border-color: #28a745;\n      &:hover {\n        color: #fff;\n        background-color: #28a745;\n        border-color: #28a745;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #fff;\n      background-color: #28a745;\n      border-color: #28a745;\n      &:hover {\n        color: #fff;\n        background-color: #28a745;\n        border-color: #28a745;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n      };\n    "
    ]
  ),
  _templateObject15 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n    &:hover {\n      color: #fff;\n      background-color: #218838;\n      border-color: #1e7e34;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n    &:hover {\n      color: #fff;\n      background-color: #218838;\n      border-color: #1e7e34;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n    };\n  "
    ]
  ),
  _templateObject16 = _taggedTemplateLiteral(
    [
      "\n      color: #28a745;\n      background-color: transparent;\n      background-image: none;\n      border-color: #28a745;\n      &:hover {\n        color: #28a745;\n        background-color: transparent;\n        background-image: none;\n        border-color: #28a745;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #28a745;\n      background-color: transparent;\n      background-image: none;\n      border-color: #28a745;\n      &:hover {\n        color: #28a745;\n        background-color: transparent;\n        background-image: none;\n        border-color: #28a745;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n      };\n    "
    ]
  ),
  _templateObject17 = _taggedTemplateLiteral(
    [
      "\n    color: #28a745;\n    background-color: transparent;\n    background-image: none;\n    border-color: #28a745;\n    &:hover {\n      color: #fff;\n      background-color: #28a745;\n      border-color: #28a745;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #28a745;\n    background-color: transparent;\n    background-image: none;\n    border-color: #28a745;\n    &:hover {\n      color: #fff;\n      background-color: #28a745;\n      border-color: #28a745;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n    };\n  "
    ]
  ),
  _templateObject18 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #1e7e34;\n      border-color: #1c7430;\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #1e7e34;\n      border-color: #1c7430;\n    };\n  "
    ]
  ),
  _templateObject19 = _taggedTemplateLiteral(
    [
      "\n      color: #fff;\n      background-color: #17a2b8;\n      border-color: #17a2b8;\n      &:hover {\n        color: #fff;\n        background-color: #17a2b8;\n        border-color: #17a2b8;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #fff;\n      background-color: #17a2b8;\n      border-color: #17a2b8;\n      &:hover {\n        color: #fff;\n        background-color: #17a2b8;\n        border-color: #17a2b8;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n      };\n    "
    ]
  ),
  _templateObject20 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n    &:hover {\n      color: #fff;\n      background-color: #138496;\n      border-color: #117a8b;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n    &:hover {\n      color: #fff;\n      background-color: #138496;\n      border-color: #117a8b;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n    };\n  "
    ]
  ),
  _templateObject21 = _taggedTemplateLiteral(
    [
      "\n      color: #17a2b8;\n      background-color: transparent;\n      background-image: none;\n      border-color: #17a2b8;\n      &:hover {\n        color: #17a2b8;\n        background-color: transparent;\n        background-image: none;\n        border-color: #17a2b8;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #17a2b8;\n      background-color: transparent;\n      background-image: none;\n      border-color: #17a2b8;\n      &:hover {\n        color: #17a2b8;\n        background-color: transparent;\n        background-image: none;\n        border-color: #17a2b8;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n      };\n    "
    ]
  ),
  _templateObject22 = _taggedTemplateLiteral(
    [
      "\n    color: #17a2b8;\n    background-color: transparent;\n    background-image: none;\n    border-color: #17a2b8;\n    &:hover {\n      color: #fff;\n      background-color: #17a2b8;\n      border-color: #17a2b8;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #17a2b8;\n    background-color: transparent;\n    background-image: none;\n    border-color: #17a2b8;\n    &:hover {\n      color: #fff;\n      background-color: #17a2b8;\n      border-color: #17a2b8;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n    };\n  "
    ]
  ),
  _templateObject23 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #117a8b;\n      border-color: #10707f;\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #117a8b;\n      border-color: #10707f;\n    };\n  "
    ]
  ),
  _templateObject24 = _taggedTemplateLiteral(
    [
      "\n      color: #212529;\n      background-color: #ffc107;\n      border-color: #ffc107;\n      &:hover {\n        color: #212529;\n        background-color: #ffc107;\n        border-color: #ffc107;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #212529;\n      background-color: #ffc107;\n      border-color: #ffc107;\n      &:hover {\n        color: #212529;\n        background-color: #ffc107;\n        border-color: #ffc107;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n      };\n    "
    ]
  ),
  _templateObject25 = _taggedTemplateLiteral(
    [
      "\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    &:hover {\n      color: #212529;\n      background-color: #e0a800;\n      border-color: #d39e00;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    &:hover {\n      color: #212529;\n      background-color: #e0a800;\n      border-color: #d39e00;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n    };\n  "
    ]
  ),
  _templateObject26 = _taggedTemplateLiteral(
    [
      "\n      color: #ffc107;\n      background-color: transparent;\n      background-image: none;\n      border-color: #ffc107;\n      &:hover {\n        color: #ffc107;\n        background-color: transparent;\n        background-image: none;\n        border-color: #ffc107;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #ffc107;\n      background-color: transparent;\n      background-image: none;\n      border-color: #ffc107;\n      &:hover {\n        color: #ffc107;\n        background-color: transparent;\n        background-image: none;\n        border-color: #ffc107;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n      };\n    "
    ]
  ),
  _templateObject27 = _taggedTemplateLiteral(
    [
      "\n    color: #ffc107;\n    background-color: transparent;\n    background-image: none;\n    border-color: #ffc107;\n    &:hover {\n      color: #212529;\n      background-color: #ffc107;\n      border-color: #ffc107;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #ffc107;\n    background-color: transparent;\n    background-image: none;\n    border-color: #ffc107;\n    &:hover {\n      color: #212529;\n      background-color: #ffc107;\n      border-color: #ffc107;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n    };\n  "
    ]
  ),
  _templateObject28 = _taggedTemplateLiteral(
    [
      "\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n    };\n    &:hover {\n      color: #212529;\n      background-color: #d39e00;\n      border-color: #c69500;\n    };\n  "
    ],
    [
      "\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n    };\n    &:hover {\n      color: #212529;\n      background-color: #d39e00;\n      border-color: #c69500;\n    };\n  "
    ]
  ),
  _templateObject29 = _taggedTemplateLiteral(
    [
      "\n      color: #fff;\n      background-color: #dc3545;\n      border-color: #dc3545;\n      &:hover {\n        color: #fff;\n        background-color: #dc3545;\n        border-color: #dc3545;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #fff;\n      background-color: #dc3545;\n      border-color: #dc3545;\n      &:hover {\n        color: #fff;\n        background-color: #dc3545;\n        border-color: #dc3545;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n      };\n    "
    ]
  ),
  _templateObject30 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    &:hover {\n      color: #fff;\n      background-color: #c82333;\n      border-color: #bd2130;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    &:hover {\n      color: #fff;\n      background-color: #c82333;\n      border-color: #bd2130;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n    };\n  "
    ]
  ),
  _templateObject31 = _taggedTemplateLiteral(
    [
      "\n      color: #dc3545;\n      background-color: transparent;\n      background-image: none;\n      border-color: #dc3545;\n      &:hover {\n        color: #dc3545;\n        background-color: transparent;\n        background-image: none;\n        border-color: #dc3545;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #dc3545;\n      background-color: transparent;\n      background-image: none;\n      border-color: #dc3545;\n      &:hover {\n        color: #dc3545;\n        background-color: transparent;\n        background-image: none;\n        border-color: #dc3545;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n      };\n    "
    ]
  ),
  _templateObject32 = _taggedTemplateLiteral(
    [
      "\n    color: #dc3545;\n    background-color: transparent;\n    background-image: none;\n    border-color: #dc3545;\n    &:hover {\n      color: #fff;\n      background-color: #dc3545;\n      border-color: #dc3545\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #dc3545;\n    background-color: transparent;\n    background-image: none;\n    border-color: #dc3545;\n    &:hover {\n      color: #fff;\n      background-color: #dc3545;\n      border-color: #dc3545\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n    };\n  "
    ]
  ),
  _templateObject33 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #bd2130;\n      border-color: #b21f2d;\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #bd2130;\n      border-color: #b21f2d;\n    };\n  "
    ]
  ),
  _templateObject34 = _taggedTemplateLiteral(
    [
      "\n      color: #212529;\n      background-color: #f8f9fa;\n      border-color: #f8f9fa;\n      &:hover {\n        color: #212529;\n        background-color: #f8f9fa;\n        border-color: #f8f9fa;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #212529;\n      background-color: #f8f9fa;\n      border-color: #f8f9fa;\n      &:hover {\n        color: #212529;\n        background-color: #f8f9fa;\n        border-color: #f8f9fa;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n      };\n    "
    ]
  ),
  _templateObject35 = _taggedTemplateLiteral(
    [
      "\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n    &:hover {\n      color: #212529;\n      background-color: #e2e6ea;\n      border-color: #dae0e5;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n    &:hover {\n      color: #212529;\n      background-color: #e2e6ea;\n      border-color: #dae0e5;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n    };\n  "
    ]
  ),
  _templateObject36 = _taggedTemplateLiteral(
    [
      "\n      color: #f8f9fa;\n      background-color: transparent;\n      background-image: none;\n      border-color: #f8f9fa;\n      &:hover {\n        color: #f8f9fa;\n        background-color: transparent;\n        background-image: none;\n        border-color: #f8f9fa;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #f8f9fa;\n      background-color: transparent;\n      background-image: none;\n      border-color: #f8f9fa;\n      &:hover {\n        color: #f8f9fa;\n        background-color: transparent;\n        background-image: none;\n        border-color: #f8f9fa;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n      };\n    "
    ]
  ),
  _templateObject37 = _taggedTemplateLiteral(
    [
      "\n    color: #f8f9fa;\n    background-color: transparent;\n    background-image: none;\n    border-color: #f8f9fa;\n    &:hover {\n      color: #212529;\n      background-color: #f8f9fa;\n      border-color: #f8f9fa;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #f8f9fa;\n    background-color: transparent;\n    background-image: none;\n    border-color: #f8f9fa;\n    &:hover {\n      color: #212529;\n      background-color: #f8f9fa;\n      border-color: #f8f9fa;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n    };\n  "
    ]
  ),
  _templateObject38 = _taggedTemplateLiteral(
    [
      "\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n    };\n    &:hover {\n      color: #212529;\n      background-color: #dae0e5;\n      border-color: #d3d9df;\n    };\n  "
    ],
    [
      "\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n    };\n    &:hover {\n      color: #212529;\n      background-color: #dae0e5;\n      border-color: #d3d9df;\n    };\n  "
    ]
  ),
  _templateObject39 = _taggedTemplateLiteral(
    [
      "\n      color: #fff;\n      background-color: #343a40;\n      border-color: #343a40;\n      &:hover {\n        color: #fff;\n        background-color: #343a40;\n        border-color: #343a40;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #fff;\n      background-color: #343a40;\n      border-color: #343a40;\n      &:hover {\n        color: #fff;\n        background-color: #343a40;\n        border-color: #343a40;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n      };\n    "
    ]
  ),
  _templateObject40 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n    &:hover {\n      color: #fff;\n      background-color: #23272b;\n      border-color: #1d2124;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n    &:hover {\n      color: #fff;\n      background-color: #23272b;\n      border-color: #1d2124;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n    };\n  "
    ]
  ),
  _templateObject41 = _taggedTemplateLiteral(
    [
      "\n      color: #343a40;\n      background-color: transparent;\n      background-image: none;\n      border-color: #343a40;\n      &:hover {\n        color: #343a40;\n        background-color: transparent;\n        background-image: none;\n        border-color: #343a40;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n      };\n    "
    ],
    [
      "\n      color: #343a40;\n      background-color: transparent;\n      background-image: none;\n      border-color: #343a40;\n      &:hover {\n        color: #343a40;\n        background-color: transparent;\n        background-image: none;\n        border-color: #343a40;\n      };\n      &:focus {\n        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n      };\n    "
    ]
  ),
  _templateObject42 = _taggedTemplateLiteral(
    [
      "\n    color: #343a40;\n    background-color: transparent;\n    background-image: none;\n    border-color: #343a40;\n    &:hover {\n      color: #fff;\n      background-color: #343a40;\n      border-color: #343a40;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n    };\n  "
    ],
    [
      "\n    color: #343a40;\n    background-color: transparent;\n    background-image: none;\n    border-color: #343a40;\n    &:hover {\n      color: #fff;\n      background-color: #343a40;\n      border-color: #343a40;\n    };\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n    };\n  "
    ]
  ),
  _templateObject43 = _taggedTemplateLiteral(
    [
      "\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #1d2124;\n      border-color: #171a1d;\n    };\n  "
    ],
    [
      "\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d;\n    &:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n    };\n    &:hover {\n      color: #fff;\n      background-color: #1d2124;\n      border-color: #171a1d;\n    };\n  "
    ]
  ),
  _templateObject44 = _taggedTemplateLiteral(
    [
      "\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n  "
    ],
    [
      "\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    border-radius: 0.2rem;\n  "
    ]
  ),
  _templateObject45 = _taggedTemplateLiteral(
    [
      "\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    border-radius: 0.3rem;\n  "
    ],
    [
      "\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    border-radius: 0.3rem;\n  "
    ]
  ),
  _templateObject46 = _taggedTemplateLiteral(
    [
      "\n    display: block;\n    width: 100%;\n    & + & {\n      margin-top: 0.5rem;\n    };\n  "
    ],
    [
      "\n    display: block;\n    width: 100%;\n    & + & {\n      margin-top: 0.5rem;\n    };\n  "
    ]
  ),
  _templateObject47 = _taggedTemplateLiteral(
    [
      '\n    &::after {\n      display: inline-block;\n      width: 0;\n      height: 0;\n      margin-left: 0.255em;\n      vertical-align: 0.255em;\n      content: "";\n      border-top: 0.3em solid;\n      border-right: 0.3em solid transparent;\n      border-bottom: 0;\n      border-left: 0.3em solid transparent;\n    };\n    &:empty::after {\n      margin-left: 0;\n    };\n  '
    ],
    [
      '\n    &::after {\n      display: inline-block;\n      width: 0;\n      height: 0;\n      margin-left: 0.255em;\n      vertical-align: 0.255em;\n      content: "";\n      border-top: 0.3em solid;\n      border-right: 0.3em solid transparent;\n      border-bottom: 0;\n      border-left: 0.3em solid transparent;\n    };\n    &:empty::after {\n      margin-left: 0;\n    };\n  '
    ]
  ),
  _templateObject48 = _taggedTemplateLiteral(
    [
      "\n        padding: 0;\n        padding-right: 0.375rem;\n        padding-left: 0.375rem;\n        &::after {\n          margin-left: 0;\n        };\n      "
    ],
    [
      "\n        padding: 0;\n        padding-right: 0.375rem;\n        padding-left: 0.375rem;\n        &::after {\n          margin-left: 0;\n        };\n      "
    ]
  ),
  _templateObject49 = _taggedTemplateLiteral(
    [
      "\n        padding: 0;\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n        &::after {\n          margin-left: 0;\n        };\n      "
    ],
    [
      "\n        padding: 0;\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n        &::after {\n          margin-left: 0;\n        };\n      "
    ]
  ),
  _templateObject50 = _taggedTemplateLiteral(
    [
      "\n      padding: 0;\n      padding-right: 0.5625rem;\n      padding-left: 0.5625rem;\n      &::after {\n        margin-left: 0;\n      };\n    "
    ],
    [
      "\n      padding: 0;\n      padding-right: 0.5625rem;\n      padding-left: 0.5625rem;\n      &::after {\n        margin-left: 0;\n      };\n    "
    ]
  ),
  _templateObject51 = _taggedTemplateLiteral(
    [
      "\n      color: rgba(255, 255, 255, 0.5);\n      border-color: rgba(255, 255, 255, 0.1);\n      &:hover, &:focus {\n        color: rgba(255, 255, 255, 0.5);\n        border-color: rgba(255, 255, 255, 0.1); \n      };\n    "
    ],
    [
      "\n      color: rgba(255, 255, 255, 0.5);\n      border-color: rgba(255, 255, 255, 0.1);\n      &:hover, &:focus {\n        color: rgba(255, 255, 255, 0.5);\n        border-color: rgba(255, 255, 255, 0.1); \n      };\n    "
    ]
  ),
  _templateObject52 = _taggedTemplateLiteral(
    [
      "\n      color: rgba(0, 0, 0, 0.5);\n      border-color: rgba(0, 0, 0, 0.1);\n      &:hover, &:focus {\n        color: rgba(0, 0, 0, 0.5);\n        border-color: rgba(0, 0, 0, 0.1);\n      };\n    "
    ],
    [
      "\n      color: rgba(0, 0, 0, 0.5);\n      border-color: rgba(0, 0, 0, 0.1);\n      &:hover, &:focus {\n        color: rgba(0, 0, 0, 0.5);\n        border-color: rgba(0, 0, 0, 0.1);\n      };\n    "
    ]
  ),
  _templateObject53 = _taggedTemplateLiteral(
    [
      "\n      display: none;\n      @media (max-width: ",
      ") {\n        display: block;\n        font-size: 1.25rem;\n        ",
      ";\n      };\n    "
    ],
    [
      "\n      display: none;\n      @media (max-width: ",
      ") {\n        display: block;\n        font-size: 1.25rem;\n        ",
      ";\n      };\n    "
    ]
  ),
  _templateObject54 = _taggedTemplateLiteral(
    [
      "\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  &:hover, &:focus {\n    text-decoration: none;\n  };\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  };\n  ",
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
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n  ",
      ";\n"
    ],
    [
      "\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  &:hover, &:focus {\n    text-decoration: none;\n  };\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n  };\n  ",
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

var _uibase = require("uibase");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var Btn = _uibase.base.Button;

//import { screenSize } from 'uicomp/config';

var buttonDisabled = function buttonDisabled(props) {
  return props.disabled
    ? (0, _styledComponents.css)(_templateObject)
    : (0, _styledComponents.css)(_templateObject2);
};

var buttonActive = function buttonActive(props) {
  return props.active && (0, _styledComponents.css)(_templateObject3);
};

var buttonPrimaryFull = function buttonPrimaryFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject4);
  }

  return (0, _styledComponents.css)(_templateObject5);
};

var buttonPrimaryOutline = function buttonPrimaryOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject6);
  }

  return (0, _styledComponents.css)(_templateObject7);
};

var buttonPrimaryActive = function buttonPrimaryActive() {
  return (0, _styledComponents.css)(_templateObject8);
};

var buttonPrimary = function buttonPrimary(props) {
  if (props.primary) {
    if (props.active) {
      return buttonPrimaryActive(props);
    } else if (props.outline) {
      return buttonPrimaryOutline(props);
    }

    return buttonPrimaryFull(props);
  }

  return "";
};

var buttonSecondaryFull = function buttonSecondaryFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject9);
  }

  return (0, _styledComponents.css)(_templateObject10);
};

var buttonSecondaryOutline = function buttonSecondaryOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject11);
  }

  return (0, _styledComponents.css)(_templateObject12);
};

var buttonSecondaryActive = function buttonSecondaryActive() {
  return (0, _styledComponents.css)(_templateObject13);
};

var buttonSecondary = function buttonSecondary(props) {
  if (props.secondary) {
    if (props.active) {
      return buttonSecondaryActive(props);
    } else if (props.outline) {
      return buttonSecondaryOutline(props);
    }

    return buttonSecondaryFull(props);
  }

  return "";
};

var buttonSuccessFull = function buttonSuccessFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject14);
  }

  return (0, _styledComponents.css)(_templateObject15);
};

var buttonSuccessOutline = function buttonSuccessOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject16);
  }

  return (0, _styledComponents.css)(_templateObject17);
};

var buttonSuccessActive = function buttonSuccessActive() {
  return (0, _styledComponents.css)(_templateObject18);
};

var buttonSuccess = function buttonSuccess(props) {
  if (props.success) {
    if (props.active) {
      return buttonSuccessActive(props);
    } else if (props.outline) {
      return buttonSuccessOutline(props);
    }

    return buttonSuccessFull(props);
  }

  return "";
};

var buttonInfoFull = function buttonInfoFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject19);
  }

  return (0, _styledComponents.css)(_templateObject20);
};

var buttonInfoOutline = function buttonInfoOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject21);
  }

  return (0, _styledComponents.css)(_templateObject22);
};

var buttonInfoActive = function buttonInfoActive() {
  return (0, _styledComponents.css)(_templateObject23);
};

var buttonInfo = function buttonInfo(props) {
  if (props.info) {
    if (props.active) {
      return buttonInfoActive(props);
    } else if (props.outline) {
      return buttonInfoOutline(props);
    }

    return buttonInfoFull(props);
  }

  return "";
};

var buttonWarningFull = function buttonWarningFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject24);
  }

  return (0, _styledComponents.css)(_templateObject25);
};

var buttonWarningOutline = function buttonWarningOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject26);
  }

  return (0, _styledComponents.css)(_templateObject27);
};

var buttonWarningActive = function buttonWarningActive() {
  return (0, _styledComponents.css)(_templateObject28);
};

var buttonWarning = function buttonWarning(props) {
  if (props.warning) {
    if (props.active) {
      return buttonWarningActive(props);
    } else if (props.outline) {
      return buttonWarningOutline(props);
    }

    return buttonWarningFull(props);
  }

  return "";
};

var buttonDangerFull = function buttonDangerFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject29);
  }

  return (0, _styledComponents.css)(_templateObject30);
};

var buttonDangerOutline = function buttonDangerOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject31);
  }

  return (0, _styledComponents.css)(_templateObject32);
};

var buttonDangerActive = function buttonDangerActive() {
  return (0, _styledComponents.css)(_templateObject33);
};

var buttonDanger = function buttonDanger(props) {
  if (props.danger) {
    if (props.active) {
      return buttonDangerActive(props);
    } else if (props.outline) {
      return buttonDangerOutline(props);
    }

    return buttonDangerFull(props);
  }

  return "";
};

var buttonLightFull = function buttonLightFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject34);
  }

  return (0, _styledComponents.css)(_templateObject35);
};

var buttonLightOutline = function buttonLightOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject36);
  }

  return (0, _styledComponents.css)(_templateObject37);
};

var buttonLightActive = function buttonLightActive() {
  return (0, _styledComponents.css)(_templateObject38);
};

var buttonLight = function buttonLight(props) {
  if (props.light) {
    if (props.active) {
      return buttonLightActive(props);
    } else if (props.outline) {
      return buttonLightOutline(props);
    }

    return buttonLightFull(props);
  }

  return "";
};

var buttonDarkFull = function buttonDarkFull(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject39);
  }

  return (0, _styledComponents.css)(_templateObject40);
};

var buttonDarkOutline = function buttonDarkOutline(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject41);
  }

  return (0, _styledComponents.css)(_templateObject42);
};

var buttonDarkActive = function buttonDarkActive() {
  return (0, _styledComponents.css)(_templateObject43);
};

var buttonDark = function buttonDark(props) {
  if (props.dark) {
    if (props.active) {
      return buttonDarkActive(props);
    } else if (props.outline) {
      return buttonDarkOutline(props);
    }

    return buttonDarkFull(props);
  }

  return "";
};

var buttonSmall = (exports.buttonSmall = function buttonSmall(props) {
  return props.sm && (0, _styledComponents.css)(_templateObject44);
});

var buttonLarge = (exports.buttonLarge = function buttonLarge(props) {
  return props.lg && (0, _styledComponents.css)(_templateObject45);
});

var buttonBlock = function buttonBlock(props) {
  return props.block && (0, _styledComponents.css)(_templateObject46);
};

var buttonDropdownToggle = function buttonDropdownToggle(props) {
  return props.dropdownToggle && (0, _styledComponents.css)(_templateObject47);
};

var buttonSplit = function buttonSplit(props) {
  if (props.split) {
    if (props.sm) {
      return (0, _styledComponents.css)(_templateObject48);
    } else if (props.lg) {
      return (0, _styledComponents.css)(_templateObject49);
    }

    return (0, _styledComponents.css)(_templateObject50);
  }

  return "";
};

var buttonToggler = function buttonToggler(props) {
  if (props.dark) {
    return (0, _styledComponents.css)(_templateObject51);
  } else if (props.light) {
    return (0, _styledComponents.css)(_templateObject52);
  }

  return "";
};

var buttonToggleCollapse = function buttonToggleCollapse(props) {
  var thisScreenSize = "";

  if (props.expandSm) {
    thisScreenSize = screenSize.sm;
  } else if (props.expandMd) {
    thisScreenSize = screenSize.md;
  } else if (props.expandLg) {
    thisScreenSize = screenSize.lg;
  } else if (props.expandXl) {
    thisScreenSize = screenSize.xl;
  }

  if (
    (props.expandSm || props.expandMd || props.expandLg || props.expandXl) &&
    props.toggleCollapse
  ) {
    return (0, _styledComponents.css)(
      _templateObject53,
      thisScreenSize,
      buttonToggler
    );
  }

  return "";
};

var Button = (exports.Button = (0, _styledComponents2.default)(Btn)(
  _templateObject54,
  buttonActive,
  buttonPrimary,
  buttonSecondary,
  buttonSuccess,
  buttonInfo,
  buttonWarning,
  buttonDanger,
  buttonLight,
  buttonDark,
  buttonSmall,
  buttonLarge,
  buttonBlock,
  buttonDisabled,
  buttonDropdownToggle,
  buttonSplit,
  buttonToggleCollapse,
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
