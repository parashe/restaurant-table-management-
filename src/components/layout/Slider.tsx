import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-100 p-4">
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/floor-plan">Floor Plan</Link>
        <Link href="/reservations">Reservations</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </aside>
  );
}
