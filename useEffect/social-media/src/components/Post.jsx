import { useContext } from "react";
import { PostList } from "../store/Post-list";
import Welcome from "./Welcome";
import Loder from "./Loder";

const Post = () => {

  // const arr= useContext(PostList);
  // console.log(arr);
  const { PostListItems,deleteList ,fetchLoad} = useContext(PostList);
  // console.log(PostListItems);
  return (
    <>
    {fetchLoad && <Loder/>}
    {!fetchLoad && PostListItems.length === 0 && <Welcome></Welcome>}
    <div className="card-box">
      {PostListItems.map((item) => (
        <div
          className="card"
          style={{ width: "18rem", height: "171px" }}
          key={item}
        >
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">
              {item.title}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {item.reactions.likes}
              </span>
            </h5>
            <p className="card-text">{item.description}</p>
            {item.tags.map((tag, index) => (
              <span key={index} className="badge bg-dark tags">
                {tag}
              </span>
            ))}
            <br></br>
            <a href="#" className="btn btn-primary" style={{margin:"10px 0px"}} onClick={() => deleteList(item.title)}>
              Delete Post
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Post;
