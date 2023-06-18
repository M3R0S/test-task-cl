import { FC, memo, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import cl from "./EditFormCreateThree.module.scss";
import { EditFormCreateThreeProps } from "./EditFormCreateThree.types";
import { EditFormCreateThreeSchema } from "./EditFormCreateThree.schema";
import { getFormAbout, getFormCreate } from "../../model/selectors/getFormCreate";
import { useSendFormCreateMutation } from "../../model/services/sendFormCreateApi";
import { editFormActions } from "../../model/slice/editFormCreateSlice";
import { ButtonsControlStep } from "../ButtonsControlStep/ButtonsControlStep";
import { SendFormModal } from "../SendFormModal/SendFormModal";

import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { VStack } from "shared/ui/Stack";
import { Textarea } from "shared/ui/Textarea";

export const EditFormCreateThree: FC<EditFormCreateThreeProps> = memo((props) => {
    const { className, setPageNumber, step } = props;

    const dispatch = useAppDispatch();

    const formCreate = useAppSelector(getFormCreate);
    const about = useAppSelector(getFormAbout);

    const {
        register,
        formState: { errors, dirtyFields, isSubmitSuccessful },
        watch,
        handleSubmit,
    } = useForm<EditFormCreateThreeSchema>({
        mode: "all",
        resolver: yupResolver(EditFormCreateThreeSchema),
        defaultValues: { about },
    });

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const [trigger, { isLoading, isError, data }] = useSendFormCreateMutation();

    console.log(data);

    const onClose = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    const onBack = useCallback(() => {
        setPageNumber("2");
    }, [setPageNumber]);

    const onSubmit = useCallback(
        (data: EditFormCreateThreeSchema) => {
            dispatch(editFormActions.setFormCreateThree(data));
            setIsModalOpened(true);
        },
        [dispatch]
    );

    useEffect(() => {
        if (isSubmitSuccessful) {
            trigger(formCreate);
        }
    }, [isSubmitSuccessful, formCreate, trigger]);

    return (
        <VStack
            rowGap="64"
            Tag="form"
            onSubmit={handleSubmit(onSubmit)}
            className={classNames(cl.edit_form_create_three, className)}
        >
            <Textarea
                id="field-about"
                label="О вас"
                {...register("about")}
                validateMessage={errors.about?.message}
                isDirty={dirtyFields.about}
                quantitySymbols={watch("about").replace(/\s/g, "").length}
            />
            <ButtonsControlStep
                onBack={onBack}
                step={step}
            />
            <SendFormModal
                isOpened={isModalOpened}
                onClose={onClose}
                isError={isError}
                isLoading={isLoading}
                data={data}
            />
        </VStack>
    );
});
