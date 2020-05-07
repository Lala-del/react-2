import React from 'react'

import './Modal.css'
const Modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                 style={{
                     transform: props.show ? 'translateY(-30vh)' : 'translateY(-50vh)',

                     opacity: props.show ? '1' : '0'
                 }}>
                <div className="modal-header">Do you want to delete this file?
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CANCEL</button>
                    <button className="btn-continue" onClick= {props.close}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;