import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Electron = ({path, orbitRadius = 3, offset = 0}) => {
	const sphereRef = useRef(null);
	const speedFactor = 0.5

	const random = Math.random()

	useFrame(({clock}) => {
		const t = clock.getElapsedTime()
		const pulse = (Math.sin(t * 4) + 1) / 2

		sphereRef.current.material.emissiveIntensity = offset + pulse * (orbitRadius / 10 + random)
		const position = path.getPointAt((t * speedFactor / orbitRadius + offset) % 1);
		sphereRef.current.position.set(position.x, position.y, position.z);
	})

	return (
		<mesh ref={sphereRef}>
			<sphereGeometry args={[0.3, 16, 16]} />
			<meshStandardMaterial color={'#0357b7'} metalness={1} roughness={0.5} emissive={'#0359b0'} emissiveIntensity={0.7}  />
		</mesh>
	)
}

export default Electron;