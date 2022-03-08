import * as Yup from "yup"

let initialValues = {
    name: "",
    email: "",
    channel: ""
}

let onSubmit = values => alert(`${values.name}, you have succesfully submitted your form.`);

let validationSchema = Yup.object({
    name: Yup.string().required("username is Required").min(4, "Name is too short - should be 4 chars minimum").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().email("Invalid email format").required("email is required"),
    channel: Yup.string().required("Required"),

});

let onBlur = values => console.log(values)

export { initialValues, onSubmit, validationSchema, onBlur };