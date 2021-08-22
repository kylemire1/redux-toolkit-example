import React, { useState } from 'react'
import { useFetchBreedsQuery } from '../features/dogs/dogsApiSlice'

const Dogs = () => {
  const [numDogs, setNumDogs] = useState(5)
  const {
    data = [],
    isLoading,
    isError,
    isFetching,
  } = useFetchBreedsQuery(numDogs)
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
      {isFetching && <p>Fetching dogs...</p>}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          padding: '2em',
        }}
      >
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Error fetching dogs</h1>}
        {data.map((breed) => {
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
