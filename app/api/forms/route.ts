// app/api/forms/[...path]/route.ts
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Log form submission (optional)
    console.log("Form submitted:", Object.fromEntries(formData));

    return Response.json({
      message: "Form submitted successfully",
      status: "success",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return Response.json(
      {
        message: "Form submission failed",
        status: "error",
      },
      { status: 500 }
    );
  }
}
