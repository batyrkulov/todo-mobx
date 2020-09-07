import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { PropsWithStoreType } from '../../index'
import style from './Header.module.css'

const Header: React.FC<PropsWithStoreType> = observer(({ store }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.updateFieldText(event.target.value)
  }

  return <nav className={style.header}>
    <input className={style.inp} value={store.fieldText} onChange={handleChange} />
    <button
      type="submit"
      className={`${style.btn} customBtn`}
      onClick={() => {
        store.createTask()
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </nav>
})

export default Header
