import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const ticket = await request.json();

  // Pass cookies to createRouteHandlerClient
  const supabase = createRouteHandlerClient({ cookies });

  // Get the current user session
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.error("Session error:", sessionError);
    return NextResponse.json({ error: sessionError.message }, { status: 401 });
  }

  // Insert the data into Supabase
  const { data, error } = await supabase
    .from("Tickets")
    .insert({
      ...ticket,
      user_email: session.user.email,
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
