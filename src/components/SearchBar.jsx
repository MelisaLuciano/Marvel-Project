import { fetchHeroes } from '../utils/utils';
import { useRef } from 'react'

export default function SearchBar({ setter }) {
  let input = useRef('');

  const handleClick = async (event) => {
    event.preventDefault();
    let value = input.current.value
    if(value === "") return

    try{
      let heroes = await fetchHeroes(value)
      setter(heroes)
    }catch(err) {
      console.error(err)
    }
  }

  return (
    <form>
      <input className="searcher" type="text" placeholder='Search Hero' ref={input} />
      <button onClick={handleClick}>Search</button>
    </form>
  )
}
