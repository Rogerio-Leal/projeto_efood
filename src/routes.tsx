import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Perfil } from './Pages/Perfil'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)
