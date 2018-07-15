import { configure } from "@storybook/react";
function loadStories() {
  require("../src/stories/uibase/base/index.js");
  require("../src/stories/uicomp/buttons/index.js");
}
configure(loadStories, module);
