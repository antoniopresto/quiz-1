import React from 'react'
import { PageWrapper } from './components/PageWrapper'
import { ProgressBar } from './components/ProgressBar'

function App() {
  return (
    <PageWrapper>
      <ProgressBar progress={10} />
    </PageWrapper>
  )
}

export default App
