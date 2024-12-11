import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";
import Label from "../components/Label";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = (e) => {
    if (name !== undefined) {
      return;
    }
    if (lastName !== undefined) {
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      return;
    }
    if (email === undefined) {
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (birthdate === undefined) {
      return;
    }
    console.log("Name:", name);
    console.log("Lastname:", lastName);
    console.log("Phone number:", phoneNumber);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Birthdate:", birthdate);
  };

  return (
    <Container customStyle={{ minHeight: "800px" }}>
      <Label>Create account</Label>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Phone numer"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
