import React from 'react'


const SearchInput = ({ value, onChange }) => {

  function handleOnChange(event) {
    onChange(event.target.value)
  }

  return (
    <input type="search" value={value} onChange={handleOnChange} />
  )
}

export default SearchInput