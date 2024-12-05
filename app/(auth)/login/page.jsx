"use client";
import AuthForm from "../AuthForm";

function Login() {
  const handleSubmit = async function (e, email, password) {
    e.preventDefault();
    console.log("user log in", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}

export default Login;
