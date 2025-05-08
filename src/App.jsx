import EllipseOrbit from "./EllipseOrbit.jsx";

function App() {
  return (
    <>
      <directionalLight intensity={5} color={'#0dc2c2'} position={[3, 4, 1]} />
      <pointLight color={'#c70606'} intensity={10} distance={20} />
      <group>
        <mesh>
          <sphereGeometry args={[1, 40, 40]}/>
          <meshStandardMaterial color={'#c70606'} metalness={0.3} roughness={1} emissive={'#c70606'} emissiveIntensity={1} />
        </mesh>
        <EllipseOrbit ellipseXRadius={5} ellipseYRadius={4} angleX={Math.PI / 2} angleY={Math.PI / 1.5} angleZ={Math.PI / 2} />
        <EllipseOrbit angleX={Math.PI / 2} angleY={0} angleZ={0} />
        <EllipseOrbit ellipseXRadius={8} ellipseYRadius={6} angleX={Math.PI / 2} angleY={Math.PI / 6} angleZ={Math.PI / 2} />
        <EllipseOrbit ellipseXRadius={6} ellipseYRadius={4} angleX={Math.PI / 6} angleY={Math.PI / 2.5} angleZ={Math.PI / 4} />
        <EllipseOrbit ellipseXRadius={4} ellipseYRadius={3} angleX={Math.PI / 5} angleY={Math.PI / 4} angleZ={Math.PI / 3} />
      </group>
    </>
  )
}

export default App
