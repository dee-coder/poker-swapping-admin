import React, { useEffect, useState } from "react";
import { CustomTableWidgets } from "../widgets/CustomTableWidget";
import API from "../../apiUrl.json";

const PlayersProfilesPage = () => {
  const [playerList, setPlayerList] = useState([]);
  useEffect(() => {
    fetch(API.baseurl + API.getPlayerList)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPlayerList(json.players);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <CustomTableWidgets
        className="card-stretch gutter-b"
        playerList={playerList}
      />
    </div>
  );
};

export default PlayersProfilesPage;
