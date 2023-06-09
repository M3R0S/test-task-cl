import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "app/providers/Redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

