import { useEffect, useState } from 'react';
import SearchInput from './SearchInput'
import './App.css';

export default function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')

  useEffect(() => {
    setInfo({})
    if (text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=12`)
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
      {text && !info.data && (
        <span>Carregando ...</span>
      )}
      {info.data && (
        < ul className="anime-list" >
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div >
  )
}