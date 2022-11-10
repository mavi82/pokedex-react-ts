import React, { useState } from 'react'

export const Search: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>('')

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (textSearch) console.log(textSearch)
  }

  return (
    <>
      <h2>Name</h2>
      <input
        type="text"
        placeholder="cerca un pokemon"
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <button className="button-primary" onClick={clickHandler}>
        Cerca
      </button>
    </>
  )
}
