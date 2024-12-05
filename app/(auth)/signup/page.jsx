"use client";
import AuthForm from "../AuthForm";

function Signup() {
  const handleSubmit = async function (e, email, password) {
    e.preventDefault();
    console.log("user signup", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}

export default Signup;
