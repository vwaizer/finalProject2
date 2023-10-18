import React from 'react'
import styled from 'styled-components'

const ItemDetail=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`;
const ItemBlock=styled.div`
    width:30%;
    height:100px;   
`
;
const ItemContainer = (props) => {
  return (
    <ItemBlock >
        <img src='' alt=''></img>
        <ItemDetail>
            <div>{props.title}</div>
            <div>{props.price}</div>
        </ItemDetail>
        
    </ItemBlock>
  )
}

export default ItemContainer