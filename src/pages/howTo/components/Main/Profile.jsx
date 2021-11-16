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
          Direct独自のフォーマットですべてのエンジニアが統一された情報を入力、自分の情報を管理することが可能です。
          <br />
          <br />
          人による記入の違いがなくなり、見やすい
          <span className={styles.howto_container_tag}>プロフィール</span>
          になります。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="言語・ツール・スキルなど" />
        <p>
          あなたが活躍できる
          <span className={styles.howto_container_tag}>言語</span>
          <span className={styles.howto_container_tag}>ツール</span>
          を積極的に書き入れましょう。
          <br />
          <br />
          <span className={styles.howto_container_tag}>スキル</span>
          <span className={styles.howto_container_tag}>URL</span>
          も、判断材料になります。
          <br />
          <br />
          <span className={styles.howto_container_tag}>プロフィール</span>
          は書けば、書くほど閲覧率・獲得率も上がります。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="職務経歴書" />
        <p>
          あなたがアップロードした
          <span className={styles.howto_container_tag}>職務経歴書</span>
          は営業が<span className={styles.howto_container_tag}>PDF</span>
          として閲覧が可能です。
          <br />
          <br />
          いつでも再アップロードが可能です。活動ごとにアップロードしていきましょう。
        </p>
      </div>
      <div className={styles.howto_container}>
        <Tag tag="リクエスト" />
        <p>
          営業から見たあなたの
          <span className={styles.howto_container_tag}>プロフィール</span>
          は、リクエストを承認しない限り一部の情報しか表示されていません。
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
