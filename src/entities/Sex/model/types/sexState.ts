export const Sex = {
    man: "Мужчина",
    woman: "Женщина",
    notDefined: "Не определено",
} as const;

export type Sex = ValueOf<typeof Sex>;

