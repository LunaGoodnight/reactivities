import { Form, Formik } from "formik";
import { MyTextInput } from "../../app/common/form/MyTextInput";
import { Button } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

export const LoginForm = () => {
  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/login`;
    const data = {
      id: uuid(),
      email,
      password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response) {
        const final = response.json();
        console.log({ final });
      }
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, formikHelpers) => {
        console.log(values);
        handleLogin({ email: values.email, password: values.password });
      }}
    >
      {({ handleSubmit }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput placeholder="email" name="email" />
          <MyTextInput placeholder="password" name="password" type="password" />
          <Button positive content="Login" type="submit" fluid />
        </Form>
      )}
    </Formik>
  );
};
