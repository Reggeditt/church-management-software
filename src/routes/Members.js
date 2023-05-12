import { Col, Divider, Row, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useSelector } from "react-redux";

const Members = () => {
  const members = useSelector((state) => state.members);
  console.log(members);
  return (
    <>
      <Space direction="horizontal"></Space>
      <Divider />
      <Row>
        <Col span={24}>
          <Table
            dataSource={members.membersInfo}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
              },
              {
                title: "Phone",
                dataIndex: "phone",
                key: "phone",
              },
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
              },
              {
                title: "Ministries",
                dataIndex: "ministries",
                key: "ministries",
              },
              {
                title: "Actions",
                dataIndex: "actions",
                render: () => (
                  <ButtonGroup>
                    <button>Edit</button>
                    <button type="primary" danger>Delete</button>
                  </ButtonGroup>
                ) 
              },
            ]}
          />
        </Col>
      </Row>
    </>
  )
};

export default Members;
