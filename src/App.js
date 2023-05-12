import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Members from './routes/Members';
import Ministries from './routes/Ministries';
import Finance from './routes/Finance';
import Groups from './routes/Groups';
import Events from './routes/Events';

import 'antd/dist/antd.js'
import { Button, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuComponent from './components/Menu';
import TitleBlock from './components/Title';
function App() {
  return (
    <div className="App">
      <Layout className="container-wrap">
        <Header style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center"
        }}>
          <TitleBlock />
        </Header>
        <Layout>
          <Sider theme='light'>
            <MenuComponent />
          </Sider>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;


{/* <Button type='primary'>My button</Button>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/events" element={<Events />} />
      </Routes> */}