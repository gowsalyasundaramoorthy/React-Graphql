import React from 'react'
import { useParams } from 'react-router'
import { useCharacter } from '../Hooks/useCharacter'
import './Character.css'

export default function Character() {
    const {id} = useParams()
    const { data, error, loading } = useCharacter(id) 
    
    
    if (error) return <div>Something went wrong..</div>
    if(loading) return <div>spinner...</div>
    
    return <div className='Character'>
        <img src={data.character.image} width={750} height={750}></img>
        <div className='CharacterContent'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
        </div>
        <div className='CharacterEpisode'>
            {data.character.episode.map(episode => {
                return <div>
                    {episode.name}
                    {episode.episode}

                </div>


            })}
            

        </div>
    
    
    </div>
  
}
