import {Action, AnyAction, combineReducers, configureStore, ThunkAction,} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {TypedUseSelectorHook, useSelector} from "react-redux";


const combinedReducer = combineReducers({});

const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export const makeStore = () =>
    configureStore({
        reducer,
    });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const wrapper = createWrapper(makeStore, {debug: false});