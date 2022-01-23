import React from 'react'
import { useState } from 'react'
import useDebounce from './useDebounce'


const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value)
  const debounceChange = useDebounce(onChange, 500)

  function handleOnChange(event) {
    setDisplayValue(event.target.value)
    debounceChange(event.target.value)
  }

  return (
    <input type="search" value={displayValue} onChange={handleOnChange} />
  )
}

export default SearchInput