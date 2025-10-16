import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader">
        <p style={{
          fontSize: 14,
          color: "#f3f3f3",
          fontWeight: 800,
          marginTop: 40,
        }}>
          {progress.toFixed(2)}%</p></span>
    </Html>
  );
};

export default CanvasLoader;
