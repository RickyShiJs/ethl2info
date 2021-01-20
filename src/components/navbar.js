import React  from "react";
import "./navbar.css";
import 'antd/dist/antd.min.css';
import { Layout, Menu} from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined, BranchesOutlined, CalendarOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
const Sider = Layout;//使用定义

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.current);
        this.state = {
            theme: "dark",
            isOpen:false
        };
    }
    render() {
        const isOpen = this.props.isOpen
        let defaultOpenArray = []

        isOpen? defaultOpenArray = ['sub1']:defaultOpenArray = [];
        return(
                <Sider  className="site-layout-background" id="siderNav">
                    <Menu
                        mode="inline" //导航栏列出来显示
                        // mode="horizontal"  //导航栏隐藏起来显示
                        defaultSelectedKeys={['home']}
                        defaultOpenKeys={defaultOpenArray}
                        selectedKeys={[this.props.current]}
                        theme="dark"
                        id="navBarMenu"
                    >

                    <Menu.Item key="timeline" icon={<CalendarOutlined />}>
                        <Link to="/timeline">Layer 2 Introduction</Link>
                    </Menu.Item>

                    <SubMenu key="zk" icon={<BranchesOutlined />} title="Zk Rollup">
                        <Menu.Item key="zksync">
                            <Link to="/zksync">Zk Sync(Coming)</Link>
                        </Menu.Item>
                        <Menu.Item key="loopring">
                            <Link to="/loopring">Loopring(Coming)</Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="op" icon={<BranchesOutlined />} title="Optimistic Rollup">
                        <Menu.Item key="optimism">
                            <Link to="/optimism">Optimism(Coming)</Link>
                        </Menu.Item>
                        <Menu.Item key="offchainlab">
                            <Link to="/offchainlab">OffchainLab/Arbitrum(Coming)</Link>
                        </Menu.Item>
                        <Menu.Item key="fuel">
                            <Link to="/fuel">Fuel(Coming)</Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu key="others" icon={<BranchesOutlined />} title="Others">
                        <Menu.Item key="starkware">
                            <Link to="/starkware">StarkWare(Coming)</Link>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        );
    }
}
