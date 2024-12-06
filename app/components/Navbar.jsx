import Link from "next/link";
import LogoutButton from "./LogoutButton";

function Navbar({ user }) {
  return (
    <nav>
      <h1>SWE Tickets</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}

export default Navbar;
