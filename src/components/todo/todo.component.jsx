import React from "react";

import  './todo.styles.scss';
import Form from "../form/form.component";
import List from "../list/list.component";

class Todo extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="todo">
                <Form/>
                <List/>
            </div>
        )
    }
}

export default Todo;