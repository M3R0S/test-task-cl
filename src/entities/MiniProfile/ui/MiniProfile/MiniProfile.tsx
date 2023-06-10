import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./MiniProfile.module.scss";
import { MiniProfileLinks, MiniProfileProps } from "./MiniProfile.types";

import AvatarImg from "shared/assets/image/Avatar.png";
import { ReactComponent as FolderSvg } from "shared/assets/svg/Folder.svg";
import { Avatar } from "shared/ui/Avatar";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/AppLink";
import { Svg } from "shared/ui/Svg";

export const MiniProfile: FC<MiniProfileProps> = memo((props) => {
    const {
        className,
        name,
        avatar = AvatarImg,
        github = "https://github.com",
        resume = "https://hh.ru",
        surname,
        telegram = "https://web.telegram.org",
    } = props;

    const miniProfileLinks: MiniProfileLinks[] = [
        {
            id: 1,
            title: "Telegram",
            src: telegram,
        },
        {
            id: 2,
            title: "GitHub",
            src: github,
        },
        {
            id: 3,
            title: "Resume",
            src: resume,
        },
    ];

    return (
        <HStack
            Tag="header"
            gap="24"
            className={classNames(cl.mini_profile, className)}
        >
            <Avatar
                src={avatar}
                width={80}
                height={80}
                borderRadius="50proc"
            />
            <VStack gap="8">
                <Text
                    theme="primary"
                    Tag="h1"
                    size="20_600"
                >
                    {`${name} ${surname ? surname : ""}`}
                </Text>
                <HStack gap="16">
                    {miniProfileLinks.map(({ id, src, title }) => (
                        <AppLink
                            gap="4"
                            theme="clear"
                            size="12"
                            key={id}
                            to={src}
                        >
                            <Svg Svg={FolderSvg} />
                            {title}
                        </AppLink>
                    ))}
                </HStack>
            </VStack>
        </HStack>
    );
});