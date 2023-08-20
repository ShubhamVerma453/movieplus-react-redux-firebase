import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    watchlist: {}
};

export const WatchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addWatchlist: (state, action) => {
            state.watchlist = { ...state.watchlist, ...action.payload };
        },
        removeWatchlist: (state, action) => {
            delete state.watchlist[action.payload];
        }
    }
});

export const { addWatchlist, removeWatchlist } = WatchlistSlice.actions;
export const selectWatchlist = (state) => state.watchlist.watchlist;
export default WatchlistSlice.reducer;
