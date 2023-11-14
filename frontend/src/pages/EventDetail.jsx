import React from "react";

import { Link, useParams } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>EventDetail</h1>
      <p>{params.id}</p>
      <Link to=".." relative>
        뒤로
      </Link>
    </>
  );
};

export default EventDetail;
