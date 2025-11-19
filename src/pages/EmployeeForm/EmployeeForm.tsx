import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormComponent, EmployeeFormWrapper } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import type { EmploeeFormValues } from "./types";

function EmployeeForm() {
  // const schema = Yup.object().shape({
  //     fullName: Yup.string()
  //         .required("Full name is required")
  //         .min(5, "Min 5 symbols")
  //         .max(50, "Max 50 symbols")
  //         .typeError("Full name must be string"),
  //     age: Yup.number()
  //         .required("Age is required")
  //         .min(18, "Min age - 18")
  //         .max(80, "Max age - 80")
  //         .typeError("Age must be number"),
  //     jobTitle: Yup.string()
  //         .max(30, "Max 30 symbols")
  //         .typeError("Job title must be string"),
  //     agreement: Yup.boolean()
  //         .oneOf([true], "Accept agreement"),
  // });

  // const formik = useFormik({
  //     initialValues: {
  //         fullName: "",
  //         age: "",
  //         jobTitle: "",
  //         agreement: false,
  //     } as EmploeeFormValues,

  //     validationSchema: schema,
  //     validateOnChange: false,

  //     onSubmit: (values: EmploeeFormValues): void => {
  //         console.log(values);
  //     },
  // });

  // console.log(formik);

  return (
    <EmployeeFormWrapper>
      <EmployeeFormComponent>
        <Input
          name="name"
          label="Name"
          placeholder="Enter your name"
          value=""
          error=""
          onChange={() => {}}
        />
        <Input
          name="surname"
          label="Surname"
          placeholder="Enter your surame"
          value=""
          error=""
          onChange={() => {}}
        />
        <Input
          name="age"
          label="Age"
          placeholder="Enter your age"
          value=""
          error=""
          onChange={() => {}}
        />
        <Input
          name="jobPosition"
          label="Job Position"
          placeholder="Enter your job position"
          value=""
          error=""
          onChange={() => {}}
        />
        <Button name="Create" type="submit" />
      </EmployeeFormComponent>
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
