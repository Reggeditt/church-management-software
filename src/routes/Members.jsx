import { Button, Col, Divider, Row, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useSelector } from "react-redux";

let tableColumns = [
  {title: 'Age', value:  'age', dataIndex: 'age'},
  {title: 'Sex', value:  'sex', dataIndex: 'sex'},
  {title: 'Email', value:  'email', dataIndex: 'email'},
  {title: 'Phone', value:  'phone', dataIndex: 'phone'},
  {title: 'Address', value:  'address', dataIndex: 'address'},
  {title: 'Landmark', value:  'landmark', dataIndex: 'landmark'},
];

const Members = () => {
  const members = useSelector((state) => state.members);
  console.log('members in component from state: ', members);
 
  return (
    <>
      <Divider />
      <Row>
        <Col span={24} style={{overflow: "scroll"}}>
          <Table
            dataSource={members.membersInfo}
            columns={[
              {
                title: "First Name",
                dataIndex: "first_name",
                key: "name",
                filters: [
                  {
                    text: 'Joe',
                    value: 'Joe',
                  },
                  {
                    text: 'Category 1',
                    value: 'Category 1',
                  },
                  {
                    text: 'Category 2',
                    value: 'Category 2',
                  },
                ],
                
                filterMode: 'tree',
                filterSearch: true,
                onFilter: (value, record) => record.name.startsWith(value),
                width: '30%',
              },
              {
                title: "Last Name",
                dataIndex: "last_name",
                key: "name",
              },
              ...tableColumns,
              {
                title: "Actions",
                dataIndex: "actions",
                fixed: "right",
                render: () => (
                  <ButtonGroup>
                    <Button>Edit</Button>
                    <Button type="primary" danger>Delete</Button>
                  </ButtonGroup>
                ) 
              },
            ]
          }
          />
        </Col>
      </Row>
    </>
  )
};

export default Members;
