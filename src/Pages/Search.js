import React, { useState } from 'react'
import { gql } from '@apollo/client'
import { useLazyQuery } from '@apollo/client';


const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocation($name: String!){
  characters(filter:{
    name: $name
  }){
    results{
      location{
      name
    }
  }
}
}`;


export default function Search() {
    const [name, setName] = useState(" ")

const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS,
    {
    variables: {
        name,
        },
    })



    console.log({
        error,
        loading,
        data,
        called
    })
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => getLocations()}>Search</button>
          
            {loading && <div>spinner...</div>}
            {error && <div>something went wrong...</div>}
            {data && (
                <ul>
                    {data.characters.results.map(character => {
                        return <li>{character.location.name}</li>
                    })
                    }
                </ul>
            )}

        </div>
    );
}
