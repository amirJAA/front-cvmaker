import React from "react";
import { useDispatch } from "react-redux";
import {Language} from "../helpers/language";
import {FormMobile} from "./form-mobile";
import {FormButtons} from "./form-button";
import {FormColors} from "./form-color";
import {FormMargins} from "./form-margin";
import {FormPersonal} from "./form-personal";
import {FormSocial} from "./form-social";
import {FormLanguage} from "./form-language";
import {FormHobbies} from "./form-hobby";
import {FormEducation} from "./form-education";
import {FormExperience} from "./form-experience";
import {FormSkills} from "./form-skills";
import {FormProjects} from "./form-project";
import {FormCourses} from "./form-course";
import {FormReferences} from "./form-references";
import {FormFooter} from "./form-footer";
import {Buttons} from "../helpers/buttons";
import {Range} from "../helpers/range";
import styles from './form.css';

export const Form = ({ handlePrint }) => {
  const dispatch = useDispatch();

  const handleResetData = (setter) => {
    dispatch(setter([]));
  };

  return (
    <div className={styles.form}>
      <Language />
      <FormMobile />
      <FormButtons handlePrint={handlePrint} />
      <FormColors />
      <FormMargins />
      <FormPersonal />
      <FormSocial handleResetData={handleResetData} />
      <FormLanguage handleResetData={handleResetData} />
      <FormHobbies handleResetData={handleResetData} />
      <FormEducation handleResetData={handleResetData} />
      <FormExperience handleResetData={handleResetData} />
      <FormSkills handleResetData={handleResetData} />
      <FormProjects handleResetData={handleResetData} />
      <FormCourses handleResetData={handleResetData} />
      <FormReferences handleResetData={handleResetData} />
      <FormFooter />
      <Buttons />
      <FormColors />
      <Language />
      <FormMargins />
      <Range />
    </div>
  );
}

export default Form;
