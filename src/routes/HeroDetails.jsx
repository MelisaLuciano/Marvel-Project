import { useEffect, useState } from 'react';

import { fetchHero } from '../utils/utils'
import { useParams } from 'react-router-dom';

export default function HeroDetails() {
  let { id } = useParams();

  const[ hero, setHero ] = useState();

  useEffect(() => {
    fetchHero(id)
    .then((data) => setHero(data[0]))
    .catch((err) =>  console.error(err));
  }, []);

  if(!hero) return

  return (
    <div className='container large'>
      <div className='hero__details-container'>
        <img src={ `${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero full" />
        <div className='hero__details'>
          <h4>Name</h4>
          <p>{hero.name}</p>
          {hero.description ? (<>
            <h4>Description</h4>
            <p>{hero.description}</p>
          </>) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {
              hero.series.items.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
