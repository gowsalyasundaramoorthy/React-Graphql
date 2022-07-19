
import React from 'react'
import { Link } from 'react-router-dom'
import { useCharacters } from '../Hooks/useCharacters'
import './CharacterList.css'





export default function CharacterList() {
  const {error, loading, data} = useCharacters()

  console.log({ error, loading, data })
  
  if (loading) return <div>spinner...</div>
  if(error) return <div>something went wrong...</div>



  return (
    <div className='characterList'>

      {data.characters.results.map(
        character => {
          return (
            <Link to={`/${character.id}`}> 
              <img src={character.image}></img>
              <h2>{character.name}</h2>
              

            </Link>
    
          
      )
        }
      )}
      

      </div>
  )
}
