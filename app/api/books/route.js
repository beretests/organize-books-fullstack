import { NextResponse } from "next/server";
import prisma from "../../db";

export async function GET(req) {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

export async function POST(req) {
  const { title, link, image } = await req.json();

  await prisma.book.create({
    data: {
      title: title,
      link: link,
      image: image,
    },
  });
  return NextResponse.json("Book added successfully");
}
