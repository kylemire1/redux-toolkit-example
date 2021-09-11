import { DOGS_DATA_SET, DOGS_LOADING_STATE_SET } from './types'

export const breedsFetched = (numDogs: number) => async (dispatch: any) => {
  dispatch(loadingSet())

  const res = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${numDogs}`)
  if (!res.ok) {
    dispatch(errorSet())
    return
  }
  const result = await res.json()

  dispatch(dataSet(result))
  dispatch(successSet())
}

export const errorSet = () => ({
  type: DOGS_LOADING_STATE_SET,
  payload: 'ERROR',
})
export const successSet = () => ({
  type: DOGS_LOADING_STATE_SET,
  payload: 'SUCCESS',
})
export const loadingSet = () => ({
  type: DOGS_LOADING_STATE_SET,
  payload: 'LOADING',
})
export const dataSet = (data: any) => ({
  type: DOGS_DATA_SET,
  payload: data,
})
