import React from "react";

import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Programming for everyone",
  },
  {
    id: "e2",
    title: "Networking for introverts",
  },
  {
    id: "e3",
    title: "Networking for extroverts",
  },
];

const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_DATA.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
