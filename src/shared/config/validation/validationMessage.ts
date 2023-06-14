export const ValidationMessage = {
    required: "Обязательное поле",
    email: "Email может состоять только из латинских букв, цифр, спецсимволов, @ и домена, например: .ru, .com",
    phone: "Номер телефона должен состоять из 11 цифр",
    nickname: "Ник может состоять только из букв латинского алфавита и цифр",
    nicknameMaxLength: "Ник не должен быть длиннее 30 символов",
    name: "Имя должно состоять только из букв латинского или кириллического алфавита",
    nameMaxLength: "Имя не может превышать 50 букв",
    surname: "Фамилия должна состоять только из букв латинского или кириллического алфавита",
    surnameMaxLength: "Фамилия не может превышать 50 букв",
    aboutMaxLength: "Длина текста не может превышать 200 символов",
} as const;

export type ValidationMessage = ValueOf<typeof ValidationMessage>;

