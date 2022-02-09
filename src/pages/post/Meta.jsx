import { Helmet } from "react-helmet-async";

export const Meta = ({ post }) => {
  return (
    <Helmet>
      <title>
        {post.title
          ? `${post.title}｜Freelance Direct`
          : "Freelance Direct｜営業支援App"}
      </title>
    </Helmet>
  );
};
