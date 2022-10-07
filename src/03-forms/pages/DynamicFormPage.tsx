import { Formik, Form } from "formik";
import { MySelectInput, MytextInput } from "../components";
import formJSON from "../data/custom-form.json";
import * as Yup from "yup";

const InitialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  InitialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo de ${(rule as any).value || 2} caracteres `
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Falta completar el correo");
    }
  }
  requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic form page</h1>
      <Formik
        initialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJSON.map(({ type, name, placeholder, label, option }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MytextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelectInput key={name} label={label} name={name}>
                    <option value="">Select Option </option>
                    {option?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {" "}
                        {opt.label}{" "}
                      </option>
                    ))}
                  </MySelectInput>
                );
              }
              return <span>Type:{type} no es soportado </span>;
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
