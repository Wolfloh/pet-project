import * as React from 'react'
import GlobalStyles from './assets/globalStyles'
import { AppRouters } from './components/AppRouters'

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouters />
    </>
  )
}

