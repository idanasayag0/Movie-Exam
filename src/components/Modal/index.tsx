import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography/Typography";

import css from "./style.module.css";
import {IMAGE_URL} from "../../constants";

type ModalProps ={
  modalOpen: boolean;
  closeModal?: () => void;
  modalTitle: string;
  modalOverview: string;
  modalPoster?: string;
}
const Modal = ({modalOpen, closeModal, modalTitle, modalOverview, modalPoster}:ModalProps) => {
  return (
    <>
      {modalOpen && (
        <div className={css["modal"]}>
          <div className={css["overlay"]} onClick={closeModal ? closeModal : ()=>{}}></div>
          <div className={css["modal_content"]}>
            {modalPoster && <img className={css["posterImage"]} src={`${IMAGE_URL}${modalPoster}`} alt="Movie Poster" width="200" />}
            <div className={css["description"]}>
              <Typography sx={{fontWeight: "bold"}} variant="h4" component="div"> 
                  {modalTitle}
              </Typography>
            <Typography variant="subtitle1" component="div"> 
                {modalOverview}
              </Typography>
            </div>
            {closeModal && <button className={css["close_modal"]} onClick={closeModal}>
              <CloseIcon />
            </button>}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
