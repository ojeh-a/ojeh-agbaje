import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "cv", "ojeh-agbaje-cv.pdf");
    const file = readFileSync(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="ojeh-agbaje-cv.pdf"',
      },
    });
  } catch {
    return NextResponse.json({ error: "CV not found" }, { status: 404 });
  }
}
