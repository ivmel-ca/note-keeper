import React from "react";
import {connect} from 'react-redux';

import './list.styles.scss';


const List = (props) => {
    const { notes } = props;

    return (
        <ul>
            {
                notes.map(note => (
                    <li key={ note.id }>
                        { note.text }
                    </li>
                ))
            }
        </ul>
    )
};

const mapStateToProps = store => ({
    notes: store.notes,
});

export default connect(mapStateToProps)(List);