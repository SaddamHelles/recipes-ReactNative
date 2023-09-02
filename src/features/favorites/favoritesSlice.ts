import { createSlice } from '@reduxjs/toolkit';

type State = { ids: string[] };
type Action = { payload: { id: string }; type: string };
const initialState: State = { ids: [] };
const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: Action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action: Action) => {
            const idIndex = state.ids.indexOf(action.payload.id);
            state.ids.splice(idIndex, 1);
        },
    },
});

export const { addFavorite, removeFavorite } = favorites.actions;
export default favorites.reducer;
