import Modal from "../../components/modal-auth/modal-auth";
import SignUp from "../../components/singup-wrapper/singup-wrapper";
import "../login-page/login-page.css";

const SignUpPage = () => {
  return (
    <div className="homepage-login-modal">
      <Modal size="lg">
        <SignUp></SignUp>
      </Modal>
    </div>
  );
};

export default SignUpPage;
