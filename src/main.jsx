import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas shadows camera={{ position: [0, 0, 20], fov: 45 }}>
      <OrbitControls enableDamping={true} autoRotate autoRotateSpeed={0.1} enableZoom={false} enablePan={false} />
      <App />
    </Canvas>
  </StrictMode>,
)
