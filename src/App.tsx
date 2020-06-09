import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Layout from './components/Layout'
import Routes from './routes'


const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  )
}

export default App