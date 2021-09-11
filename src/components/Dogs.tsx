import React, { useState, useEffect } from 'react'

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}

const Dogs = () => {
  const [dogs, setDogs] = useState<Array<Breed>>([])
  const [numDogs, setNumDogs] = useState(5)
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
        setDogs(result)
        setLoadingState('PENDING')
      })
      .catch(() => setLoadingState('ERROR'))
  }, [numDogs])

  return (
    <>
      <section>
        <label
          style={{ fontWeight: 'bold', marginTop: '4rem', display: 'block' }}
          htmlFor='num-dogs'
        >
          Number of dogs to fetch:{' '}
        </label>
        <select
          id='num-dogs'
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </section>
      {isLoading && <p>Fetching dogs...</p>}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          padding: '2em',
        }}
      >
        {isError && <h1>Error fetching dogs</h1>}
        {dogs.map((breed: any) => {
          return (
            <div key={breed.id}>
              <h2>{breed.name}</h2>
              <img
                src={breed.image.url}
                alt={breed.name}
                style={{ objectFit: 'cover', width: '100%', height: '350px' }}
              />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Dogs
