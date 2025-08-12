import { useState } from "react";

type TableFormProps = {
  onSubmit: (name: string) => void;
};

export default function TableForm({ onSubmit }: TableFormProps) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(name);
        setName("");
      }}
      className="flex gap-2"
    >
      <input
        className="border p-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Table name"
      />
      <button className="bg-blue-500 text-white px-2">Add</button>
    </form>
  );
}
