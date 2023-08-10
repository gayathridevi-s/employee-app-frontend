import SideBar from '../Components/SideBar/SideBar';
import Header from '../Components/Header/Header';
import { FC } from 'react';
import Subheader from '../Components/Subheader/Subheader';
import './styles.css';
type Layoutpropstype = {
  label: string;
};
const Layout: FC<Layoutpropstype> = (props) => {
  return (
    <div className='outer'>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <body className='contentSection'>
          <Subheader label={props.label} />
        </body>
      </div>
    </div>
  );
};

export default Layout;
