"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async function (e, email, password) {
    e.preventDefault();
    setError("");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/");
    }
  };
  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}

export default Login;
