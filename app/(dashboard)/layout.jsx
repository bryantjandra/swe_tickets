import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Navbar from "../components/Navbar";

async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  console.log("Session data:", data); // Log session data to see what's returned

  const user = data?.session?.user;

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}

export default DashboardLayout;
