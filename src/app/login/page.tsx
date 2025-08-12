// login/page.tsx
"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  return (
    <div className="p-4">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
      <button onClick={() => signIn(email)} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
}
