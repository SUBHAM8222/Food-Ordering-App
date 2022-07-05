import "./Modal.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className='backdrop'onClick={props.onclose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='content' >{props.children}</div>
    </div>
  );
};
const portalelement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>, portalelement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalelement
      )}
    </React.Fragment>
  );
};

export default Modal;
