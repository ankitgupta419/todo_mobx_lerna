import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

//import * as base from 'uibase';
//const Button = base.Button;

import { base } from "uibase";
import { button } from "uicomp";

const Button = base.Button;

console.log("test.js about to import uicomp button");
import { config } from "uicomp";
console.log("test.js comp import uicomp button %o", button);
console.log("test.js comp import uicomp config %o", config);
//const Button = button.Button;

storiesOf("Button comp", module)
  .add("with text comp", () => (
    <Button onClick={action("clicked")}>Hello Button Comp</Button>
  ))
  .add("with some emoji comp", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
