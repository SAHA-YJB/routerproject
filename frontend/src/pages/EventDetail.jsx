import React from "react";

import { json, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);
  if (!response.ok) {
    return json({ message: "에러났다이" }, { status: 500 });
  } else {
    return response;
  }
};

const EventDetail = () => {
  const data = useLoaderData();
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetail;
