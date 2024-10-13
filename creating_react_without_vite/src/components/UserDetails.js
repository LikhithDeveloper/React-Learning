// Returns an object of key/value pairs of the dynamic params from the current
// URL that were matched by the route path.

import { useParams } from "react-router-dom";

export const UserDetails = () => {
  {
    /*It return a key value pair*/
  }
  const { user } = useParams();
  return (
    <div>
      <h1>You are in User Details Page in {user}</h1>
    </div>
  );
};
