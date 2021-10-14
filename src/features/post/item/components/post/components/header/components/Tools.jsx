import styles from "../Header.module.scss";

export const Tools = ({ post }) => {
  const tools = post?.tools;

  return tools?.[0] ? (
    <div className={tools && styles.header_tags}>
      {tools?.[0] &&
        tools.map(
          (tool, index) =>
            tool &&
            index < 3 && (
              <div
                className={`${styles.header_tags_tag} ${styles.header_tags_tag_tools}`}
                key={index}
              >
                <h3 className={styles.header_tags_tag_txt}>{tool}</h3>
              </div>
            )
        )}
    </div>
  ) : (
    <></>
  );
};
