import SideBar from '../Components/SideBar/SideBar';
import Header from '../Components/Header/Header';
import { FC, ReactElement } from 'react';
import Subheader from '../Components/Subheader/Subheader';
import './styles.css';

type Layoutpropstype = {
  label: string;
  content: ReactElement;
  actionBoxLabel: string;
  imageUrl: string;
};
const Layout: FC<Layoutpropstype> = (props) => {
  return (
    <div className='outer'>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <main className='contentSection'>
          <Subheader
            label={props.label}
            labelActionbox={props.actionBoxLabel}
            imageUrl={props.imageUrl}
          />
          {props.content}
        </main>
      </div>
    </div>
  );
};

export default Layout;
