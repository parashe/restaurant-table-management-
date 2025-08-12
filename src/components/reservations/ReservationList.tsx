export default function ReservationList({ reservations }) {
    return (
      <ul className="list-disc ml-4">
        {reservations.map((r) => (
          <li key={r.id}>{r.name} — {new Date(r.date).toLocaleString()}</li>
        ))}
      </ul>
    );
  }
  