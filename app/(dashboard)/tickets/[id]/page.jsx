import { notFound } from "next/navigation";

export const dynamicParms = true;

export async function generateMetadata({ params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await response.json();

  return {
    title: `SWE Tickets | ${ticket.title}`,
  };
}

export async function generateStaticParams() {
  const response = await fetch("http://localhost:4000/tickets");
  const tickets = await response.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  const response = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    notFound();
  }
  return response.json();
}

async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
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
