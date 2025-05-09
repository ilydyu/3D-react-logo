import EllipseOrbit from "./EllipseOrbit.jsx";
import {Stage} from "@react-three/drei";
import {useMemo} from "react";

function App() {
	const orbitals = useMemo(() => {
		return Array.from({length: 5}).map((_, i) => {
      const radiusX = 2.5 + (Math.random() * i);
      const radiusY = 3 + (Math.random() * i);
      const angleX = Math.PI / (i + Math.random())
      const angleY = Math.PI / (i + Math.random())
      const angleZ = Math.PI / (i + Math.random())

      return <EllipseOrbit key={i} ellipseXRadius={radiusX} ellipseYRadius={radiusY} angleX={angleX} angleY={angleY}
                           angleZ={angleZ}/>
    })
	}, [])
	return (
		<>
			<Stage shadows={false}>
				<group>
					<mesh>
						<sphereGeometry args={[1, 40, 40]}/>
						<meshStandardMaterial color={'#c70606'} metalness={1} roughness={0.7}/>
					</mesh>
					{orbitals}
				</group>
			</Stage>
		</>
	)
}

export default App
