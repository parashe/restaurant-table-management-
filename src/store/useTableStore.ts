import { Table } from "@/types/types";
import { create } from "zustand";

type TableState = {
  tables: Table[];
  setTables: (tables: Table[]) => void;
};

export const useTableStore = create<TableState>((set) => ({
  tables: [],
  setTables: (tables) => set({ tables }),
}));
