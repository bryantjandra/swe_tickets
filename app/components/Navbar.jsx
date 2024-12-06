import Link from "next/link";

function Navbar({ user }) {
  return (
    <nav>
      <h1>SWE Tickets</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  );
}

export default Navbar;
