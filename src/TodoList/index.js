import React from "react";
import styled from "styled-components";

const TodoListWrap = styled.div`
    
`;

function TodoListView(props) {
    const {
        todos,
        handleDelete,
        handleUpdate,

    } = props;

    return (
        <TodoListWrap>
            <ul>
                {todos.map(t => {
                    return (
                        <li
                            key={t.id}
                        >
                            <input
                                type="checkbox"
                                name={`title${t.id}`}
                                checked={t.completed}
                                onChange={(e) => handleUpdate({id: t.id, completed: e.currentTarget.checked} )}
                            />
                            {t.title}
                            <button
                                onClick={() => handleDelete(t.id)}
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </TodoListWrap>
    );
}

export default TodoListView;
