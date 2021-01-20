import React, { Component } from "react";
import { Row, Col } from 'antd';
import  Navbar  from "../../components/navbar.js";
import "./home.css";
import { Layout } from 'antd';

const { Content } = Layout;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      current: "home"
    };
  }

  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
      return(
        <div>
          <Layout>
            {/*引入头部 */}
            <Layout>
            {/*引入下半部分，通过Col控制左右部分的占比 */}
            <Row>
              {/*引入导航栏 */}
              <Col span={4}> <Navbar current='home' /> </Col>
              {/*特别的，在有下拉的菜单中（写在实验管理下面的资源管理和权限管理的主页中）我们需要加一个isOpen的判断菜单是否展开，详见下方navbar.jsx文件，<Col span={4}> <Navbar current="aExperiment" isOpen="true"/> </Col>*/}
              <Col span={20}>
                <Layout style={{ padding: '0 24px 24px', margin: '23px 0' }}>
                  {/*引入右半部分 */}
                  <Content style={{ padding: 24, margin: 0, minHeight:580, background: '#fff' }}>
                     {/*右半部分封装成组件直接引入，默认是一块如效果图的空白区域 */}
                  </Content>
                </Layout>
              </Col>
            </Row>
          </Layout>
          </Layout>
        </div>
      );
  }
}
