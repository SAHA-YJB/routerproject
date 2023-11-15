import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEvent from "./pages/EditEvent";
import Error from "./pages/Error";
import EventDetail, { loader as eventDetailLoader } from "./pages/EventDetail";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventsRoot from "./pages/EventsRoot";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />, //이벤트가 useLoaderData를 통해 데이터를 받아온다
            loader: eventsLoader,
          },
          // 하위 수준의 컴포넌트는 로더를 받을 수 있다
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />, //이벤트디테일이 usRouteLoaderData를 통해 데이터를 받아온다
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
          { path: "new", element: <NewEvent /> },
        ],
      },
    ],
  },
]);
//useLoaderData를 사용할 때 기본값으로 가장 가까운 사용 가능한 로더 데이터를 검색하고
//데이터를 검색하는 가장 높은 수준의 컴포넌트가 로딩된 라우트의 정의가 된다
//editpage안에 있는 폼컴포넌트는 가장 높은 수준의 컴포넌트가 editpage이기 때문에
//로더를 그냥 받을 수 없고 useRouteLoaderData를 통해 받아야 한다
function App() {
  return <RouterProvider router={router} />;
}

export default App;
