import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import React, { useState } from 'react';
import './StoryPage.css';
import { Comment, Button, Tooltip } from 'antd';
import { ReloadOutlined, DownOutlined } from '@ant-design/icons';
import ExampleComment from './ExampleComment';

const { Header, Content } = Layout;

function StoryPage() {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const handleLeafIconChange = value => {
    return setShowLeafIcon(false);
  };
  const [loadings, setLoadings] = useState([]);
  const enterLoading = index => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: 'white',
        }}
        className="main-header"
      >
        <div className="main-logo">
          <h1>Hacker News Clone</h1>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 50px',
          marginTop: 72,
          minHeight: '100vh',
          height: '100%',
        }}
      >
        <div className="site-layout-content">Content</div>
        <div className="site-layout-content">
          <h1>
            Comments <span>{5}</span>
          </h1>
          <Tooltip title={!loadings[0] && 'Reload Comments'}>
            <Button
              type="default"
              icon={<ReloadOutlined />}
              loading={loadings[0]}
              onClick={event => {
                console.log(event.target);
                enterLoading(0);
              }}
              className={` ${
                loadings[0]
                  ? 'reload-comments-btn-disabled'
                  : 'reload-comments-btn'
              }`}
              disabled={loadings[0]}
            ></Button>
          </Tooltip>

          <div style={{ paddingTop: 12 }}>
            <ExampleComment>
              <ExampleComment>
                <ExampleComment />
                <ExampleComment />
              </ExampleComment>
            </ExampleComment>
            <ExampleComment />
            <ExampleComment />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default StoryPage;
