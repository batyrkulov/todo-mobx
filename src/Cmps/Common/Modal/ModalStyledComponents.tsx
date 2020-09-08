import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

export const Btn = styled(Button)`
  font-size: 40px;
  padding: 7px;
`

export const ModalSubDiv = styled.div`
  position: fixed;
  top: 40%;
  left: 40%;
  padding: 20px;
  font-size: large;
  border: 9px #A5D6A7 solid;
  border-radius: 15px;
  background-color: #1B5E20;
  color: #E0E0E0;
`

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128,128,128,0.5);
  display: block;
`
