import Modal from "../../components/modal-auth/modal-auth";
import Login from "../../components/login-wrapper/login-wrapper";
import "./login-page.css";

const LoginPage = () => {
  return (
    <div className="homepage-login-modal">
      <Modal size="sm">
        <Login></Login>
      </Modal>
    </div>
  );
};

export default LoginPage;
