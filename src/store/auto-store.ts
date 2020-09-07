import * as mobx from 'mobx'

export default function autoSave(store: any, save: Function) {
  let firstRun = true
  mobx.autorun(() => {
    const json = JSON.stringify(mobx.toJS(store))
    if (!firstRun) {
      save(json)
    }
    firstRun = false
  })
}
