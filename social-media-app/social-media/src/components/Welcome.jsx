import { PostList } from "../store/Post-list";
import { useContext } from "react";

const Welcome = () => {

    const {addNewData} = useContext(PostList);
  return (
    <center className="welcome-message">
      <h1 className="welcome">Welcome Posts are not done yet</h1>
      <button type="button" className="btn btn-primary" onClick={addNewData}>Get the Posts</button>
    </center>
  );
};

export default Welcome;
