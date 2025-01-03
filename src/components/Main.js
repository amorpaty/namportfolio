import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { TextureLoader } from 'three';
import { useNavigate } from 'react-router-dom';

const BusinessCard = () => {
    const cardRef = useRef();
    const logoTexture = useLoader(TextureLoader, 'images/logo/main_logo.png');
    const navigate = useNavigate();

    // 명함 회전 로직
    useFrame((state, delta) => {
        if (cardRef.current) {
            cardRef.current.rotation.y += delta * -0.5;
        }
    });

    return (
        <group
            ref={cardRef}
            onClick={() => navigate('/aboutMe')} // 클릭 시 화면 전환
            onPointerOver={() => (document.body.style.cursor = 'pointer')} // 손 모양 커서
            onPointerOut={() => (document.body.style.cursor = 'default')} // 기본 커서
        >
            {/* 명함 박스 */}
            <mesh>
                <boxGeometry args={[2, 1, 0.1]} />
                <meshStandardMaterial map={logoTexture} />
            </mesh>
        </group>
    );
};

function Stars(props) {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(10000), { radius: 3 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        ref.current.material.size = 0.005 + Math.sin(state.clock.elapsedTime) * 0.002;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    );
}

function Main() {
    return (
        <div className="w-screen h-screen bg-black">
            <Canvas camera={{ position: [0, 0, 1.5] }}>
                <Stars />
                <ambientLight />
                <spotLight position={[0, 5, 5]} angle={0.2} penumbra={1} intensity={1} castShadow />
                <BusinessCard />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Main;
