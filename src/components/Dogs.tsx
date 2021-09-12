import React, { useState } from 'react'
import { useDogs } from '../features/dogs/useDogs'

const Dogs = () => {
  const [numDogs, setNumDogs] = useState(5)
  const { dogs, isError } = useDogs(numDogs)

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
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          padding: '2em',
        }}
      >
        {isError && <h1>Error fetching dogs</h1>}
        {dogs.map((breed) => {
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
