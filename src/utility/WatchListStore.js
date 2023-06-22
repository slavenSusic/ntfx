import {create} from 'zustand';

export const useWatchlistStore = create((set) => ({
  watchlist: [],
  addToWatchlist: (movie) => set((state) => ({ watchlist: [...state.watchlist, movie] })),
  removeFromWatchlist: (movieId) =>
    set((state) => ({ watchlist: state.watchlist.filter((movie) => movie.id !== movieId) })),
}));