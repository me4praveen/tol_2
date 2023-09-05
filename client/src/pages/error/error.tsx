import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  statusText: string;
  message: string;
}

export const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default function ErrorPage(props: Props) {
  const error : {statusText: string, message: string} = props;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
