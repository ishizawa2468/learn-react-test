import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { logRoles } from "@testing-library/dom";

describe("Skills component", () => {
  beforeEach(() => {
    render(<Skills skills={["JavaScript", "React", "CSS"]} />);
  });

  test("renders list", () => {
    // ul
    const skillsList = screen.getByRole("list");
    expect(skillsList).toBeInTheDocument();
  });

  test("renders a element of skills", () => {
    // li
    const listElement = screen.getAllByRole("listitem");
    // ToBeIntheDocumentは複数の確認に使わない。mapとか。
    expect(listElement).toHaveLength(3);
  });

  test("renders login button", () => {
    const loginButton = screen.getByRole("button", {
      name: "ログイン",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("doesn't render logout button initially", () => {
    // 存在しない場合はqueryで取得を試み、notで確認する。
    const logoutButton = screen.queryByRole("button", {
      name: "ログアウト",
    });
    expect(logoutButton).not.toBeInTheDocument();
  });

  test("renders logout button after login", async () => {
    // 非同期処理ではasync/awaitを使い、find系を使う。
    // APIなどのテストに使われる
    const logoutButton = await screen.findByRole(
      "button",
      {
        name: "ログアウト",
      },
      {
        // 2秒待つ。デフォルトは1000ms。
        timeout: 2000,
      }
    );
    expect(logoutButton).toBeInTheDocument();
  });

  // test("for debug", () => {
  //   const view = render(<Skills skills={["JavaScript", "React", "CSS"]} />);
  //   // レンダリングされたコンポーネント内のロールを確認する。
  //   logRoles(view.container);
  //   // この時点でのDOMが確認できる。
  //   screen.debug();
  // });
});
