import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import HomePage from './pages/Home'
import Layout from './components/Layout'
const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <HomePage />
      </Layout>
    </Provider>
  )
}

export default App