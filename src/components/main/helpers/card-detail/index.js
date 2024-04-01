import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styles from "./index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const CardDetail = ({ data, setter, print }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(setter(data.filter((item) => item._id !== id)));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setter(items));
  };

  if (data.length !== 0) {
    return (
      <div className={styles.cardDetail}>
        <hr className={styles.hr} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="details">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {data.map((item, index) => (
                  <Draggable
                    key={`${item._id}`}
                    draggableId={`${item._id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className={styles.item}>
                          <div className={styles.title}>
                            {print.map((it) => (
                              <span key={it}>{item[it]}</span>
                            ))}
                          </div>
                          <FaTimes
                            className={styles.icon}
                            onClick={() => handleRemoveItem(item._id)}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
};
export default CardDetail;
