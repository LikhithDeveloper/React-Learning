const Error = (props) => {
  // let food = ["chicken", "mutton", "frawns", "crabs", "x", "y", "z"];
  return <>{props.name .length === 0 && <h3 style={{textAlign:"center"}}>Iam hungry</h3>}</>;
};

export default Error;
