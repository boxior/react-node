import React from "react";
import styled from "styled-components";

const TodoFormWrap = styled.div`
    
`;

const TodoForm = styled.form`
    
`;

const TodoInput = styled.input`
    
`;

const TodoAddTodo = styled.button`
    
`;

function TodoFormView(props) {
    const {addTodo} = props;

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(e.currentTarget.title.value);
    }

    return (
        <TodoFormWrap>
            <TodoForm
                onSubmit={handleSubmit}
            >
                <TodoInput name={"title"}/>
                <TodoAddTodo>Add todo</TodoAddTodo>
            </TodoForm>
        </TodoFormWrap>
    );
}

export default TodoFormView;
