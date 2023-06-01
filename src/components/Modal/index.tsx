import React from "react";
import css from "./style.module.css";
import CloseIcon from '@mui/icons-material/Close';

type ModalProps ={
  modalOpen: boolean;
  closeModal: () => void;
  modalTitle: string;
  modalOverview: string;
  modalPoster: string;
}
const Modal = ({modalOpen, closeModal, modalTitle, modalOverview, modalPoster}:ModalProps) => {

  if (modalOpen) {
    document.body.classList.add("active_modal");
  } else {
    document.body.classList.remove("active_modal");
  }

  return (
    <>
      {modalOpen && (
        <div className={css["modal"]}>
          <div className={css["overlay"]} onClick={closeModal}></div>
          <div className={css["modal_content"]}>
            <img className={css["posterImage"]} src={`https://image.tmdb.org/t/p/w500${modalPoster}`} alt="Movie Poster" width="200" />
            <div className={css["description"]}>
            <h2 className={css["modal_title"]}>{modalTitle}</h2>
            <p>
              {modalOverview}
            </p>
            </div>
            <button className={css["close_modal"]} onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
