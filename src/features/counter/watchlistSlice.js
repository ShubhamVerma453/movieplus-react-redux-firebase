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
        },
        emptyWatchlist: (state) => {
            state.watchlist = {};
        }
    }
});

export const { addWatchlist, removeWatchlist, emptyWatchlist } = WatchlistSlice.actions;
export const selectWatchlist = (state) => state.watchlist.watchlist;
export default WatchlistSlice.reducer;
