import { useQuery } from 'react-query'
import { requests } from '../../app/api'
import { Breed } from '../../app/models'

export const useDogs = (limit: number = 5) => {
  const {
    data: dogs = [],
    isLoading,
    isError,
    isFetching,
  } = useQuery<Breed[]>(['dogsData', limit], () => requests.getBreeds(limit), {
    keepPreviousData: true,
  })
  return { dogs, isLoading, isError, isFetching }
}
