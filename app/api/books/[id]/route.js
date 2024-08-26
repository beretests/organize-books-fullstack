import { NextResponse } from "next/server";
import books from "../data.json";

export const DELETE = async (request, { params }) => {
  const id = params.id;
  // console.log("id", id);
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
  }
  return new NextResponse({ "Book deleted": id });
};
