import React, {useCallback, useState} from 'react'

export default function useArray(initialArray) {
  const [value, setValue] = useState(initialArray)
  return ({
    value,
    setValue,
    insert: useCallback((newValue, index) => {
      setValue(v => [v.slice(0, index), newValue, v.slice(index)])
    }, []),
    clear: useCallback(() => setValue([]), []),
    rev: useCallback(() => { setValue([...value.reverse()]) }, [value]),
    list: useCallback(() => <p>{value.join(', ')}</p>, [value])
  })
}