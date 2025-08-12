// app/floor-plan/page.tsx
import FloorPlanEditor from "@/components/floorplan/FloorPlanEditor";

export default function FloorPlanPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurant Floor Plan</h1>
      <div className="border rounded-lg overflow-hidden">
        <FloorPlanEditor />
      </div>
    </div>
  );
}