import { motion } from "framer-motion";

const Animation: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#dad8d8'
      }}
    >
      <motion.div
        style={{
          backgroundColor: '#7213cc',
          width: 100, 
          height: 100
        }}
        animate={{
          x: 0,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          transition: {
            delay: 0.9,
          },
          transitionEnd: {
            display: "none",
          },
        }}
      />

      <motion.div
        style={{
          backgroundColor: '#bd13cc',
          width: 100, 
          height: 100,
          originX: 0.5
        }}
      />
    </div>
  );
}

export default Animation;