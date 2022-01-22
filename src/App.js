import { useEffect, useState } from 'react';
import SearchInput from './SearchInput'
import './App.css';

export default function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')

  useEffect(() => {
    if (text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
          console.log(response)
        })
    }
  }, [text])

  return (
    <div>
      <h1>Animes</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      {info.data && (
        < ul >
          {info.data.map((anime) => (
            <li key={anime.id}>
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div >
  )
}