import React from "react"
import ModalCard from './ModalCard'

class AddToCard extends React.Component{
    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = (e) => {
        this.setState({
            isShowing: true
        });
    };

    closeModalHandler = (e) => {
        this.setState({
            isShowing: false
        });
    };

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Add to Card</button>

                <ModalCard
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    It won’t be possible to undo this action.
                    Are you sure you want to delete it?
                </ModalCard>
            </div>
        );
    }
}

export default AddToCard;