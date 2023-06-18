import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./ButtonsControlStep.module.scss";
import { ButtonsControlStepProps } from "./ButtonsControlStep.types";

import { HStack } from "shared/ui/Stack";
import { Button } from "shared/ui/Button";

export const ButtonsControlStep: FC<ButtonsControlStepProps> = memo((props) => {
    const { className, onBack, step } = props;

    return (
        <HStack
            max
            className={classNames(cl.buttons_control_step, className)}
            justifyContent="space_between"
        >
            <Button
                id="button-back"
                onClick={onBack}
                theme="without_filling"
            >
                Назад
            </Button>
            {step === "3" ? (
                <Button
                    id="button-send"
                    type="submit"
                    theme="filling"
                >
                    Отправить
                </Button>
            ) : (
                <Button
                    id="button-next"
                    type="submit"
                    theme="filling"
                >
                    Далее
                </Button>
            )}
        </HStack>
    );
});
