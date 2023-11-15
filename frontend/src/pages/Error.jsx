import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();
  let title = "에러가 났어요!!!!";
  let message = "에러가 났어요!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "페이지를 찾을 수 없어요!";
    message = "페이지를 찾을 수 없어요!";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
