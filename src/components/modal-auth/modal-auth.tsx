import { FC } from "react";
import "./modal-auth.css";

interface ModalProps {
  children: React.ReactNode;
  size: "sm" | "lg";
}

const Modal: FC<ModalProps> = ({ children, size }) => {
  const modalClass = `modal modal-${size}`;
  return <div className={modalClass}>{children}</div>;
};

export default Modal;
