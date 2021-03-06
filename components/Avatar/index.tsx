import { FC } from "react";
import { AvatarProps } from "./index.interface";
import { getAvatarColors, getAvatarSizes } from "./index.styles";

const Avatar: FC<AvatarProps> = ({
  title,
  avatarSizes = "medium",
  avatarColor = "orange",
  avatarImage,
  extentClassName,
  ...props
}) => {
  let bgImageStyle = {};
  if (avatarImage) {
    bgImageStyle = {
      backgroundImage: `url(${avatarImage})`,
    };
  }

  return (
    <button
      style={{ ...bgImageStyle }}
      className={`
      ${getAvatarSizes(avatarSizes)} 
      ${getAvatarColors(
        avatarColor
      )} rounded-full uppercase bg-cover ${extentClassName}`}
      {...props}
    >
      {!avatarImage && title.slice(0, 2)}
    </button>
  );
};

export default Avatar;
