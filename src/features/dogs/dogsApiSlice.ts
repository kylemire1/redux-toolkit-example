import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = import.meta.env.VITE_DOG_API_KEY as string

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

export const dogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', API_KEY)
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`
        },
      }),
    }
  },
})

export const { useFetchBreedsQuery } = dogsApiSlice
