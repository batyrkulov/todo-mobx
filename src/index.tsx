import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
import './index.css'
import * as serviceWorker from './serviceWorker'
import storeInstance, { storeType } from './store/store'
import Header from './Cmps/Header/Header'
import Content from './Cmps/Content/Content'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const AppContent = styled.div`
  display: grid;
  grid-template-areas: 'nav' 'con';
  background-color: #EEEEEE;
`

export type PropsWithStoreType = {
  store: storeType
}

const App : React.FC<PropsWithStoreType> = ({ store }) => {
  document.title = 'Todo list App'
  return (
    <AppContent>
      <Header store={store} />
      <Content store={store} />
    </AppContent>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App store={storeInstance} />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
