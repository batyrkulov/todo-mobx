import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react'
import { TaskI } from '../../../store/store'
import { TaskBlock, TaskName, TaskTimeAndBtns, TaskTime, TaskBtn as Button } from './TaskStyledComponents'

type PropsType = {
  task: TaskI
  remove: (id: string) => void
  stop: (id: string) => void
  start: (id: string) => void
}

@observer
class Task extends React.Component<PropsType, {}> {
  interval: any
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.task.lastStartTime !== 0) this.forceUpdate()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    const { task, remove, stop, start } = this.props

    const showTime = () => {
      let delta = task.spentTime
      if (task.lastStartTime)
        delta += Math.round((new Date()).getTime() / 1000) - task.lastStartTime
      const days = Math.floor(delta / 86400)
      delta -= days * 86400
      const hours = Math.floor(delta / 3600) % 24
      delta -= hours * 3600
      const minutes = Math.floor(delta / 60) % 60
      delta -= minutes * 60
      const seconds = delta % 60

      return `${days} day ${hours}:${minutes}:${seconds}`
    }

    return <TaskBlock>
      <div>
        <TaskName>{task.name ? task.name : '-'}</TaskName>
      </div>
      <TaskTimeAndBtns>
        <TaskTime>{showTime()}</TaskTime>
        {task.lastStartTime > 0
          ? <Button onClick={() => {
            stop(task.id)
          }}>
            <FontAwesomeIcon icon={faStop} />
          </Button>
          : <Button onClick={() => {
            start(task.id)
          }}>
            <FontAwesomeIcon icon={faPlay} />
          </Button>
        }
        <Button onClick={() => {
          remove(task.id)
        }}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </TaskTimeAndBtns>
    </TaskBlock>
  }
}

export default Task
