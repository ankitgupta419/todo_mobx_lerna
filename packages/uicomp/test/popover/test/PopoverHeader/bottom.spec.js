import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { PopoverHeader } from "../../src";

test("Styles matches PopoverHeader bottom", () => {
  const tree = renderer.create(<PopoverHeader bottom />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("position", "absolute");
  expect(tree).toHaveStyleRule("top", "0");
  expect(tree).toHaveStyleRule("left", "50%");
  expect(tree).toHaveStyleRule("display", "block");
  expect(tree).toHaveStyleRule("width", "1rem");
  expect(tree).toHaveStyleRule("margin-left", "-0.5rem");
  expect(tree).toHaveStyleRule("content", '""');
  expect(tree).toHaveStyleRule("border-bottom", "1px solid #f7f7f7");
});
