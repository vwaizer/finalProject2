import React from 'react'
import styled from 'styled-components'

const ItemDetail=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`;
const ItemBlock=styled.div`
    width:30%;
    height:150px;  
    border:2px solid black; 
`
;
const ItemContainer = (props) => {
  return (
    <ItemBlock >
        <img src='' alt='' style={{width:"100px",height:"100px"}}></img>
        <ItemDetail>
            <div>{props.title}</div>
            <div>{props.price}</div>
        </ItemDetail>
        
    </ItemBlock>
  )
}

export default ItemContainer