import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GiphyUser from "views/components/GiphyUser";

const user = {
  avatar_url: "https://media2.giphy.com/avatars/theorchard/7kOFLIXWxl2V.png",
  banner_url: "https://media2.giphy.com/headers/theorchard/EVDYnQXVqJ42.gif",
  profile_url: "https://giphy.com/orchfilms/",
  username: "orchfilms",
  display_name: "The Orchard Films",
  twitter: "@OrchFilms",
  guid: "a3dhdGNoQHRoZW9yY2hhcmQuY29t",
  metadata_description:
    "The Orchard is an indie movie distributor, specializing in high-quality feature films, documentaries and action sports titles.",
  attribution_display_name: "The Orchard Films",
  name: "The Orchard Films",
  description:
    "The Orchard is an indie movie distributor, specializing in high-quality feature films, documentaries and action sports titles.",
  facebook_url: "https://www.facebook.com/orchfilms",
  twitter_url: "https://twitter.com/OrchFilms",
  instagram_url: "https://instagram.com/OrchFilms",
  tumblr_url: null,
  suppress_chrome: false,
  website_url: "https://theorchard.com/",
  website_display_url: "theorchard.com"
};
storiesOf("GiphyUser", module).add("default", () => <GiphyUser user={user} />);
