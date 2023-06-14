export const Sex = {
    man: "Мужчина",
    woman: "Женщина",
} as const;

export type Sex = ValueOf<typeof Sex>;

