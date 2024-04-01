import React from "react";
import { Formik, Form } from "formik";
import { Input, Select } from "../../helpers/form";
import { LanguageSchema } from "../../../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setLanguages } from "../../../../stores/form";
import { nanoid } from "nanoid";
import { Card } from "../../helpers/card";
import { CardDetail } from "../../helpers/card-detail";
import { Buttons } from "../../helpers/buttons";
import { useWords } from "../../../../hooks";

export const FormLanguage = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { languages } = useSelector((state) => state.form);
  const words = useWords();

  const handleSubmit = (values, actions) => {
    dispatch(
      setLanguages([
        ...languages,
        {
          _id: nanoid(),
          ...values,
        },
      ])
    );
    actions.resetForm();
  };

  return (
    <Card title={words.languages}>
      <Formik
        validationSchema={LanguageSchema}
        initialValues={{
          name: "",
          level: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder={words.language}
            />
            <Select
              label="Level"
              name="level"
              options={[
                { key: words.native, value: words.native },
                { key: "A1", value: "A1" },
                { key: "A2", value: "A2" },
                { key: "B1", value: "B1" },
                { key: "B2", value: "B2" },
                { key: "C1", value: "C1" },
                { key: "C2", value: "C2" },
              ]}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setLanguages}
              state={languages}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={languages}
        setter={setLanguages}
        print={["name", "level"]}
      />
    </Card>
  );
}

export default FormLanguage;