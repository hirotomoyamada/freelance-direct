import styles from "../../HowTo.module.scss";
import { Tag } from "../tag/Tag";

export const Profile = () => {
  return (
    <div className={styles.howto_main}>
      <h1 className={styles.howto_ttl}>プロフィール</h1>
      <p className={styles.howto_desc}>あなたのプロフィールを充実させよう</p>
      <div className={styles.howto_container}>
        <Tag tag="プロフィール" />
        <p>
          Freelance
          Direct独自のフォーマットですべてのエンジニアが統一された情報を入力、自分の情報を管理することが可能です。人による記入の違いがなくなり、見やすいプロフィールになります。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="言語・ツール・スキルなど" />
        <p>
          あなたが活躍できる言語やツールを積極的に書き入れましょう。スキルやURLも、判断材料になります。プロフィールは書けば、書くほど閲覧率・獲得率も上がります。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="職務経歴書" />
        <p>
          あなたがアップロードした職務経歴書は営業がPDFとして閲覧が可能です。いつでも再アップロードが可能です。活動ごとにアップロードしていきましょう。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="リクエスト" />
        <p>
          営業から見たあなたのプロフィールは、リクエストを承認しない限り一部の情報しか表示されていません。
          <br />
          <br />
        </p>
        <span className={styles.howto_container_acnt}>
          下記がプロフィールに表示されていない情報になります。
        </span>
        <ul>
          <li>氏名</li>
          <li>メールアドレス</li>
          <li>URL</li>
          <li>職務経歴書</li>
        </ul>
      </div>
    </div>
  );
};
