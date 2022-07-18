import "./index.css";
import React, { useContext } from "react";
import { useGlobalContext } from "./context";
import { MdCancel } from "react-icons/md";
import { BiSmile } from "react-icons/bi";
function App() {
  const { openModal } = useGlobalContext();
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <>
      <button
        className="bg-black text-white text-2xl mt-16 ml-20"
        onClick={openModal}
      >
        Eloghosa, Press me
      </button>

      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <h3 className="">
            Do you know how cute you look? Now smile for me...... *too cheesy ?
          </h3>
          <button className="close-modal-btn" onClick={closeModal}>
            <MdCancel />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
