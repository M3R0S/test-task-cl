import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.types";

export const Avatar: FC<AvatarProps> = memo((props) => {
    const { className, src, borderRadius, height, width } = props;

    return (
        <img
            src={src}
            width={width}
            height={height}
            alt="Аватар"
            className={classNames(cl.avatar, className, cl[`border_radius_${borderRadius}`])}
        />
    );
});
