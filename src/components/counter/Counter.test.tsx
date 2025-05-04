import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test("renders the counter", () => {
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
  });

  test("renders initial count 0", () => {
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("0");
  });

  test("renders 1 after button click", async () => {
    const user = userEvent.setup();
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });

  // test("renders a count of 10 by set button", async () => {
  //   const user = userEvent.setup();
  //   // 入力フィールドを取得して10を入力
  //   const amountInput = screen.getByRole("spinbutton");
  //   await user.type(amountInput, "10");
  //   expect(amountInput).toHaveValue(10);

  //   // Setボタンを取得してクリック
  //   const setButton = screen.getByRole("button", { name: /set/i });
  //   await user.click(setButton);
  //   const counterElement = screen.getByRole("heading");
  //   expect(counterElement).toHaveTextContent("10");
  // });

  // test("elemtns are focused in the right order", async () => {
  //   const user = userEvent.setup();
  //   const incrementButton = screen.getByRole("button", { name: /increment/i });
  //   const amountInput = screen.getByRole("spinbutton");
  //   const setButton = screen.getByRole("button", { name: /set/i });

  //   await user.tab();
  //   expect(incrementButton).toHaveFocus();

  //   await user.tab();
  //   expect(amountInput).toHaveFocus();

  //   await user.tab();
  //   expect(setButton).toHaveFocus();
  // });
});
