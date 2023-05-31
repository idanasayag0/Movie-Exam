import React from "react";
import Style from "./style.module.css";
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
        <div className={Style.modal}>
          <div className={Style.overlay} onClick={closeModal}></div>
          <div className={Style.modal_content}>
            <img className={Style.posterImage} src={`https://image.tmdb.org/t/p/w500${modalPoster}`} alt="Movie Poster" width="200" />
            <div className={Style.description}>
            <h2 className={Style.modal_title}>{modalTitle}</h2>
            <p>
              {modalOverview}
            </p>
            </div>
            <button className={Style.close_modal} onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
