import React from "react";

import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch(`http://localhost:8080/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "뉴이벤트에러났다이" }, { status: 500 });
  }
  return redirect("/events");
};

const NewEvent = () => {
  return <EventForm />;
};

export default NewEvent;
