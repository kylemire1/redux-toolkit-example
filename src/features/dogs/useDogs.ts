import { QueryFunctionContext, useQuery } from 'react-query'
import { Breed } from '../../app/models'

const queryKeyName = 'dogsData'
type QueryKey = [typeof queryKeyName, number]

export const useDogs = (limit: number = 5) => {
  const {
    data: dogs = [],
    isLoading,
    isError,
    isFetching,
  } = useQuery<Breed[], any, Breed[], QueryKey>([queryKeyName, limit], fetchBreeds, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
  return { dogs, isLoading, isError, isFetching }
}

function fetchBreeds(queryFnContext: QueryFunctionContext<QueryKey>) {
  const {
    queryKey: [, limit],
  } = queryFnContext
  const result = fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}`)
    .then((res) => res.json())
    .then((result: Breed[]) => result)

  return result
}
