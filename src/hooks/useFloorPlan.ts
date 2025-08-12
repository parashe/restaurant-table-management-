import { useState } from "react";

export function useFloorPlan() {
  const [layout, setLayout] = useState([]);
  return { layout, setLayout };
}
