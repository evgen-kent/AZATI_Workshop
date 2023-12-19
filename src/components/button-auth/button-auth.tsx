import "./button-auth.css";

type Content = string;
type SubmitButtonProps = {
  content: Content;
};

const SubmitButton = ({ content }: SubmitButtonProps): JSX.Element => {
  return (
    <div className={`submit-button ${content == "Log in" ? "login" : "reg"}`}>
      <div className="text-wrapper">{content}</div>
    </div>
  );
};

export default SubmitButton;
