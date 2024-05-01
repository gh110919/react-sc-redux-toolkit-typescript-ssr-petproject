import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { actions } from "./actions";
import { reducers } from "./reducers";
import { dispatchers } from "./dispatchers";

// экшены
export const rootAction = actions;

// редукторы
export const rootReducer = reducers;

// диспетчеры
export const rootDispatchers = dispatchers;

// энтрипоинт для приложения
export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// типы хуков
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

// типизированые хуки
export const useDispatch_: () => AppDispatch = useDispatch;
export const useSelector_: TypedUseSelectorHook<RootState> = useSelector;
