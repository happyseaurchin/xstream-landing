import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import WhitePaper from './pages/WhitePaper'
import Story from './pages/Story'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/whitepaper" element={<WhitePaper />} />
      <Route path="/story" element={<Story />} />
    </Routes>
  )
}

export default App
