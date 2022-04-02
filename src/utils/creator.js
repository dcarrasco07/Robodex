import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

export const createMyAvatar = (name, options) => {
  const svg = createAvatar(style, {
    seed: name,
    // ... and other options
  });

  console.log(svg);
  return svg;
};
