import { PostList } from "../store/Post-list";
import { useContext } from "react";

const Welcome = () => {

    const {addNewData} = useContext(PostList);
  return (
    <center className="welcome-message">
      <h1 className="welcome">Welcome Posts are not done yet</h1>
    </center>
  );
};

export default Welcome;
