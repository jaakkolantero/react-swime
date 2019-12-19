import React from "react";

interface IProps {
  theme: "primary" | "secondary";
}

const TestComponent: React.FC<IProps> = ({ theme }) => (
  <div className={`test-component ${theme}`}>
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Tero</h2>
  </div>
);

export default TestComponent;
