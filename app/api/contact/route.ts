import { NextResponse } from "next/server";
import { connectDB } from "@/backend/lib/mongodb";
import Contact from "@/backend/models/contact";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const contact = await Contact.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
    });

    console.log("Saved:", contact);

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save contact",
      },
      { status: 500 }
    );
  }
}