import React from "react";
import { Helmet } from "react-helmet-async";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Meta: React.FC<PropType> = ({ post }) => {
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
