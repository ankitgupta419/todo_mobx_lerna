import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { base } from "uibase";
const Button = base.Button;
console.log("index.js base import uibase button %o", Button);
storiesOf("Button base", module)
  .add("with text base", () => (
    <Button onClick={action("clicked")}>Hello Button Base</Button>
  ))
  .add("with some emoji base", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>{" "}
      Base{" "}
    </Button>
  ));
