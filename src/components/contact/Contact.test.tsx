import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact Page", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test("renders the name form", () => {
    // ユーザーの視点に立って優先度を決める: https://testing-library.com/docs/queries/about#priority
    // Priority 1: セマンティックな表示要素を確認する場合
    const headingElement = screen.getByRole("heading", {
      name: "お問い合わせフォーム",
    });
    expect(headingElement).toBeInTheDocument();

    // Priority 4: セマンティックでなく、インタラクティブでない表示要素を確認する場合
    const paragraphText =
      screen.getByText("すべてのフィールドは必須項目です。");
    expect(paragraphText).toBeInTheDocument();

    // 画像
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    // 画像が見つからない場合に表示されるAltテキストを確認。いつでもできるのでこれがベター？
    const imageAlt = screen.getByAltText("sample alt");
    expect(imageAlt).toBeInTheDocument();

    // Priority 1: お名前ラベルと、それがtextboxであることを確認
    const nameElement = screen.getByRole("textbox", { name: "お名前" });
    expect(nameElement).toBeInTheDocument();

    // Priority 2: labelにお名前があるか確認。何のフォームかは問わない。
    const nameLabel = screen.getByLabelText("お名前");
    expect(nameLabel).toBeInTheDocument();

    // Priority 3: プレースホルダーにフルネームがあるか確認。ラベルがない場合。
    // https://www.nngroup.com/articles/form-design-placeholders/
    const namePlaceholder = screen.getByPlaceholderText("フルネーム");
    expect(namePlaceholder).toBeInTheDocument();

    // Priority 5: valueがある場合。あまり使わない。UserEventの方を使う。
    const nameValue = screen.getByDisplayValue("Full Name");
    expect(nameValue).toBeInTheDocument();

    // リファクタ用に使う。最終段階では残っていないほうがいい。
    const nameTestElement = screen.getByTestId("refactor-name");
    expect(nameTestElement).toBeInTheDocument();
  });

  test("renders the email form", () => {
    const emailElement = screen.getByRole("textbox", {
      name: "メールアドレス",
    });
    expect(emailElement).toBeInTheDocument();
  });

  test("renders the questions form", () => {
    const questionsElement = screen.getByRole("combobox");
    expect(questionsElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });

  test("renders the submit button", () => {
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
