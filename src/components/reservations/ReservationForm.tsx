import { useState } from "react";

export default function ReservationForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(name, date);
        setName("");
        setDate("");
      }}
      className="flex gap-2"
    >
      <input className="border p-1" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="datetime-local" className="border p-1" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="bg-green-500 text-white px-2">Book</button>
    </form>
  );
}
