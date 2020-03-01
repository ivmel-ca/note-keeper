import React from "react";
import {connect} from "react-redux";

import './form.styles.scss';

import {addNote} from "../../redux/form/form.actions";

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: '',
        }
    }
    
    handleTextarea = event => {
        const value = event.target.value;
        
        this.setState({
            value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        
        const { list, addNote } = this.props;
        const { value } = this.state;

        const newNote = {
            id: Date.now(),
            text: value,
        };

        addNote(newNote);
    
        this.setState({
            value: '',
        });
    };

    render() {
        const { value } = this.state;
        return (
            <form
                action="post"
            onSubmit={this.handleSubmit}>
                <textarea
                    name="notetext"
                    placeholder="Type your note in"
                    value={value}
                    onChange={this.handleTextarea}
                >
                </textarea>
                <button type="submit">Add Note</button>
            </form>
        )
    }
}

const mapDispatchStateToProps = dispatch => ({
    addNote: (note) => dispatch(addNote(note)),
});

export default connect(null, mapDispatchStateToProps)(Form);