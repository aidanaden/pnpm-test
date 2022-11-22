import { prisma } from "~/server/db/client";
import { json, type APIEvent } from "solid-start";

export async function GET() {
  const notes = await prisma.notes.findMany();
  return json(notes);
}

export async function POST(event: APIEvent) {
  const { text } = await event.request.json();
  const note = await prisma.notes.create({
    data: {
      text,
    },
  });
  return json(note);
}
