import root from "../../Auth.module.scss";

import { Name } from "./components/Name";
import { Agree } from "./components/Agree";

export const Create = ({ handleLogout, setTerms }) => {
  return (
    <div className={root.auth_inner}>
      <button
        type="button"
        className={`${root.auth_desc} ${root.auth_desc_logout}`}
        onClick={handleLogout}
      >
        ログイン画面に戻る
      </button>
      <Name />
      <Agree setTerms={setTerms} />

      <button type="submit" className={root.auth_btn}>
        登録
      </button>
    </div>
  );
};
