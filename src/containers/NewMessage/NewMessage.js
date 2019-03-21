import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {createMessage} from "../../store/actions/messageSyncActions";
import MessageForm from "../../components/MessgaeForm/MessageForm";

class NewMessage extends Component {
    createMessage = messageData => {
        this.props.onMessageCreated(messageData).then(() => {
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h2>New message</h2>
                <MessageForm onSubmit={this.createMessage}/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onMessageCreated: messageData => dispatch(createMessage(messageData))
});

export default connect(null, mapDispatchToProps)(NewMessage);