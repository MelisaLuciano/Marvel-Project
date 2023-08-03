import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

const IMAGE_SIZE = 'portrait_fantastic'

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  let cards;

  if (heroes){
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        id={hero.id}
        key={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
    />
    ));
  }

  return (
    <div className='container'>
      <div className='title'>
        <a href="/">
          <img className="logo" src='/src/assets/mar.png'/>
        </a>
      </div>
      <SearchBar setter={setHeroes}/>
      <div className='grid'>
        {cards ? cards : ""}
      </div>
    </div>
  )
}
