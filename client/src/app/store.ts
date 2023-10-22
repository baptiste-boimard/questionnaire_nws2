import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// == IMPORT REDUCER ==
import rootReducer from './reducers';


export const store = configureStore({
  reducer: rootReducer,
});

/*Exportation des types RootState et AppDispatch 
pour typer useSelector et useDispatch dans hooks.tsx*/
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

