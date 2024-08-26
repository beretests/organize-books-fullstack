"use client";
import { useState } from "react";

const AddBook = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <form method="dialog" className="modal-box">
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
