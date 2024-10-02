import { useState } from "react";
import { useContext } from "react";
import { PostList } from "../store/Post-list";



const Form = () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const {addList,setTitle,setDec } = useContext(PostList);
  const AddTag = (event) => {
    setTag(event.target.value);
  };

  const HandelTag = (event) => {
    event.preventDefault();
    if (tag.trim()) {
      setTags((prevTags) => {
        const updatedTags = [...prevTags, tag.trim()];
        // console.log(updatedTags); // This will log the updated tags array
        return updatedTags;
      });
      setTag(""); // Clear the input field after adding the tag
    }
  };

  const deleteTag = (tagToDelete) => {
    setTags((prevTags) => {
      const filteredTags = prevTags.filter(
        (currentTag) => currentTag !== tagToDelete
      );
      // console.log(filteredTags); // This will log the updated tags array after deletion
      return filteredTags;
    });
  };


  const send_data = (e) => {
    e.preventDefault();
    console.log(e);
    const new_post = {
      id:Date.now(),
      title: e.target.title.value,
      description: e.target.description.value,
      tags : tags,
      reactions : 31
    }
    addList(new_post);
    setTags([]);
    e.target.reset();
  }

  return (
    <div className="form-div">
      <form onSubmit={send_data}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            onChange={(e) => setDec(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 addtag">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={AddTag}
            value={tag}
          />
          {tags.map((tagss, index) => (
            <button
              key={index}
              className="tags-list"
              onClick={() => {deleteTag(tagss)}}
            >
              {tagss}
            </button>
          ))}
          <br></br>
          <button onClick={HandelTag}>Add tag</button>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
