import SubmitButton from "../button-auth/button-auth";
import Input from "../input-auth/input-auth";
import "./login-wrapper.css";
import mailIcon from "../../assets/mui-email.svg";
import passIcon from "../../assets/mui-lock.svg";
import { Checkbox } from "@mui/material";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="label">LOG IN</div>
      <Input content="Email" imgSrc1={mailIcon} typee="text"></Input>
      <Input content="Password" imgSrc1={passIcon} typee="password"></Input>
      <div className="remember">
        <Checkbox sx={{ padding: 0 }}></Checkbox>
        <div className="text-remember">Remember me</div>
      </div>
      <SubmitButton content="Log in"></SubmitButton>
      <p className="footer">
        <span style={{ color: "#000000" }}>Don’t have an account? </span>
        <span style={{ color: "#00000099" }}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
