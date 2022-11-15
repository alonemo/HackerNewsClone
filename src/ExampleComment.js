import { useState } from 'react';
import { ReloadOutlined, DownOutlined } from '@ant-design/icons';
import { Comment, Button, Tooltip } from 'antd';
const ExampleComment = ({ children }) => {
  const [rotation, setRotation] = useState(-90);
  return (
    <Comment
      author={<a>Han Solo</a>}
      datetime="12.10.2022 19:34:59"
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }
      style={{ bottom: 12 }}
      actions={children && [
        <Tooltip title="Show replies">
          <DownOutlined
            rotate={rotation}
            onClick={() => {
              if (rotation === 0) {
                setRotation(-90);
              } else {
                setRotation(0);
              }
            }}
          />
        </Tooltip>,
      ]}
    >
      {rotation === 0 ? children : ''}
    </Comment>
  );
};

export default ExampleComment;
