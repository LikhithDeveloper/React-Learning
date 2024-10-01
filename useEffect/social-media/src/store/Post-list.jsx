import { act, createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  PostListItems: [],
  addList: () => {},
  deleteList: () => {},
  setTitle: () => {},
  setDec: () => {},
  addNewData: () => {},
  fetchLoad: [],
});

const INITIAL_VALUES = [];

const PostListReducer = (PostListItems, action) => {
  if (action.type === "add") {
    return [...PostListItems, action.paylod];
  } else if (action.type === "addnew") {
    return [...PostListItems, ...action.paylod.posts];
  } else {
    return action.paylod;
  }
};

const PostListProvider = ({ children }) => {
  const [PostListItems, dispatch] = useReducer(PostListReducer, INITIAL_VALUES);
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const [fetchLoad, fetchLoadSet] = useState(false);
  useEffect(() => {
    fetchLoadSet(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        let posts = data.posts;
        dispatch({ type: "addnew", paylod: { posts } });
        // console.log("Hi");
        fetchLoadSet(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const addList = (new_post) => {
    dispatch({ type: "add", paylod: new_post });
  };

  const deleteList = (item) => {
    // console.log(item);
    // console.log(PostListItems);
    const new_data = PostListItems.filter((curr) => curr.title !== item);
    dispatch({ type: "delete", paylod: new_data });
  };

  const addNewData = () => {
    // fetch("https://dummyjson.com/posts")
    // .then((res) => res.json())
    // .then((data) => {
    //   let posts = data.posts;
    //   dispatch({ type: "addnew", paylod: {posts} })
    // });
    // .then((data) => addList(data.posts));
  };

  return (
    <PostList.Provider
      value={{
        PostListItems: PostListItems,
        addList: addList,
        deleteList: deleteList,
        setTitle: setTitle,
        setDec: setDec,
        addNewData: addNewData,
        fetchLoad: fetchLoad,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
