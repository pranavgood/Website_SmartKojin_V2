import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, activePath }) {
  return (
    <>
      <Header activePath={activePath} />
      {children}
      <Footer />
    </>
  );
}
