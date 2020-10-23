import React, { useState, useEffect } from "react";
import API from "../../apiUrl.json";
import { CustomTableOfSponsorsList } from "../widgets/CustomTableWidgetForSponsors";

const SponsorsProfilesPage = () => {
  const [sponsorsList, setSponsorsList] = useState([]);
  useEffect(() => {
    fetch(API.baseurl + API.getSponsorsList)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSponsorsList(json.sponsors);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <CustomTableOfSponsorsList
        className="card-stretch gutter-b"
        sponsorsList={sponsorsList}
      />
    </div>
  );
};

export default SponsorsProfilesPage;
