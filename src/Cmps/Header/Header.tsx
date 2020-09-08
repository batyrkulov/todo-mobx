import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { PropsWithStoreType } from '../../index'
import { HeaderContent, Input, Btn as Button } from './HeaderStyledComponents'

const Header: React.FC<PropsWithStoreType> = observer(({ store }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.updateFieldText(event.target.value)
  }

  return <HeaderContent>
    <Input value={store.fieldText} onChange={handleChange} />
    <Button
      onClick={() => {
        store.createTask()
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  </HeaderContent>
})

export default Header
