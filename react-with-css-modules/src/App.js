import Button from "./components/button/Button";

function App() {
  return (
    <ul>
      <li>
        <Button variant="default">Default Button</Button>
      </li>
      <li>
        <Button variant="warning">Warning Button</Button>
      </li>
      <li>
        <Button variant="smallWarning">Warning Button</Button>
      </li>
      <li>
        <Button variant="danger">Danger Button</Button>
      </li>
      <li>
        <Button variant="info">Info Button</Button>
      </li>
      <li>
        <Button variant="dark">Dark Button</Button>
      </li>
    </ul>
  );
}

export default App;
