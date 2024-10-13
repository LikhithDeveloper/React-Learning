import { PostList } from "../store/Post-list";
import { useContext } from "react";

const Welcome = () => {

    const {addNewData} = useContext(PostList);
  return (
    <center className="welcome-message">
      <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status" style={{"height":"70px","width":"70px","marginTop":'50px'}}>
    <span className="sr-only"></span>
  </div>
</div>
    </center>
  );
};

export default Welcome;
