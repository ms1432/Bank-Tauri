import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Label from "../components/Label";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <Label>Bank</Label>
      <Button
        text="Login"
        width="40%"
        handleOnClick={() => handleClick("/Login")}
      />
      <Button
        text="Register"
        width="40%"
        handleOnClick={() => handleClick("/Register")}
      />
    </Container>
  );
}

export default Home;
