import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

export const createMyAvatar = (
  seed,
  colors,
  primaryColorLevel,
  secondaryColorLevel
) => {
  const svg = createAvatar(style, {
    seed,
    colors,
    primaryColorLevel,
    secondaryColorLevel,
  });

  return svg;
};
