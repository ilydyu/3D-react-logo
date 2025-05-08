import {useMemo} from "react";
import {EllipseCurve, TubeGeometry, Vector3, CatmullRomCurve3, Matrix4} from "three";
import Electron from "./Electron.jsx";

const EllipseOrbit = ({
												ellipseXRadius = 3,
												ellipseYRadius = 3,
												angleX = Math.PI / 2,
												angleY = Math.PI / 2,
												angleZ = Math.PI / 2,
											}) => {
	const curve = useMemo(() => {
		return new EllipseCurve(
			0, 0,
			ellipseXRadius, ellipseYRadius,
			0, Math.PI * 2,
			false, 0
		);
	}, [ellipseXRadius, ellipseYRadius])

	const curve3D = useMemo(() => {
		const points = curve.getPoints(100).map(p => new Vector3(p.x, p.y, 0));

		const rotationMatrix = new Matrix4()
			.makeRotationX(angleX)
			.multiply(new Matrix4().makeRotationY(angleY))
			.multiply(new Matrix4().makeRotationZ(angleZ));
		return points.map(p => p.applyMatrix4(rotationMatrix))
	}, [angleX, angleY, angleZ, curve]);

	const path = useMemo(() => {
		return new CatmullRomCurve3(curve3D)
	}, [curve3D])

	const tubeGeometry = useMemo(() => {
		return new TubeGeometry(path, 150, 0.03, 8, true);
	}, [path]);

	return (
		<group>
			<mesh geometry={tubeGeometry}>
				<meshStandardMaterial color={'#03b4b4'} metalness={0.3} roughness={0.5} emissive={'#04b7b7'} emissiveIntensity={0.2} />
			</mesh>
			<Electron path={path} orbitRadius={Math.max(ellipseXRadius, ellipseYRadius)} />
			<Electron path={path} orbitRadius={Math.max(ellipseXRadius, ellipseYRadius)} offset={0.5} />
		</group>
	)
}

export default EllipseOrbit