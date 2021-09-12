import { useQuery } from 'react-query'
import { Breed } from '../../app/models'

export const useDogs = (limit: number = 5) => {
  const {
    data: dogs = [],
    isLoading,
    isError,
    isFetching,
  } = useQuery<Breed[], any, Breed[], ['dogsData', number]>(
    ['dogsData', limit],
    ({ queryKey: [, limit] }) => {
      const result = fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}`)
        .then((res) => res.json())
        .then((result: Breed[]) => result)

      return result
    },
    { refetchOnWindowFocus: false }
  )

  return { dogs, isLoading, isError, isFetching }
}
