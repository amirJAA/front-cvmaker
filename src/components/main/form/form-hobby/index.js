import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../../helpers/form";
import { HobbiesSchema } from "../../../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setHobbies } from "../../../../stores/form";
import { nanoid } from "nanoid";
import { Card } from "../../helpers/card";
import { CardDetail } from "../../helpers/card-detail";
import { Buttons } from "../../helpers/buttons";
import { useWords } from "../../../../hooks";

export const FormHobbies = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { hobbies } = useSelector((state) => state.form);
  const words = useWords();

  const handleSubmit = (values, actions) => {
    dispatch(
      setHobbies([
        ...hobbies,
        {
          _id: nanoid(),
          name: values.name,
        },
      ])
    );
    actions.resetForm();
  };

  return (
    <Card title={words.hobbies}>
      <Formik
        validationSchema={HobbiesSchema}
        initialValues={{
          name: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder={words.hobby}
              sizeFull={true}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setHobbies}
              state={hobbies}
            />
          </Form>
        )}
      </Formik>
      <CardDetail data={hobbies} setter={setHobbies} print={["name"]} />
    </Card>
  );
}

export default FormHobbies;
