import { useEffect, useState } from 'react';

import { Layout } from "../../components/layout";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { Container, Grid,Card } from '@nextui-org/react';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';

const FavoritesPages = () => {

  const [ favoritePokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(()=>{
    setFavoritesPokemons(localFavorites.pokemons());

  },[])

  return (
    <Layout title="Favoritos">
        {
          favoritePokemons.length === 0?
          <NoFavorites/>
          :
          <FavoritePokemons pokemons={favoritePokemons}/>
        }
    </Layout>
  );
};

export default FavoritesPages;
