import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

// 페이지가 이동되기 시작할때 로더 호출
// 실제로 가기 전 호출
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

const Events = () => {
  const events = useLoaderData();
  return <EventsList events={events} />;
};

export default Events;
