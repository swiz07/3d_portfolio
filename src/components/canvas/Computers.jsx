import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Center } from '@react-three/drei'
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop/scene.gltf')

  return (
      <mesh>
        <hemisphereLight skyColor="#ffffff" groundColor="#0f172a" intensity={0.6} />
        <ambientLight intensity={2.4} />
        <spotLight
         position={[-20,50,10]}
         penumbra={1}
         intensity={1}
         castShadow
         shadow-mapSize={[1024,1024]}/>
        <primitive object={computer.scene}
          scale={isMobile?5.10:6.75} 
          position={isMobile ? [-2, -1.7, -1.2] : [0, -1.3, 0.3]}
          rotation={[0.1,1.5,-0.1]}
        />
      </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile]=useState(false);

  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange=(event)=>{
        setIsMobile(event.matches);
      }

      mediaQuery.addEventListener('change',
        handleMediaQueryChange);

        return ()=>{
          mediaQuery.removeEventListener('change',
            handleMediaQueryChange)
        }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas