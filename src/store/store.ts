import { decorate, observable, action, extendObservable } from 'mobx'
import autoSave from './auto-store'

export interface TaskI {
    id: string
    name: string
    spentTime: number
    lastStartTime: number
}

class Store {
    fieldText : string = ''
    tasks : TaskI[] = []

    constructor() {
        this.load()
        autoSave(this, this.save.bind(this));
    }

    load() {
        let savedStore = localStorage.getItem('store')
        if (typeof savedStore ==='string') {
            let data = JSON.parse(savedStore)
            extendObservable(this, data)
        }
    }

    save(json: string) {
        localStorage.setItem('store', json)
    }

    updateFieldText = (text: string)=> {
        this.fieldText = text
    }

    createTask = () => {
        this.tasks.unshift({
            id: Math.random().toString(36).substr(2, 9),
            name: this.fieldText,
            spentTime: 0,
            lastStartTime: Math.round(new Date().getTime() / 1000)
        })
        this.fieldText = ''
    }

    startTask = (id : string) =>  {
        let tasks = this.tasks
        for(let i=0; i<tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks[i].lastStartTime = Math.round(new Date().getTime() / 1000)
                break
            }
        }
    }

    stopTask = (id : string) => {
        let tasks = this.tasks
        for(let i=0; i<tasks.length; i++) {
            if (tasks[i].id === id) {
                let task = tasks[i]
                if (task.lastStartTime!==0) {
                    task.spentTime += Math.round(new Date().getTime() / 1000) - +task.lastStartTime
                    task.lastStartTime = 0
                }
                break
            }
        }
    }

    deleteTask = (id : string) =>  {
        this.tasks = this.tasks.filter(task=>task.id!==id)
    }
}

decorate(Store, {
    fieldText: observable,
    tasks: observable,
    updateFieldText: action,
    createTask: action,
    startTask: action,
    stopTask: action,
    deleteTask: action
})

const storeInstance = new Store()

export type storeType = typeof storeInstance

export default storeInstance