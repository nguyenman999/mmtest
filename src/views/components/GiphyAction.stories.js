import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GiphyAction from "views/components/GiphyAction";

storiesOf("GiphyAction", module).add("default", () => (
  <GiphyAction heart={10} comment={20} share={30} view={40} />
));
