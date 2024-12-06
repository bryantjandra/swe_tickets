import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  const user = data?.session?.user;

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}

export default DashboardLayout;
