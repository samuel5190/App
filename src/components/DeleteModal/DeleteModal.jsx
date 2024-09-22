import React, { useState } from "react";
import "./DeleteModal.css";
import toast, { Toaster } from "react-hot-toast";

const DeleteModal = ({ setDeleteModal }) => {
  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");
  console.log(deleteConfirm);

  const deleteModal = () => {
    if (deleteConfirm == "DELETE") {
      setShow(false);
      toast.success("deleted")
    } else {
      setShow(true);
    }

    // return setShow
  };
  return (
    <>
    <div className="deleteModalBody">
      <div className="deleteModalWrapper">
        <div className="deleteModLHead">
          <div>Delete Account</div>
          <span
            className="deleteCancleBtn"
            onClick={() => setDeleteModal(false)}
          >
            X
          </span>
        </div>
        <div>
          Are you want to delete the account linked to your example@gmail.com.
          You will not be able to undo.
        </div>
        <div>To confirm this, type "DELETE"</div>
        <div className="deleteInputBox">
          <input
            type="text"
            onChange={(e) => setDeleteConfirm(e.target.value)}
          />
          <button onClick={deleteModal}>DELETE</button>
        </div>
        {show ? (
          <div className="delectErrMessage">
            Text must match what is specified
          </div>
        ) : null}
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default DeleteModal;
