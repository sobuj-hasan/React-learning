import React from "react";

import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "This is titme One",
    description: "This is Description One, Lorem ipsum dolor sit amet",
  },
  {
    id: uuidv4(),
    title: "This is titme Two",
    description: "This is Description One, Lorem ipsum dolor sit amet",
  },
  {
    id: uuidv4(),
    title: "This is titme Three",
    description: "This is Description One, Lorem ipsum dolor sit amet",
  },
  {
    id: uuidv4(),
    title: "This is titme Four",
    description: "This is Description One, Lorem ipsum dolor sit amet",
  },
];

const List = () => {
    // console.log(uuidv4());
    return (
      <div>
          {todos.map((todo) => {
              const {id, title, description} = todo
              return (
                <div key={id} className="card">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              );
          })}
      </div>
    );
};

export default List;
