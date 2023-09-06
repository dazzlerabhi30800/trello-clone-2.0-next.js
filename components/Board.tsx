"use client";

import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  useEffect(() => {
    // get Board
  }, []);
  return (
    <h1>Hello World</h1>
    //    <DragDropContext>
    //        <Droppable droppableId="board" direction="horizontal" type="column">
    //          {(provided) => <div>Rendering all the column</div>}
    //        </Droppable>
    //      </DragDropContext>
  );
}

export default Board;
