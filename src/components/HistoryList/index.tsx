import Style from "./style.module.css";

import Data from "../../data/test.json";
import GenericGrid from "../common/GenericGrid";
import HistoryCard from "../HistoryCard";

const HisotryList = () => {
  const data1 = [...Data].splice(0, 3);

  return (
    <>
      <h1 className={Style.header}>History</h1>
      <GenericGrid items={data1} component={HistoryCard} />
    </>
  );
};

export default HisotryList;
