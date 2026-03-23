import { Fragment } from 'react';
import HeaderOne from '../header/header-1';
import Footer from './footer';

function Layout(props) {
  return (
    <Fragment>
      <HeaderOne />
      <main style={{ minHeight: '100vh' }}>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
