import { useEffect, useState } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useStaleDataUntilSuccess = <T extends any[]>(data: T) => {
  const [staleData, setStaleData] = useState(data)

  useEffect(() => {
    if (data.length > 0) {
      setStaleData(data)
    }
  }, [data])

  return { staleData, setStaleData }
}
