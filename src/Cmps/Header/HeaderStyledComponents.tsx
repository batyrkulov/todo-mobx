import React from 'react'
import styled from 'styled-components'
import Button from '../Common/Button/Button'

export const HeaderContent = styled.div`
  grid-area: nav;
  text-align: center;
  padding: 15px;
  position: fixed;
  width: 100%;
  margin-bottom: 100px;
  background-color: #4CAF50;
`
export const Input = styled.input`
  min-height: 30px;
  min-width: 200px;
  margin-right: 20px;
  font-size: large;
  border-radius: 10px;
  border: 2px solid #E0E0E0;
  color: #757575;
  outline: none;  
`
export const Btn = styled(Button)`
  font-weight: bolder;
  font-size: 20px;
  `
