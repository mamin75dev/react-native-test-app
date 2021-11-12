import { AnyAction } from "redux";

interface AppState { };

const initialState: AppState = {};

export const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}