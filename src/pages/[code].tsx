import supabase from "@/config/supabase.config";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function CodePage() {
  const router = useRouter();
  const code = router.query.code;

  async function getOriginalURL() {
    if (!code) return;

    const { data, error } = await supabase
      .from("stash")
      .select()
      .eq("code", code);
    console.log(data, error);

    if (data && data.length > 0) {
      window.location.replace(data[0].url);
    }

    if (error) {
      //
    }
  }

  useEffect(() => {
    getOriginalURL();
  }, [router]);

  return <main>Redirecting...</main>;
}
