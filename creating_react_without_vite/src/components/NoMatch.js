export const NoMatch = (props) => {
  return (
    <div>
      <h1>{props.error}</h1>
      <h1 style={{ marginTop: "-20px" }}>Page Not Found</h1>
    </div>
  );
};
