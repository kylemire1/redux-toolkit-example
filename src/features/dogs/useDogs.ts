import { useState, useEffect } from 'react'

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

export const useDogs = (limit = 5) => {
  const [dogs, setDogs] = useState<Array<Breed>>([])
  const [numDogs, setNumDogs] = useState(limit)
  const [loadingState, setLoadingState] = useState<'PENDING' | 'LOADING' | 'ERROR'>(
    'PENDING'
  )
  const isLoading = loadingState === 'LOADING'
  const isError = loadingState === 'ERROR'

  useEffect(() => {
    setLoadingState('LOADING')
    fetch(`https://api.thedogapi.com/v1/breeds?limit=${numDogs}`)
      .then((res) => res.json())
      .then((result: Array<Breed>) => {
        console.log(result)
        setDogs(result)
        setLoadingState('PENDING')
      })
      .catch(() => setLoadingState('ERROR'))
  }, [numDogs])

  return { dogs, setNumDogs, isLoading, isError, numDogs }
}
