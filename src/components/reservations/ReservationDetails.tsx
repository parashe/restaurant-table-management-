export default function ReservationDetails({ reservation }) {
    return (
      <div>
        <h2>{reservation.name}</h2>
        <p>{new Date(reservation.date).toLocaleString()}</p>
      </div>
    );
  }
  