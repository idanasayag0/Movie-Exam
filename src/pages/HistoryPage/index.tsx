import FavoriteList from "../../components/FavoriteList";
import HistoryList from "../../components/HistoryList";

import css from './style.module.css';

const HistoryPage = () => {
  return (
    <div className={css["container"]}>
      <FavoriteList />
      <HistoryList />
    </div>
  );
};

export default HistoryPage;
