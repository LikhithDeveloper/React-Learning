import { useState } from "react";

const Input = () => {
  const [Uploadimg, setImg] = useState([]);
  const AddItem = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if(file){
      console.log(file);
      console.log(URL.createObjectURL(file));
        setImg(URL.createObjectURL(file));
    }
  };
  return (
    <div className="input-div">
        <form>
        {Uploadimg.length == 0 ? (
          <label className="custom-file-upload">
            <input type="file" className="inp" onChange={AddItem} />
            <h3>Choose File Here</h3>
          </label>
        ) : (
          <video loop controls autoPlay src={Uploadimg} style={{width:"150px"}}/> // Display the selected file name
        )}
        <button type="submit" className="upload">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Input;
