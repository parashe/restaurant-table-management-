import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useTableStore } from "@/store/useTableStore";
import { Table } from "@/types/types";

export function useRealtimeTables() {
  const setTables = useTableStore((s) => s.setTables);

  useEffect(() => {
    supabase
      .from("tables")
      .select("*")
      .then(({ data }: { data: Table[] | null }) => setTables(data || []));

    const channel = supabase
      .channel("tables")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tables" },
        () => {
          supabase
            .from("tables")
            .select("*")
            .then(({ data }: { data: Table[] | null }) => setTables(data || []));
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [setTables]);
}
