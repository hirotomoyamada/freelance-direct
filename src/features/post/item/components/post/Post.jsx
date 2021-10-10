import { Header } from "./components/header/Header";
import { Title } from "./components/title/Title";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

export const Post = ({ post, user }) => {
  return (
    <div>
      <Header post={post} />

      <Title post={post} />

      <Main post={post} />

      <Footer post={post} user={user} />
    </div>
  );
};
