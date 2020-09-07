import React from 'react'
import { observer } from 'mobx-react'
import Task from './task/Task'
import Modal from '../Common/Modal/Modal'
import { PropsWithStoreType } from '../../index'
import style from './Content.module.css'
import { storeType } from '../../store/store'

type StateType = {
  showModal: boolean
  removeID: string
}

@observer
class Content extends React.Component<PropsWithStoreType, StateType> {
  store: storeType
  constructor(props: any) {
    super(props)
    this.store = this.props.store
    this.state = {
      showModal: false,
      removeID: ''
    }
  }
  remove = (id: string) => {
    this.setState({
      showModal: true,
      removeID: id
    })
  }
  removeConfirmedByModal = (yesOrNo: boolean) => {
    this.setState({ showModal: false })
    if (yesOrNo) this.store.deleteTask(this.state.removeID)
  }
  render() {
    return <div className={style.content}>
      {this.store.tasks.map((task) => <Task key={task.id} task={task} start={this.store.startTask}
        stop={this.store.stopTask} remove={this.remove} />)}
      {this.state.showModal && <Modal answer={this.removeConfirmedByModal} />}
    </div>
  }
}

export default Content
