import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { H6 } from "../src";

test("Styles matches H6", () => {
  const tree = renderer.create(<H6 />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("margin-top", "0");
  expect(tree).toHaveStyleRule("margin-bottom", "0.5rem");
  expect(tree).toHaveStyleRule("font-family", "inherit");
  expect(tree).toHaveStyleRule("font-weight", "500");
  expect(tree).toHaveStyleRule("line-height", "1.2");
  expect(tree).toHaveStyleRule("color", "inherit");
  expect(tree).toHaveStyleRule("font-size", "1rem");
});
