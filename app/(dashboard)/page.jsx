import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Welcome to the SWE Tickets Dashboard! Here, we can track, manage, and
        resolve our support tickets efficiently. Whether we're handling bug
        reports, feature requests, or customer inquiries, this platform provides
        the tools to streamline our workflow and keep everything organized.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New Team Member Alert!</h3>
        <p>
          We're excited to welcome John Doe to our web development team! John
          brings 5+ years of experience in frontend development and will be
          working on enhancing the SWE Tickets platform's user experience.
        </p>
      </div>
      <div className="card">
        <h3>Platform Redesign Launch!</h3>
        <p>
          We're thrilled to announce the launch of the newly redesigned SWE
          Tickets platform. The updated interface offers a more intuitive
          layout, improved performance, and exciting new features to help us all
          manage our tickets.
        </p>
      </div>
    </main>
  );
}
