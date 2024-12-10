import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";
import Label from "../components/Label";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const handleSubmit = (e) => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container>
      <Label>Login</Label>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          text="Login"
          handleOnClick={() => handleSubmit()}
        />
        <Button
          type="button"
          text="Home"
          handleOnClick={() => handleClick("/")}
        />
      </Form>
    </Container>
  );
}

export default Login;
