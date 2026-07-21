import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validation check
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SHEET_WEB_APP_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_SHEET_WEB_APP_URL is not defined in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Forward the data to Google Apps Script Web App
    const googleResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, service, message }),
    });

    const result = await googleResponse.json();

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error(result.error || "Failed to append to Google Sheet");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}