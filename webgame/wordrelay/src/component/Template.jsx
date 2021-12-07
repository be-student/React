import "./template.scss";

const Template = ({ children }) => {
  return (
    <div className="Template">
      <div className="Template__title">Word Relay</div>
      <div className="Template__context">{children}</div>
    </div>
  );
};
export default Template;
