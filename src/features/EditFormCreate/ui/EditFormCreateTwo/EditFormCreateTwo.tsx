import { FC, memo, useState } from "react";
import classNames from "classnames";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import cl from "./EditFormCreateTwo.module.scss";
import { EditFormCreateTwoProps } from "./EditFormCreateTwo.types";
import { editFormActions } from "../../model/slice/editFormCreateSlice";
import {
    getFormAdvantages,
    getFormCheckBox,
    getFormRadio,
} from "../../model/selectors/getFormCreate";
import { EditFormCreateTwoSchema } from "./EditFormCreateTwo.schema";
import { defaultCheckBoxOptions, defaultRadioOptions } from "./EditFormCreateTwo.const";
import { ButtonsControlStep } from "../ButtonsControlStep/ButtonsControlStep";

import { ReactComponent as PlusSvg } from "shared/assets/svg/Plus.svg";
import { ReactComponent as DeleteSvg } from "shared/assets/svg/Delete.svg";
import { useHoverArray } from "shared/lib/hooks/useHover";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { HStack, VStack } from "shared/ui/Stack";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { Svg } from "shared/ui/Svg";
import { CheckBoxGroup } from "shared/ui/CheckBoxGroup";
import { RadioGroup } from "shared/ui/RadioGroup";

export const EditFormCreateTwo: FC<EditFormCreateTwoProps> = memo((props) => {
    const { className, setPageNumber } = props;

    const dispatch = useAppDispatch();

    const advantages = useAppSelector(getFormAdvantages);
    const checkBoxGroup = useAppSelector(getFormCheckBox);
    const radioGroup = useAppSelector(getFormRadio);

    const {
        register,
        control,
        watch,
        formState: { dirtyFields },
        handleSubmit,
    } = useForm<EditFormCreateTwoSchema>({
        resolver: yupResolver(EditFormCreateTwoSchema),
        defaultValues: {
            advantages,
            radioGroup,
            checkBoxGroup,
        },
        mode: "all",
    });
    const advantagesMethods = useFieldArray({
        name: "advantages",
        control,
    });

    const { handleMouseEnter, handleMouseLeave, isHover } = useHoverArray(
        advantagesMethods.fields.length
    );
    const [animationLengthFields, setAnimationLengthFields] = useState<number>(
        advantagesMethods.fields.length
    );

    const onNext = () => {
        setPageNumber?.("3");
    };

    const onBack = () => {
        setPageNumber?.("1");
    };

    const onAdd = () => {
        setAnimationLengthFields((length) => length + 1);
        setTimeout(() => {
            advantagesMethods.append({
                advantage: "",
            });
        }, 300);
    };

    const handleDelete = (index: number) => () => {
        advantagesMethods.remove(index);
        setTimeout(() => {
            setAnimationLengthFields((length) => length - 1);
        }, 300);
    };

    const onSubmit = (data: EditFormCreateTwoSchema) => {
        dispatch(editFormActions.setFormCreateTwo(data));
        onNext();
    };

    return (
        <VStack
            className={classNames(cl.edit_form_create_two, className)}
            Tag="form"
            onSubmit={handleSubmit(onSubmit)}
            alignItems="start"
            rowGap="64"
        >
            <VStack
                max
                rowGap="24"
            >
                <VStack
                    rowGap="8"
                    alignItems="start"
                >
                    <Text
                        theme="primary"
                        size="14_400"
                        Tag="label"
                        htmlFor="field-advatages-1"
                    >
                        Преймущества
                    </Text>

                    <VStack
                        rowGap="8"
                        style={{
                            height: `${(animationLengthFields * 53.8 - 8) / 10}rem`,
                            transition: "height 500ms",
                        }}
                    >
                        <TransitionGroup component={null}>
                            {advantagesMethods.fields.map(({ id }, index) => (
                                <CSSTransition
                                    timeout={{
                                        enter: 500,
                                        exit: 300,
                                    }}
                                    key={id}
                                    classNames={{
                                        enter: cl.enter,
                                        enterActive: cl.enter_active,
                                        exit: cl.exit,
                                        exitActive: cl.exit_active,
                                    }}
                                >
                                    <HStack columnGap="16">
                                        <Input
                                            id={`field-advatages-${index + 1}`}
                                            {...register(`advantages.${index}.advantage` as const)}
                                            isValidate={false}
                                            isDirty={
                                                dirtyFields.advantages?.[index]?.advantage &&
                                                watch("advantages")[index].advantage !== ""
                                            }
                                        />
                                        <Button
                                            theme="clear"
                                            themeType="icon"
                                            onClick={handleDelete(index)}
                                            onMouseEnter={handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave(index)}
                                        >
                                            <Svg
                                                theme={isHover[index] ? "purple" : "grey"}
                                                Svg={DeleteSvg}
                                            />
                                        </Button>
                                    </HStack>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </VStack>
                    <Button
                        theme="without_filling"
                        themeType="icon"
                        onClick={onAdd}
                    >
                        <PlusSvg />
                    </Button>
                </VStack>
                <CheckBoxGroup
                    options={defaultCheckBoxOptions}
                    label="Группа чекбоксов"
                    {...register("checkBoxGroup")}
                />
                <RadioGroup
                    options={defaultRadioOptions}
                    label="Группа радио"
                    {...register("radioGroup")}
                />
            </VStack>
            <ButtonsControlStep onBack={onBack} />
        </VStack>
    );
});
