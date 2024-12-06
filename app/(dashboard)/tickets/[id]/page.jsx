import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import DeleteButton from "./DeleteButton";

export const dynamicParms = true;

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket } = await supabase
    .from("Titles")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `SWE Tickets | ${ticket?.title || "Ticket not found"}`,
  };
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  return data;
}

async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <>
              <DeleteButton id={ticket.id} />
            </>
          )}
        </div>
      </nav>

      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

export default TicketDetails;

// Here’s how the routing works:

// Static Rendering:
// At build time, Next.js calls generateStaticParams to generate pre-rendered pages for specific ticket IDs (e.g., /tickets/1).

// Dynamic Rendering (ISR):

// If a user visits a ticket page that wasn’t pre-rendered (e.g., /tickets/5), and dynamicParams is true, Next.js will fetch and render it on-demand.
// Subsequent visits within 60 seconds will use the cached version. After 60 seconds, a new request will revalidate the page.
// Error Handling:
// If the ticket ID doesn’t exist, the notFound() function is called to render the 404 page.
