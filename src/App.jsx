import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Members from './routes/Members';
import Ministries from './routes/Ministries';
import Finance from './routes/Finance';
import Groups from './routes/Groups';
import Events from './routes/Events';
import 'antd/dist/antd.js'
import { Button, FloatButton, Layout, Modal } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MenuComponent from './components/Menu';
import TitleBlock from './components/Title';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import { FaUsers } from 'react-icons/fa';
import { BiCalendarEvent } from "react-icons/bi";
import { MdGroupWork } from "react-icons/md";
import { useState } from "react";
import MemberForm from './components/addMemberForm';
import { fetchMembersData } from './redux/members/membersSlice';


function App() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openMemeberForm, setOpenMemberForm] = useState(false);
  const [openEventForm, setopenEventForm] = useState(false);
  const [openGroupForm, setopenGroupForm] = useState(false);
  const [openMinistriesForm, setopenMinistriesForm] = useState(false);
  const showModal = (buttonName) => {
    if(buttonName === "member")
        setOpenMemberForm(true);
    else if(buttonName === "event")
        setopenEventForm(true);
    else if(buttonName === "group")
        setopenGroupForm(true);
    else if(buttonName === "ministry")
        setopenMinistriesForm(true);
  };
  const handleOk = (buttonName) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (buttonName === "member")
        setOpenMemberForm(false);
      else if (buttonName === "event")
        setopenEventForm(false);
      else if (buttonName === "group")
        setopenGroupForm(false);
      else if (buttonName === "ministry")
        setopenMinistriesForm(false);
    }, 3000);
  };
  const handleCancel = (buttonName) => {
    if (buttonName === "member")
      setOpenMemberForm(false);
    else if (buttonName === "event")
      setopenEventForm(false);
    else if (buttonName === "group")
      setopenGroupForm(false);
    else if (buttonName === "ministry")
      setopenMinistriesForm(false);
  };

  useEffect(() => {
    dispatch(fetchMembersData());
  }, [dispatch]);

  return (
    <div className="App">
      {/* main layout of the dashboard is rendered here */}
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

      {/* floating button for adding new items || it handles the opening of the button group */}
      <FloatButton
        shape="circle"
        style={{
          right: 10,
        }}
        onClick={() => setDisplay(!display)}
        icon={<MdOutlineAdd />}
      />

      {/* floating button group for adding new items || contains buttons for adding, members, events, groups, ministries, and a close button for the button group */}
      <FloatButton.Group
        shape="square"
        onClick={() => setDisplay(!display)}
        style={{
          right: 10,
          display: display ? "block" : "none",
        }}
      >
        <FloatButton tooltip="add new event" icon={<BiCalendarEvent />} onClick={() => {
          showModal('event')
          setDisplay(!display)
          }}/>
        <FloatButton tooltip="add new group" icon={<MdGroupWork />} onClick={() => {
          showModal('group')
          setDisplay(!display)
          }}/>
        <FloatButton tooltip="add new ministry" icon={<FaUsers />} onClick={() => {
          showModal('ministry')
          setDisplay(!display)
          }}/>
        <FloatButton tooltip="add new member" icon={<AiOutlineUserAdd />} onClick={() => {
          showModal('member')
          setDisplay(!display)
          }}/>
        <FloatButton icon={<AiOutlineClose />} onClick={() => setDisplay(!display)} />
      </FloatButton.Group>

      {/* modals for adding new items || there are four modals. One each for membersForm, eventsForm, groupForm, and ministryForm. these forms are for adding new records */}
      <Modal
        open={openMemeberForm}
        title="Add new member"
        onOk={() => handleOk('member')}
        onCancel={() => handleCancel('member')}
        footer={[
          <Button key="back" onClick={() => handleCancel('member')}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={() => handleOk('member')}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={() => handleOk('member')}
          >
            Search on Google
          </Button>,
        ]}
      >
        <MemberForm />
      </Modal>

      <Modal
        open={openEventForm}
        title="Add new event"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <MemberForm />
      </Modal>

      <Modal
        open={openGroupForm}
        title="Add new group"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <h3>member add</h3>
        {/* <MemberForm /> */}
      </Modal>

      <Modal
        open={openMinistriesForm}
        title="Add new Ministry"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <MemberForm />
      </Modal>
    </div>
  );
}

export default App;
