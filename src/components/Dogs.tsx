import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { breedsFetched } from '../features/dogs/actions'

const Dogs = () => {
  const [numDogs, setNumDogs] = useState(5)
  const dispatch = useDispatch()
  const { breeds: dogs, isLoading, isError } = useSelector((state: any) => state.dogs)

  useEffect(() => {
    dispatch(breedsFetched(numDogs))
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
        {dogs.map((d: any) => {
          return (
            <div key={d.id}>
              <h2>{d.name}</h2>
              <img
                src={d.image.url}
                alt={d.name}
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
