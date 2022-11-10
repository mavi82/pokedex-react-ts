import React, { useEffect, useState } from 'react'
import { httpRequest } from '../../BusinessLogic/fetchHelper'

export const Search: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>('')

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (textSearch) console.log(textSearch)
  }

  type Post = {
    id: string
    userId: number
    title: string
    body: string
  }

  useEffect(() => {
    async function getData() {
      const request = new Request(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'post',
          body: JSON.stringify({
            title: 'my post',
            body: 'some content',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )

      const response = await httpRequest<Post>(request)
      console.log(response);

    }

    getData();
    
  }, [])

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
