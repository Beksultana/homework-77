import React, {Component, Fragment} from 'react';
import {fetchMessage} from "../../store/actions/messageSyncActions";
import {connect} from "react-redux";
import {Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import MessageThumbnail from "../../components/MessageThumbnail/MessgaeThubnile";

class MainContainer extends Component {

    componentDidMount(){
        this.props.fetchMessage()
    }

    render() {
        console.log(this.props.messages);
        const messages = this.props.messages.map(item => {
            return (
                <div key={item.id} style={{margin: '10px 0'}}>
                    <Card>
                        <CardBody style={{ display: 'flex', justifyContent: 'space-around'}}>
                            <MessageThumbnail image={item.image}/>
                            <CardTitle>Author: {item.author}</CardTitle>
                            <CardSubtitle>Message: {item.message}</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return (
            <Fragment>
                <h2>
                    Message
                    <Link to="/message/new">
                        <Button
                            color="primary"
                            className="float-right"
                        >
                            Add message
                        </Button>
                    </Link>
                </h2>
                {messages}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMessage: () => dispatch(fetchMessage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);