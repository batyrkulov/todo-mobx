import React from 'react'
import styled from 'styled-components'
import Button from '../../Common/Button/Button'

export const TaskBlock = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  min-height: 40px;
  min-width: 90%;
  border: 1px solid green;
  border-radius: 10px;
  margin: 7px;
  padding-left: 13px;
  padding-right: 13px;
  background-color: #81C784;
`

export const TaskName = styled.span`
  font-size: larger;
  color: #455A64;
`

export const TaskTimeAndBtns = styled.div`
  align-self: start;
  justify-self: end;
  padding: 3px;
`

export const TaskTime = styled.span`
  padding-right: 15px;
  font-size: 15px;
  color: #616161;
`

export const TaskBtn = styled(Button)`
  font-size: large;
  color: #FFB74D;
`
