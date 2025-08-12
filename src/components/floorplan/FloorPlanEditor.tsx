// components/floorplan/FloorPlanEditor.tsx
"use client";

import { Stage, Layer, Rect } from "react-konva";
import { useEffect, useState } from "react";

export default function FloorPlanEditor() {
  const [dimensions, setDimensions] = useState({
    width: 800,  // Default fallback dimensions
    height: 600
  });

  useEffect(() => {
    // Only execute on client side
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.8
      });

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth * 0.9,
          height: window.innerHeight * 0.8
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Stage width={dimensions.width} height={dimensions.height}>
      <Layer>
        <Rect 
          x={20} 
          y={20} 
          width={100} 
          height={100} 
          fill="red" 
          draggable
        />
      </Layer>
    </Stage>
  );
}