import { act, render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Users from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users component", () => {
  test("renders header", async () => {
    fetchMock.resetMocks();
    await act(async () => {
      render(<Users />);
    });
    const header = await screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });

  test("renders user list", async () => {
    fetchMock.resetMocks();
    await act(async () => {
      render(<Users />);
    });
    // ユーザーリストの要素数が正しいを確認
    const userItems = await screen.findAllByRole("listitem");
    expect(userItems).toHaveLength(9);
  });

  // エラーレスポンスをテストするなら、本当はdescribeレベルで分けるべき。あるべきものとあるべきでないものをテストすると多いため。
  test("renderes error if 500 response", async () => {
    // 500エラーを返すモックして再レンダリング
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    await act(async () => {
      render(<Users />);
    });

    // エラーメッセージが表示されることを確認
    const error = await screen.findByText(/Error/i);
    expect(error).toBeInTheDocument();
    const userItems = await screen.queryAllByRole("listitem");
    // ユーザーリスト要素がないことを確認
    expect(userItems).toHaveLength(0);
  });
});
