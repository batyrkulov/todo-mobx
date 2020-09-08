import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ModalDiv, ModalSubDiv, Btn as Button } from './ModalStyledComponents'

type PropsType = {
  answer: (b: boolean) => void
}

const Modal: React.FC<PropsType> = ({ answer }) => <ModalDiv>
  <ModalSubDiv>
    Are you sure ?
    <Button onClick={() => {
      answer(true)
    }}
    >
      <FontAwesomeIcon icon={faCheck} />
    </Button>
    <Button onClick={() => {
      answer(false)
    }}
    >
      <FontAwesomeIcon icon={faTimes} />
    </Button>
  </ModalSubDiv>
</ModalDiv>

export default Modal
