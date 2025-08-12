import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useReservationStore } from "@/store/useReservationStore";
import { Reservation } from "@/types/types";

export function useRealtimeReservations() {
  const setReservations = useReservationStore((s) => s.setReservations);

  useEffect(() => {
    supabase
      .from("reservations")
      .select("*")
      .then(({ data }: { data: Reservation[] | null }) => setReservations(data || []));

    const channel = supabase
      .channel("reservations")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "reservations" },
        () => {
          supabase
            .from("reservations")
            .select("*")
            .then(({ data }: { data: Reservation[] | null }) => setReservations(data || []));
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [setReservations]);
}
