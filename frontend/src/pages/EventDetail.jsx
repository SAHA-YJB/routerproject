import React from "react";

import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);
  if (!response.ok) {
    return json({ message: "에러났다이" }, { status: 500 });
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "디테일 삭제 에러났다이" }, { status: 500 });
  }
  return redirect("/events");
};

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetail;
