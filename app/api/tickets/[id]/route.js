import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const id = params.id;
  const response = await fetch(`http://localhost:4000/tickets/${id}`);

  const ticket = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: "Cannot find the ticket" },
      { status: 404 }
    );
  }
  return NextResponse.json(ticket, {
    status: 200,
  });
}
