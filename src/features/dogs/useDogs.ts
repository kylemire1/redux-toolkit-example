import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

export const useDogs = (limit: number = 5) => {
  const { data, isLoading, isError, isFetching } = useQuery<Breed[], any>(
    ['dogsData', limit],
    ({ queryKey: [, limit] }) => {
      const result = fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}`)
        .then((res) => res.json())
        .then((result: Breed[]) => result)

      return result
    }
  )

  return { data, isLoading, isError, isFetching }
}
