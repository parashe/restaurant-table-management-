export type TableStatus = "Available" | "Occupied" | "Reserved";

export type User = {
  id: string;
  app_metadata: {
    provider: string;
    [key: string]: any;
  };
  user_metadata: {
    [key: string]: any;
  };
  aud: string;
  created_at: string;
  email?: string | null;
  phone?: string | null;
  confirmed_at?: string | null;
  last_sign_in_at?: string | null;
  role?: string;
  updated_at?: string | null;
};


export type Reservation = {
    id: number;
    table_id: number;
    user_id: string;
    status: string;
    // Add other reservation fields here according to your DB schema
  };

  
  export type Table = {
    id: number;
    name: string;
    status: "Available" | "Occupied" | "Reserved"; // example, adjust if needed
    // add other fields matching your DB schema here
  };
  