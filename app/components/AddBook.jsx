"use client";
import { useState } from "react";

const AddBook = ({ refreshBooks }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookLink, setNewBookLink] = useState("");
  const [newBookImage, setNewBookImage] = useState("");

  const handleSubmitNewBook = async (e) => {
    e.preventDefault();
    // console.log(newBookTitle);

    const res = await fetch(`/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBookTitle,
        link: newBookLink,
        img: newBookImage,
        // link: "https://www.amazon.com/dp/B0979MGJ5J",
        // img: "https://via.placeholder.com/600/92c952",
      }),
    });

    if (res.ok) {
      setNewBookTitle("");
      setNewBookLink("");
      setNewBookImage("");
      setModalOpen(false);
      refreshBooks();
    }
  };

  return (
    <div>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmitNewBook}
        >
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            htmlFor="my_modal_3"
            onClick={() => setModalOpen(false)}
          >
            X
          </button>
          <h3 className="font-bold text-lg">Add New Book</h3>
          <input
            type="text"
            className="input input-bordered w-full-max-w-xs"
            placeholder="Enter New Book Title"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered w-full-max-w-xs"
            placeholder="Enter New Book Link"
            value={newBookLink}
            onChange={(e) => setNewBookLink(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered w-full-max-w-xs"
            placeholder="Enter New Book Image URL"
            value={newBookImage}
            onChange={(e) => setNewBookImage(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default AddBook;
