import { NextResponse } from "next/server";
import books from "../data.json";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  // console.log(searchParams.get("query"));
  const query = searchParams.get("query");
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredBooks);
}
