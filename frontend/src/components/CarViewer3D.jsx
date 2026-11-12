import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

// Placeholder car model (since we don't have a .glb file yet)
function PlaceholderCar({ color }) {
  return (
    <group>
      {/* Car Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 0.8, 2]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Cabin */}
      <mesh position={[-0.2, 1.1, 0]} castShadow>
        <boxGeometry args={[1.8, 0.6, 1.8]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.1} />
      </mesh>
      {/* Wheels */}
      {[-1.2, 1.2].map((x) => 
        [-1.05, 1.05].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.4, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        ))
      )}
    </group>
  );
}

export default function CarViewer3D({ car, onClose }) {
  if (!car) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-4"
    >
      {/* 3D Canvas Area */}
      <div className="relative w-full max-w-5xl h-[60vh] bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition"
        >
          ✕
        </button>
        
        <Canvas shadows camera={{ position: [5, 3, 5], fov: 45 }}>
          <color attach="background" args={['#111']} />
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1000} castShadow />
          
          {/* Environment & Model */}
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            <PlaceholderCar color={car.colorHex} />
          </Stage>
          
          <ContactShadows position={[0, 0, 0]} opacity={0.7} scale={10} blur={2} far={4} />
          <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
        <p className="absolute bottom-4 w-full text-center text-gray-400 text-sm animate-pulse">
          Drag to rotate · Scroll to zoom
        </p>
      </div>

      {/* Specifications Overlay */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-5xl mt-6 bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#0b1a2f] mb-2">{car.name}</h2>
          <p className="text-gray-600 mb-6">{car.desc}</p>
          <button className="bg-[#2b6cb0] text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Book this car
          </button>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          {car.specs.map((spec, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
              <p className="font-semibold text-[#0b1a2f]">{spec.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}