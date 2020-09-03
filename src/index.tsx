import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import storeInstance from './store/store'
import Header from "./Cmps/Header/Header"
import Content from "./Cmps/Content/Content"
import {storeType} from './store/store'

export type PropsWithStoreType = {
    store: storeType
}

const App  : React.FC<PropsWithStoreType> = ({store}) =>  {
    document.title = 'Todo list App'
    return (
        <div className="App">
            <Header store={store}/>
            <Content store={store}/>
        </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <App store={storeInstance}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

