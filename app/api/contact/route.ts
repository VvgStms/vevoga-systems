import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name    = escapeHtml(String(body.name    ?? ""));
    const company = escapeHtml(String(body.company ?? ""));
    const email   = escapeHtml(String(body.email   ?? ""));
    const area    = escapeHtml(String(body.area    ?? ""));
    const message = escapeHtml(String(body.message ?? ""));

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "E-Mail und Nachricht sind erforderlich." },
        { status: 400 }
      );
    }

    const payload = {
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Vevoga Systems – ${area || "Anfrage"}`,
      html: `
        <h2>Neue Anfrage über vevoga-systems.de</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Unternehmen:</strong> ${company || "-"}</p>
        <p><strong>E-Mail:</strong> ${email || "-"}</p>
        <p><strong>Bereich:</strong> ${area || "-"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${(message || "-").replace(/\n/g, "<br />")}</p>
      `,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data?.message || "Versand fehlgeschlagen." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Serverfehler beim Versand." },
      { status: 500 }
    );
  }
}