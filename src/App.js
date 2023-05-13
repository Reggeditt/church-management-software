import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './routes/Home';
import Members from './routes/Members';
import Ministries from './routes/Ministries';
import Finance from './routes/Finance';
import Groups from './routes/Groups';
import Events from './routes/Events';
import 'antd/dist/antd.js'
import { FloatButton, Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuComponent from './components/Menu';
import TitleBlock from './components/Title';
import { LoadMembersData } from './redux/members/membersSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import { FaUsers } from 'react-icons/fa';
import { BiCalendarEvent } from "react-icons/bi";
import { MdGroupWork } from "react-icons/md";
import { useState } from "react";



function App() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const generateData = () => {
    const membersData = [];
    for(let i = 0; i < 100; i++) {
      membersData.push({
        id: i,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        photo: faker.image.avatar(),
        status: "active",
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        dob: faker.date.birthdate(),
        jobArea: faker.person.jobArea(),
        jobType: faker.person.jobType(),
        jobTitle: faker.person.jobTitle(),
        jobDescription: faker.person.jobDescriptor(),
        sex: faker.person.sex(),
        landmarks: [faker.location.cardinalDirection(), faker.location.cardinalDirection()],
        roles: ['member'],
        Portfolios: [],
        groups: ["group1", "group2"],
        ministries: ["ministry1", "ministry2"],
        payments: [],
      });
    }
    return membersData;
  };
  useEffect(() => {
    const membersData = generateData();
    dispatch(LoadMembersData(membersData));
  }, [dispatch]);

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
      <FloatButton
        shape="circle"
        style={{
          right: 10,
        }}
        onClick={() => setDisplay(!display)}
        icon={<MdOutlineAdd />}
      />
      <FloatButton.Group
        shape="square"
        onClick={() => setDisplay(!display)}
        style={{
          right: 10,
          display: display ? "block" : "none",
        }}
      >
        {/* <FloatButton icon={<MdOutlineAdd />} /> */}
        <FloatButton tooltip="add new event" icon={<BiCalendarEvent />}/>
        <FloatButton tooltip="add new group" icon={<MdGroupWork />}/>
        <FloatButton tooltip="add new ministry" icon={<FaUsers />}/>
        <FloatButton tooltip="add new member" icon={<AiOutlineUserAdd />}/>
        <FloatButton icon={<AiOutlineClose />} onClick={() => setDisplay(!display)} />
      </FloatButton.Group>
    </div>
  );
}

export default App;
