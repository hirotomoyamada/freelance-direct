import styles from "../Create.module.scss";
import root from "../../../Auth.module.scss";

import { useFormContext } from "react-hook-form";

export const Position = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={root.auth_col}>
      <span className={styles.tag}>ポジション</span>
      <div className={styles.select}>
        <select
          className={`${root.auth_input} ${
            errors.position && root.auth_input_error
          }`}
          {...register("position", {
            required: {
              value: true,
              message: "ポジションを選択してください",
            },
          })}
        >
          <option value="フロントエンドエンジニア">
            フロントエンドエンジニア
          </option>
          <option value="バックエンドエンジニア">バックエンドエンジニア</option>
          <option value="アプリエンジニア">アプリエンジニア</option>
          <option value="サーバーサイドエンジニア">
            サーバーサイドエンジニア
          </option>
          <option value="インフラエンジニア">インフラエンジニア</option>
          <option value="システムエンジニア">システムエンジニア</option>
          <option value="セキュリティエンジニア">セキュリティエンジニア</option>
          <option value="マークアップエンジニア">マークアップエンジニア</option>
          <option value="PM/PL">PM/PL</option>
          <option value="Webディレクター">Webディレクター</option>
          <option value="Webデザイナー">Webデザイナー</option>
          <option value="Webプランナー">Webプランナー</option>
          <option value="ゲームプランナー">ゲームプランナー</option>
          <option value="ITコンサルタント">ITコンサルタント</option>
          <option value="SAP">SAP</option>
          <option value="サポート">サポート</option>
          <option value="その他">その他</option>
        </select>
        {errors.position?.message && (
          <span className={root.auth_error}>{errors.position?.message}</span>
        )}
      </div>
    </div>
  );
};
