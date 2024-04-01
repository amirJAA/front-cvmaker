import React from "react";
import { PreviewPersonal } from "./preview-personal";
import { PreviewSocial } from "./preview-social";
import { PreviewLanguage } from "./preview-language";
import { PreviewHobbies } from "./preview-hobby";
import { PreviewEducation } from "./preview-education";
import { PreviewExperience } from "./preview-experience";
import { PreviewSkills } from "./preview-skills";
import { PreviewProjects } from "./preview-project";
import { PreviewCourses } from "./preview-course";
import { PreviewReferences } from "./preview-reference";
import { PreviewHeader } from "./preview-header";
import styles from "./preview.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setLeftSide, setRightSide } from "../../../stores/site";

export const Preview = ({ array }, ref) => {
  const dispatch = useDispatch();
  const { leftSide, rightSide, colors, isContentEditable } = useSelector(
    (state) => state.site
  );

  const handleOnDrugEndLeft = (result) => {
    if (!result.destination) return;
    const items = Array.from(leftSide);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setLeftSide(items));
  };

  const handleOnDrugEndRight = (result) => {
    if (!result.destination) return;
    const items = Array.from(rightSide);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setRightSide(items));
  };

  const previews = {
    PreviewSocial: <PreviewSocial />,
    PreviewLanguage: <PreviewLanguage />,
    PreviewHobbies: <PreviewHobbies />,
    PreviewEducation: <PreviewEducation />,
    PreviewExperience: <PreviewExperience />,
    PreviewSkills: <PreviewSkills />,
    PreviewProjects: <PreviewProjects />,
    PreviewCourses: <PreviewCourses />,
    PreviewReferences: <PreviewReferences />,
  };
  

  return (
    <div
      className={styles.apercu}
      style={{ background: colors.body }}
      ref={ref}
      contentEditable={isContentEditable}
      suppressContentEditableWarning={true}
    >
      <div
        className={styles.gauche}
        style={{ background: colors.secondary, color: colors.text1 }}
      >
        <PreviewPersonal />
        <DragDropContext onDragEnd={handleOnDrugEndLeft}>
          <Droppable droppableId="leftSide">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {leftSide.map((item, index) => (
                  <Draggable
                    key={`${item.id}`}
                    draggableId={`${item.id}`}
                    index={index}
                    isDragDisabled={isContentEditable}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {previews[item.component]}
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
      <div className={styles.droite} style={{ color: colors.text2 }}>
        <PreviewHeader />
        <DragDropContext onDragEnd={handleOnDrugEndRight}>
          <Droppable droppableId="rightSide">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {rightSide.map((item, index) => (
                  <Draggable
                    key={`${item.id}`}
                    draggableId={`${item.id}`}
                    index={index}
                    isDragDisabled={isContentEditable}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {previews[item.component]}
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
    </div>
  );
}

export default Preview;
