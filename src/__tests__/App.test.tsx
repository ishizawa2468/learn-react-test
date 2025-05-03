import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // ユーザー操作をシミュレート
import App from "../App";

test("renders the heading", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});

test("renders the button and updates count on click", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /count is 0/i });
  expect(button).toBeInTheDocument();

  // ボタンをクリックし、状態更新を待つ
  await userEvent.click(button);

  // 状態更新後のボタンを確認
  expect(
    screen.getByRole("button", { name: /count is 1/i })
  ).toBeInTheDocument();
});
