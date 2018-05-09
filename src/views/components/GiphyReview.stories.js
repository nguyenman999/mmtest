import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GiphyReview from "views/components/GiphyReview";

const giphy = {
  url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy.gif",
  width: "480",
  height: "235",
  size: "3083053",
  frames: "44",
  mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy.mp4",
  mp4_size: "138223",
  webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy.webp",
  webp_size: "462328",
  hash: "giphy.gif"
};
storiesOf("GiphyReview", module).add("default", () => (
  <GiphyReview giphy={giphy} onPreviewClose={action("onPreviewClose")} />
));
