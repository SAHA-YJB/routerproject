import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

// 페이지가 이동되기 시작할때 로더 호출
// 실제로 가기 전 호출
// 브라우저에서 실행
// 브라우저 API사용 가능
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "에러남" };
    throw new Response(JSON.stringify({ message: "에러났다이" }), {
      status: 500,
    });
  } else {
    return response;
  }
};

const Events = () => {
  const data = useLoaderData();
  // if (data.isError) return <div>{data.message}</div>;
  const events = data.events;

  return <EventsList events={events} />;
};

export default Events;
