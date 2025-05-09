import {useMemo} from "react";
import {EllipseCurve, Vector3, CatmullRomCurve3, Matrix4} from "three";
import Electron from "./Electron.jsx";
import {Line} from "@react-three/drei";

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

	const path = useMemo(() => new CatmullRomCurve3(curve3D), [curve3D])

	return (
		<group>
			<Line points={curve3D} lineWidth={2} color={'#03b4b4'} transparent={true} opacity={0.4} />
			<Electron path={path} orbitRadius={Math.max(ellipseXRadius, ellipseYRadius)} />
			<Electron path={path} orbitRadius={Math.max(ellipseXRadius, ellipseYRadius)} offset={0.5} />
		</group>
	)
}

export default EllipseOrbit