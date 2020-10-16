import React, { useState, useEffect } from "react";
import API from "../../apiUrl.json";
import UpComingGamesTable from "../tables/upcomingTournamentsTable";

const UpComingTournaments = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch(API.baseurl + API.getUpcomingTournaments)
      .then((response) => response.json())
      .then((json) => {
        setRows(json.tournaments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <div>
      <UpComingGamesTable data={rows} />
    </div>
  );
};

export default UpComingTournaments;
