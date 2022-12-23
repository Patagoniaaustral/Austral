import Footer from '../src-client/components/Footer';
import { NavBar } from '../src-client/components/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

