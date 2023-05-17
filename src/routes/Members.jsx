import { Button, Col, Divider, Row, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useSelector } from "react-redux";

const Members = () => {
  const members = useSelector((state) => state.members);
  return (
    <>
      <Space direction="horizontal"></Space>
      <Divider />
      <Row>
        <Col span={24} style={{overflow: "scroll"}}>
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
                    <Button>Edit</Button>
                    <Button type="primary" danger>Delete</Button>
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
