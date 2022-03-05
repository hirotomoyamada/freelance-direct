import React from "react";

import { Header } from "./components/header/Header";
import { Title } from "./components/title/Title";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Post: React.FC<PropType> = ({ post }) => {
  return (
    <div>
      <Header post={post} />

      <Title post={post} />

      <Main post={post} />

      <Footer post={post} />
    </div>
  );
};
