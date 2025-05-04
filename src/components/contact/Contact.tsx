function Contact() {
  return (
    <>
      <h1>お問い合わせフォーム</h1>
      <p>すべてのフィールドは必須項目です。</p>
      <img src="https://sample_img.png" alt="sample alt" />

      <form action="">
        <div>
          <label htmlFor="name" data-testid="refactor-name">
            お名前
          </label>
          <input
            type="text"
            id="name"
            placeholder="フルネーム"
            value="Full Name"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="questions">お問い合わせ内容</label>
          <select name="questions" id="questions">
            <option value="">お問い合わせ内容を選択してください。</option>
            <option value="dev">開発案件のご相談</option>
            <option value="video">撮影のご相談</option>
            <option value="sns-marketing">SNSマーケティングのご相談</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            利用規約に同意します。
          </label>
        </div>
        <button>送信</button>
      </form>
    </>
  );
}

export default Contact;
