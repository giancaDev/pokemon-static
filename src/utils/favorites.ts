import { FAVORITES_KEY } from '@/globals';

const getFavorites = (): number[] => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]');
};

const setFavorites = (favorites: number[]): void => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const toggle = (pokemonId: number): void => {
  const favorites: number[] = getFavorites();

  if (favorites.includes(pokemonId)) {
    const newFavorites = favorites.filter((pokeId) => pokeId !== pokemonId);
    setFavorites(newFavorites);
    return;
  }

  favorites.push(pokemonId);
  setFavorites(favorites);
};

const existsInFavorites = (pokemonId: number): boolean => {
  const favorites = getFavorites();
  return favorites.includes(pokemonId);
};

export default { toggle, existsInFavorites, getAll: getFavorites };
