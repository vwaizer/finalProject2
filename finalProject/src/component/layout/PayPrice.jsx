import React from 'react'
import { Title } from '../../page/PaymentForm'
import { Typography } from 'antd';
import styled from 'styled-components';
const PriceContainer = styled.div`
  display: flex; justify-content: space-between;
`
const { Text } = Typography;
const PayPrice = ({title, price}) => {
  return (
    <PriceContainer>
            <Title>{title}</Title>
            <div style={{ padding: 'auto' }}>
              <Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#a73340' }}>
                ${price}
              </Text>
            </div>
          </PriceContainer>
  )
}

export default PayPrice