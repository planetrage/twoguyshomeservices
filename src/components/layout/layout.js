import { Fragment } from 'react';
import HeaderOne from '../header/header-1';
import Footer from './footer';

export * from '../../components/scroll';

function Layout(props) {
  return (
    <Fragment>
      <HeaderOne />
      <main className="olympus-sky" style={{ minHeight: '100vh' }}>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
