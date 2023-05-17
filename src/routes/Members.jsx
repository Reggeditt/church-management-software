import { Button, Col, Divider, Form, Row, Space, Select, theme, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useSelector } from "react-redux";
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
const { Option } = Select;
const columns = [
  {label: 'Name', value:  'name'},
  {label: 'Email', value:  'email'},
  {label: 'Phone', value:  'phone'},
  {label: 'Address', value:  'address'},
  {label: 'Ministries', value:  'ministries'},
  {label: 'Groups', value:  'groups'},
  {label: 'Portfolios', value:  'portfolios'},
  {label: 'Payments', value:  'payments'},
];

let filterOptions = [
  {title: 'Email', value:  'email', dataIndex: 'email'},
  {title: 'Phone', value:  'phone', dataIndex: 'phone'},
  {title: 'Address', value:  'address', dataIndex: 'address'},
  {title: 'Ministries', value:  'ministries', dataIndex: 'ministries'},
];

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: '100%',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    const count = expand ? 6 : 4;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={12} key={i}>
          <Form.Item
            name={`field-${i+1}`}
            label={`Field ${i+1}`}
            rules={[
              {
                required: true,
                message: 'Select something!',
              },
            ]}
            initialValue="name"
          >
            <Select>
              {columns.map((column) => {
                console.log(column);
                return <Option value={column.value} key={column.value}>{column.label}</Option>
              })}
            </Select>
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };
  const onFinish = (values) => {
    filterOptions = [];
    const newColumns = Object.values(values);
    newColumns.forEach((column) => {
      filterOptions.push(
        {
          title: column,
          dataIndex: column,
          value: column,
        }
      );
    });
    console.log('Received columns of form: ', newColumns, filterOptions);
  };
  return (
    <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={4}>{getFields()}</Row>
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Space size="large">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> {expand ? 'Less fields' : 'More fields'}
          </a>
        </Space>
      </div>
    </Form>
  );
};

const Members = () => {

const members = useSelector((state) => state.members);
  // const { token } = theme.useToken();
  // const listStyle = {
  //   lineHeight: '200px',
  //   textAlign: 'center',
  //   background: token.colorFillAlter,
  //   borderRadius: token.borderRadiusLG,
  //   marginTop: 16,
  // };

  return (
    <>
      <Space direction="horizontal">
        <AdvancedSearchForm />
      </Space>
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
              ...filterOptions,
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
