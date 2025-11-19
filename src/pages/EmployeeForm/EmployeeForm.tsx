import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormComponent, EmployeeFormWrapper } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import type { EmployeeFormValues } from "./types";
import { EmployeeContext } from "components/Layout/Layout";

function EmployeeForm() {
    const { data, onDataChange } = useContext(EmployeeContext);
    const schema = Yup.object().shape({
        name: Yup.string()
            .required("Full name is required")
            .min(2, "Min 2 symbols")
            .max(50, "Max 50 symbols")
            .typeError("Full name must be string"),
        surname: Yup.string()
            .required("Full name is required")
            .max(15, "Max 15 symbols")
            .typeError("Full name must be string"),
        age: Yup.number()
            .required("Age is required")
            .min(18, "Min age - 18")
            .max(80, "Max age - 80")
            .typeError("Age must be number"),
        jobPosition: Yup.string()
            .max(30, "Max 30 symbols")
            .typeError("Job title must be string"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            age: "",
            jobPosition: "",
        } as EmployeeFormValues,

        validationSchema: schema,
        validateOnChange: false,

        onSubmit: (values: EmployeeFormValues): void => {
            const data = {
                name: values.name,
                surname: values.surname,
                age: values.age,
                jobPosition: values.jobPosition,
            };
            onDataChange(data);
        },
    });

    console.log(formik);

    return (
        <EmployeeFormWrapper>
            <EmployeeFormComponent onSubmit={formik.handleSubmit}>
                <Input
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    error={formik.errors.name}
                    onChange={formik.handleChange}
                />
                <Input
                    name="surname"
                    label="Surname"
                    placeholder="Enter your surame"
                    value={formik.values.surname}
                    error={formik.errors.surname}
                    onChange={formik.handleChange}
                />
                <Input
                    name="age"
                    label="Age"
                    placeholder="Enter your age"
                    value={formik.values.age}
                    error={formik.errors.age}
                    onChange={formik.handleChange}
                />
                <Input
                    name="jobPosition"
                    label="Job Position"
                    placeholder="Enter your job position"
                    value={formik.values.jobPosition}
                    error={formik.errors.jobPosition}
                    onChange={formik.handleChange}
                />
                <Button name="Create" type="submit" />
            </EmployeeFormComponent>
        </EmployeeFormWrapper>
    );
}

export default EmployeeForm;
