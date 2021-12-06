const hel = (props) => {
  console.log(typeof props);

  return <div>Hello{props.children}</div>;
};
export default hel;
