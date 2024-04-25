import supabase from "@/config/supabase.config";
import React, { ChangeEvent, FormEvent, useState } from "react";
import randomize from "randomatic";
import { useRouter } from "next/router";

export default function HomePage() {
  const [userUrl, setUserUrl] = useState("");
  const [code, setCode] = useState<string | null>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setUserUrl(event.currentTarget.value);
  }

  function getBaseURL() {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }

  async function handleShortenUrl(event: FormEvent) {
    event.preventDefault();
    const __code__ = randomize("Aa0", 6);

    const { error } = await supabase
      .from("stash")
      .insert({ url: userUrl, code: __code__ });

    if (!error) {
      setCode(__code__);
    } else {
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen flex">
      <form
        className="m-auto w-full max-w-lg grid gap-4"
        onSubmit={handleShortenUrl}
      >
        <input
          placeholder="Enter a URL"
          value={userUrl}
          onChange={handleInputChange}
          className="px-5 py-3 rounded-md block w-full border-gray-200 border-2 placeholder:text-gray-200 text-sm font-semibold"
        />
        <button className="bg-theme rounded-md text-white py-3 px-5 w-full flex items-center gap-2 justify-center text-sm font-semibold">
          Generate link
          {/* <span className="block w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" /> */}
        </button>

        {code && (
          <div className="border border-green-300 bg-green-100 p-5 rounded-md">
            <p className="text-xs text-gray-400 mb-2">
              Your link has been generated
            </p>

            <a
              href={`${getBaseURL()}/${code}`}
              target="_blank"
              className="text-theme font-semibold underline text-sm"
            >
              {getBaseURL()}/{code}
            </a>
          </div>
        )}
      </form>
    </main>
  );
}
