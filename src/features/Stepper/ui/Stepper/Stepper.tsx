import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Stepper.module.scss";
import { StepperProps } from "./Stepper.types";

import { ReactComponent as CheckSmallSvg } from "shared/assets/svg/Check_Small.svg";
import { ReactComponent as DotSmallSvg } from "shared/assets/svg/Dot_Small.svg";
import { Button } from "shared/ui/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";

export const Stepper: FC<StepperProps> = memo((props) => {
    const { className, activeDot } = props;

    const dot1 = activeDot === "1";
    const dot2 = activeDot === "2";
    const dot3 = activeDot === "3";

    return (
        <HStack
            justifyContent="space_between"
            alignItems="start"
            className={classNames(cl.stepper, className)}
        >
            <div
                className={classNames(cl.line)}
                style={{ width: dot2 ? "50%" : dot3 ? "100%" : 0 }}
            />
            <Button
                className={classNames(cl.btn)}
                theme="clear"
            >
                <div className={classNames(cl.dot, cl.active)}>
                    {dot1 && <DotSmallSvg />}
                    {(dot2 || dot3) && <CheckSmallSvg />}
                </div>
                <Text
                    size={dot1 ? "14_600" : "14_400"}
                    theme={dot1 ? "purple" : "secondary"}
                >
                    1
                </Text>
            </Button>
            <Button
                className={classNames(cl.btn)}
                theme="clear"
            >
                <div
                    className={classNames(cl.dot, {
                        [cl.active]: dot2 || dot3,
                    })}
                >
                    {dot2 && <DotSmallSvg />}
                    {dot3 && <CheckSmallSvg />}
                </div>
                <Text
                    size={dot2 ? "14_600" : "14_400"}
                    theme={dot2 ? "purple" : "secondary"}
                >
                    2
                </Text>
            </Button>
            <Button
                className={classNames(cl.btn)}
                theme="clear"
            >
                <div
                    className={classNames(cl.dot, {
                        [cl.active]: dot3,
                    })}
                >
                    {dot3 && <DotSmallSvg />}
                </div>
                <Text
                    size={dot3 ? "14_600" : "14_400"}
                    theme={dot3 ? "purple" : "secondary"}
                >
                    3
                </Text>
            </Button>
        </HStack>
    );
});
