import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';
import './App.css'
import { HeaderSearch} from './Header/Header'
import { createTheme, MantineProvider } from '@mantine/core';


function App() {
  const [count, setCount] = useState(0)

  return (
      <MantineProvider ><HeaderSearch></HeaderSearch>
    </MantineProvider>
  )
}

export default App
