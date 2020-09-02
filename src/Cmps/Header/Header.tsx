import React from "react";
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {observer} from "mobx-react"
import {PropsWithStoreType} from '../../index'


const Header : React.FC<PropsWithStoreType> = observer(({store})=>{

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        store.updateFieldText(event.target.value);
    }

    return <nav className={style.header}>
        <input className={style.inp} value={store.fieldText} onChange={handleChange}/>
        <button className={style.btn+' customBtn'} onClick={()=>{store.createTask()}}><FontAwesomeIcon icon={faPlus}/></button>
    </nav>
})

export default Header;