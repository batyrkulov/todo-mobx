import React, {useContext} from "react";
import style from './Content.module.css'
import Task from "./task/Task";
import Modal from "../Common/Modal/Modal";
import {observer} from "mobx-react";
import {PropsWithStoreType} from "../../index";

type StateType = {
    showModal: boolean
    removeID: string
}

@observer
class Content extends React.Component<PropsWithStoreType, StateType> {
    store = this.props.store

    state = {
        showModal: false,
        removeID: ''
    }

    remove = (id: string) => {
        this.setState({
            showModal: true,
            removeID: id
        })
    }

    removeConfirmedByModal = (yesOrNo: boolean)=> {
        this.setState({showModal: false})
        if (yesOrNo) this.store.deleteTask(this.state.removeID)
    }

    render() {
        return <div className={style.content}>
            {this.store.tasks.map((task)=><Task key={task.id} task={task} start={this.store.startTask} stop={this.store.stopTask} remove={this.remove} /> )}
            {this.state.showModal && <Modal answer={this.removeConfirmedByModal}/>}
        </div>
    }
}

export default Content