import Header from "../Header";

export const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
