import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GiphyImage from "views/components/GiphyImage";

const images = {
  fixed_height_still: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200_s.gif",
    width: "409",
    height: "200",
    size: "53209"
  },
  original_still: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy_s.gif",
    width: "480",
    height: "235",
    size: "70704"
  },
  fixed_width: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200w.gif",
    width: "200",
    height: "98",
    size: "566013",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200w.mp4",
    mp4_size: "38355",
    webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200w.webp",
    webp_size: "142930"
  },
  fixed_height_small_still: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100_s.gif",
    width: "205",
    height: "100",
    size: "16627"
  },
  fixed_height_downsampled: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200_d.gif",
    width: "409",
    height: "200",
    size: "323460",
    webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200_d.webp",
    webp_size: "46916"
  },
  preview: {
    width: "480",
    height: "234",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-preview.mp4",
    mp4_size: "45130"
  },
  fixed_height_small: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100.gif",
    width: "205",
    height: "100",
    size: "599083",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100.mp4",
    mp4_size: "38107",
    webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100.webp",
    webp_size: "142244"
  },
  downsized_still: {
    url:
      "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-downsized_s.gif",
    width: "384",
    height: "188",
    size: "47639"
  },
  downsized: {
    url:
      "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-downsized.gif",
    width: "384",
    height: "188",
    size: "1958753"
  },
  downsized_large: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy.gif",
    width: "480",
    height: "235",
    size: "3083053"
  },
  fixed_width_small_still: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100w_s.gif",
    width: "100",
    height: "49",
    size: "5581"
  },
  preview_webp: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-preview.webp",
    width: "263",
    height: "129",
    size: "49496"
  },
  fixed_width_still: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200w_s.gif",
    width: "200",
    height: "98",
    size: "15995"
  },
  fixed_width_small: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100w.gif",
    width: "100",
    height: "49",
    size: "155162",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100w.mp4",
    mp4_size: "16720",
    webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/100w.webp",
    webp_size: "59944"
  },
  downsized_small: {
    width: "480",
    height: "234",
    mp4:
      "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-downsized-small.mp4",
    mp4_size: "183626"
  },
  fixed_width_downsampled: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200w_d.gif",
    width: "200",
    height: "98",
    size: "93488",
    webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200w_d.webp",
    webp_size: "19500"
  },
  downsized_medium: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy.gif",
    width: "480",
    height: "235",
    size: "3083053"
  },
  original: {
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
  },
  fixed_height: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200.gif",
    width: "409",
    height: "200",
    size: "2198840",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200.mp4",
    mp4_size: "101834",
    webp: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/200.webp",
    webp_size: "346620"
  },
  hd: {
    width: "1012",
    height: "496",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-hd.mp4",
    mp4_size: "1000694"
  },
  looping: {
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-loop.mp4",
    mp4_size: "895277"
  },
  original_mp4: {
    width: "480",
    height: "234",
    mp4: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy.mp4",
    mp4_size: "138223"
  },
  preview_gif: {
    url: "https://media1.giphy.com/media/fnVYkUNTVYq6ntAmzR/giphy-preview.gif",
    width: "137",
    height: "67",
    size: "49529"
  },
  "480w_still": {
    url: "https://media0.giphy.com/media/fnVYkUNTVYq6ntAmzR/480w_s.jpg",
    width: "480",
    height: "235"
  }
};
storiesOf("GiphyImage", module).add("default", () => (
  <GiphyImage images={images} rendition={"fixed_height"} title={"test"} />
));
