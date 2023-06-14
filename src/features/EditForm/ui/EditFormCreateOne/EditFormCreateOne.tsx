import { FC, FormHTMLAttributes, memo } from "react";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import cl from "./EditFormCreateOne.module.scss";
import { EditFormCreateOneProps } from "./EditFormCreateOne.types";
import {
    getFormName,
    getFormNickname,
    getFormSex,
    getFormSurname,
} from "../../model/selectors/getForm";
import { editFormActions } from "../../model/slice/editFormSlice";

import { Sex, SexSelect } from "entities/Sex";
import { ValidationMessage } from "shared/config/validation/validationMessage";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { HStack, VStack } from "shared/ui/Stack";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";

const schema = yup
    .object({
        nickname: yup
            .string()
            .required(ValidationMessage.required)
            .matches(/^[a-zA-Z0-9]+$/, ValidationMessage.nickname)
            .max(30, ValidationMessage.nicknameMaxLength),
        name: yup
            .string()
            .required(ValidationMessage.required)
            .max(50, ValidationMessage.nameMaxLength)
            .matches(/^[a-zA-Zа-яА-Я]+$/, ValidationMessage.name),
        surname: yup
            .string()
            .required(ValidationMessage.required)
            .max(50, ValidationMessage.surnameMaxLength)
            .matches(/^[a-zA-Zа-яА-Я]+$/, ValidationMessage.surname),
        sex: yup.object({
            value: yup.mixed<keyof typeof Sex>().required(ValidationMessage.required),
            label: yup.mixed<Sex>().required(ValidationMessage.required),
        }),
    })
    .required();
export type EditFormCreateOneSchema = yup.InferType<typeof schema>;

export const EditFormCreateOne: FC<EditFormCreateOneProps> = memo((props) => {
    const { className, setPageNumber } = props;

    const name = useAppSelector(getFormName);
    const surname = useAppSelector(getFormSurname);
    const nickname = useAppSelector(getFormNickname);
    const sex = useAppSelector(getFormSex);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { dirtyFields, errors },
    } = useForm<EditFormCreateOneSchema>({
        resolver: yupResolver(schema),
        mode: "all",
        defaultValues: {
            name: name,
            nickname: nickname,
            surname: surname,
            sex: sex,
        },
    });

    const onSubmit = (data: EditFormCreateOneSchema) => {
        dispatch(editFormActions.setFormCreateOne(data));
    };

    const onNext = () => {
        setPageNumber?.("2")
    };

    const onBack = () => {
        navigate(-1);
    };

    return (
        <VStack<FormHTMLAttributes<HTMLFormElement>>
            className={classNames(cl.edit_form_create_one, className)}
            Tag="form"
            rowGap="24"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                {...register("nickname")}
                theme="primary"
                label="Ник"
                placeholder="M3R0S"
                validateMessage={errors.nickname?.message}
                isDirty={dirtyFields.nickname}
            />
            <Input
                {...register("name")}
                theme="primary"
                label="Имя"
                placeholder="Богдан"
                validateMessage={errors.name?.message}
                isDirty={dirtyFields.name}
            />
            <Input
                {...register("surname")}
                theme="primary"
                label="Фамилия"
                placeholder="Москаленко"
                validateMessage={errors.surname?.message}
                isDirty={dirtyFields.surname}
            />
            <Controller
                name="sex"
                control={control}
                render={({ field, fieldState }) => (
                    <SexSelect
                        validateMessage={errors.sex?.value?.message}
                        isDirty={fieldState.isDirty}
                        {...field}
                    />
                )}
            />
            <HStack
                className={cl.btn_wrapper}
                justifyContent="space_between"
            >
                <Button
                    onClick={onBack}
                    theme="without_filling"
                >
                    Назад
                </Button>
                <Button
                    type="submit"
                    theme="filling"
                    onClick={onNext}
                >
                    Далее
                </Button>
            </HStack>
        </VStack>
    );
});
