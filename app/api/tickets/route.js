import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://localhost:4000/tickets");

  const tickets = await response.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}
