import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_POKEMONS_DETAILS = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;


export const useGetPokemonsDetails = (id:any, name:any) => {
  const { data, loading, error } = useQuery(GET_POKEMONS_DETAILS, {
    skip: !id || !name,
    variables: { id, name },
  });

  return { data: data, loading, error };
};
