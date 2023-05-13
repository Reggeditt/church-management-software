import { FloatButton } from "antd";

import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { useState } from "react";

const Events = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        If there's an event, youre sure to find it here!
      </div>
      <FloatButton.Group
        trigger="hover"
        open={open}
        onOpenChange={() => setOpen(!open)}
        shape="square"
        style={{
          right: 94,
        }}
      >
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>

    </>
  )
};

export default Events;
