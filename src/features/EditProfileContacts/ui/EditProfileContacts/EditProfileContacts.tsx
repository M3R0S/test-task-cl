import { FC, memo, useCallback } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIMask } from "react-imask";

import cl from "./EditProfileContacts.module.scss";
import { EditProfileContactsSchema } from "./EditProfileContacts.schema";
import { EditProfileContactsProps } from "./EditProfileContacts.types";
import {
    getProfileContactsEmail,
    getProfileContactsPhone,
} from "../../model/selectors/getProfileContacts";
import { editProfileContactsActions } from "../../model/slice/editProfileContactsSlice";

import { PathRoutes } from "shared/config/router/pathRoutes";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { VStack } from "shared/ui/Stack";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";

export const EditProfileContacts: FC<EditProfileContactsProps> = memo((props) => {
    const { className } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const email = useAppSelector(getProfileContactsEmail);
    const phone = useAppSelector(getProfileContactsPhone);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, dirtyFields },
    } = useForm<EditProfileContactsSchema>({
        resolver: yupResolver(EditProfileContactsSchema),
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
        (data: EditProfileContactsSchema) => {
            dispatch(editProfileContactsActions.setProfileContacts(data));
        },
        [dispatch]
    );

    const onStart = useCallback(() => {
        navigate(PathRoutes.CREATE);
    }, [navigate]);

    const { name, onBlur, ref, onChange } = register("phone");

    return (
        <VStack
            Tag="form"
            onSubmit={handleSubmit(onSubmit)}
            className={classNames(cl.edit_profile_contacts, className)}
            gap="24"
            alignItems="start"
        >
            <Input
                name={name}
                ref={(el: HTMLInputElement) => {
                    ref(el);
                    maskRef.current = el;
                }}
                label="Номер телефона"
                validateMessage={errors.phone?.message}
                isDirty={value !== phone && value !== ""}
                type="tel"
                onChange={onChange}
                onBlur={onBlur}
                placeholder="+7 (900) 000-00-00"
                autoComplete="phone"
                isDisabled={true}
                inputSize="400"
            />
            <Input
                {...register("email")}
                label="Email"
                validateMessage={errors.email?.message}
                isDirty={dirtyFields.email || watch("email") !== ""}
                type="email"
                placeholder="tim.jennings@example.com"
                autoComplete="email"
                isDisabled={true}
                inputSize="400"
            />
            <Button
                theme="filling"
                type="submit"
                onClick={onStart}
                id="button-start"
            >
                Начать
            </Button>
        </VStack>
    );
});
