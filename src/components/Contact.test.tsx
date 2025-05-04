import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  test("renders the contact form", () => {
    render(<Contact />);
    const nameElement = screen.getByRole("textbox", { name: "お名前" });
    expect(nameElement).toBeInTheDocument();

    const emailElement = screen.getByRole("textbox", {
      name: "メールアドレス",
    });
    expect(emailElement).toBeInTheDocument();

    const questionsElement = screen.getByRole("combobox");
    expect(questionsElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
