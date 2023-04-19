
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

function App() {
  

  return (
    <>
    <BrowserRouter>
        
        <CssBaseline />
          <Router />
        
      </BrowserRouter>
    </>
  )
}

export default App
