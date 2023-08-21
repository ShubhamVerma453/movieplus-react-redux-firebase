import { createSlice } from '@reduxjs/toolkit';

const getWatchlistFromLocal = () => {
    let localWatchlist = localStorage.getItem("localWatchlist");
    if (localWatchlist) return JSON.parse(localStorage.getItem("localWatchlist"));
    return {};
}

const initialState = {
    watchlist: getWatchlistFromLocal()
};

export const WatchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        addWatchlist: (state, action) => {
            state.watchlist = { ...state.watchlist, ...action.payload };
            localStorage.setItem("localWatchlist", JSON.stringify(state.watchlist));
        },
        removeWatchlist: (state, action) => {
            delete state.watchlist[action.payload];
            localStorage.setItem("localWatchlist", JSON.stringify(state.watchlist));
        },
        emptyWatchlist: (state) => {
            state.watchlist = {};
            localStorage.removeItem("localWatchlist")
        }
    }
});

export const { addWatchlist, removeWatchlist, emptyWatchlist } = WatchlistSlice.actions;
export const selectWatchlist = (state) => state.watchlist.watchlist;
export default WatchlistSlice.reducer;
