import { FC, memo, FormHTMLAttributes, useCallback } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useIMask } from "react-imask";
import { useNavigate } from "react-router-dom";

import cl from "./EditFormMain.module.scss";
import { EditFormMainProps } from "./EditFormMain.types";
import { getFormEmail, getFormPhone } from "../../model/selectors/getForm";
import { editFormActions } from "../../model/slice/editFormSlice";

import { ValidationMessage } from "shared/config/validation/validationMessage";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";
import { VStack } from "shared/ui/Stack";

const phoneRegExp =
    /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;

const emailRegExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const schema = yup
    .object({
        phone: yup
            .string()
            .required(ValidationMessage.required)
            .matches(phoneRegExp, ValidationMessage.phone),
        email: yup
            .string()
            .required(ValidationMessage.required)
            .matches(emailRegExp, ValidationMessage.email),
    })
    .required();
export type EditFormMainSchema = yup.InferType<typeof schema>;

export const EditFormMain: FC<EditFormMainProps> = memo((props) => {
    const { className } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const email = useAppSelector(getFormEmail);
    const phone = useAppSelector(getFormPhone);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid, dirtyFields },
    } = useForm<EditFormMainSchema>({
        resolver: yupResolver(schema),
        mode: "all",
        defaultValues: {
            email,
            phone,
        },
    });

    const { ref: maskRef, value } = useIMask({
        mask: "+{7} (000) 000-00-00",
    });

    const onSubmit = useCallback(
        (data: EditFormMainSchema) => {
            dispatch(editFormActions.setFormMain(data));
        },
        [dispatch]
    );

    const onClick = useCallback(() => {
        navigate(PathRoutes.CREATE_1, {
            state: {
                create: "1",
            },
        });
    }, [navigate]);

    const { name, onBlur, ref, onChange } = register("phone");

    return (
        <VStack<FormHTMLAttributes<HTMLFormElement>>
            Tag="form"
            onSubmit={handleSubmit(onSubmit)}
            className={classNames(cl.edit_form_main, className)}
            gap="24"
            alignItems="start"
        >
            <Input
                name={name}
                ref={(el: HTMLInputElement) => {
                    ref(el);
                    maskRef.current = el;
                }}
                theme="secondary"
                label="Номер телефона"
                validateMessage={errors.phone?.message}
                isDirty={value !== phone && value !== ""}
                type="tel"
                onChange={onChange}
                onBlur={onBlur}
                placeholder="+7 (900) 000-00-00"
                autoComplete="phone"
            />
            <Input
                theme="secondary"
                {...register("email")}
                label="Email"
                validateMessage={errors.email?.message}
                isDirty={dirtyFields.email || watch("email") !== ""}
                type="email"
                placeholder="tim.jennings@example.com"
                autoComplete="email"
            />
            <Button
                theme="filling"
                isDisabled={!isValid}
                type="submit"
                onClick={onClick}
            >
                Начать
            </Button>
        </VStack>
    );
});
