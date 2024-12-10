import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";
import Label from "../components/Label";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Birthdate:", birthdate);

    alert("Registration successful!");
  };

  return (
    <Container customStyle={{ minHeight: "800px" }}>
      <Label>Create account</Label>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Button
          type="button"
          text="Register"
          handleOnClick={() => handleSubmit()}
        />
        <Button
          type="button"
          text="Home"
          handleOnClick={() => handleClick("/")}
        />
      </Form>
      <p>
        Already have an account?{" "}
        <Button
          type="button"
          text="Login"
          handleOnClick={() => handleClick("/Login")}
        />
      </p>
    </Container>
  );
}

export default Register;
