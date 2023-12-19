import SubmitButton from "../button-auth/button-auth";
import Input from "../input-auth/input-aurh";
import "./sinup-wrapper.css";
import mailIcon from "../../assets/mui-mail.svg";
import passIcon from "../../assets/mui-lock.svg";
import eyeIcon from "../../assets/mui-eye.svg";

const SignUp = () => {
  return (
    <div className="sign-wrapper">
      <div className="label">SIGN UP</div>
      <Input content="Email" imgSrc1={mailIcon} typee="text"></Input>
      <Input
        content="Password"
        imgSrc1={passIcon}
        imgSrc2={eyeIcon}
        typee="password"
      ></Input>
      <Input
        content="Repeat password"
        imgSrc1={passIcon}
        imgSrc2={eyeIcon}
        typee="password"
      ></Input>
      <SubmitButton content="Sign up"></SubmitButton>
      <p className="footer">
        <span style={{ color: "#000000" }}>Already have an account?</span>
        <span style={{ color: "#00000099" }}> Log in</span>
      </p>
    </div>
  );
};

export default SignUp;
