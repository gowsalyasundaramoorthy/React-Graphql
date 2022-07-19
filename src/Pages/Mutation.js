import React from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int!){
    createProduct(record: {
        name: $name,
        quantityPerUnit: $quantityPerUnit
    }){
        record{
            name
        }
    }

}`



export default function Mutation() {
    const [createProduct, {data, error, loading}] = useMutation(CREATE_PRODUCT, { 
        variables: {
            name: 'Hotdog',
            quantityPerUnit: 3
        }
    })
  return (
      <div>
         <button onClick={()=> createProduct()}></button> 


    </div>
  )
}
