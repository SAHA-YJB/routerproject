import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

// 페이지가 이동되기 시작할때 로더 호출
// 실제로 가기 전 호출
// 브라우저에서 실행
// 브라우저 API사용 가능
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "에러남" };
    // throw new Response(JSON.stringify({ message: "에러났다이" }), {
    //   status: 500,
    // });
    return json({ message: "에러났다이" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
const Events = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>로딩...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default Events;
