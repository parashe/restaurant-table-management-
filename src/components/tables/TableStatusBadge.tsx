import { TableStatus } from "@/types/types";

type TableStatusBadgeProps = {
  status: TableStatus;
};

export default function TableStatusBadge({ status }: TableStatusBadgeProps) {
  const colors: Record<TableStatus, string> = {
    Available: "bg-green-500",
    Occupied: "bg-red-500",
    Reserved: "bg-yellow-500",
  };

  return (
    <span className={`px-2 py-1 text-white rounded ${colors[status] || "bg-gray-400"}`}>
      {status}
    </span>
  );
}
