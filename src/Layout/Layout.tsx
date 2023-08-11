import SideBar from '../Components/SideBar/SideBar';
import Header from '../Components/Header/Header';
import { FC, ReactElement } from 'react';
import Subheader from '../Components/Subheader/Subheader';
import './styles.css';

type Layoutpropstype = {
  label: string;
  content: ReactElement;
};
const Layout: FC<Layoutpropstype> = (props) => {
  return (
    <div className='outer'>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <main className='contentSection'>
          <Subheader label={props.label} />
          {props.content}
        </main>
      </div>
    </div>
  );
};

export default Layout;
