import {useEffect, useState} from 'react';
import {Affix, Drawer, Button, Menu} from 'antd';
import {MenuUnfoldOutlined} from '@ant-design/icons';

export default function Navbar() {
    const [visible, setVisible] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Affix>
                <div className="navbar">
                    {!isMobile && (
                        <div className="navbar-menu">
                            <div className="navbar-left-menu">
                                <Menu mode="horizontal" className="m-auto">
                                    <div className="navbar-logo">
                                        <a href="/">My Website</a>
                                    </div>
                                    <Menu.Item key="home">
                                        <a href="/">Home</a>
                                    </Menu.Item>
                                    <Menu.Item key="about">
                                        <a href="/about">About</a>
                                    </Menu.Item>
                                    <Menu.Item key="contact" style={{float: 'right'}}>
                                        <a href="/contact">Contact</a>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </div>)
                    }
                    {isMobile && (
                        <div className="navbar-mobile">
                            <Button type="primary" onClick={showDrawer}>
                                <MenuUnfoldOutlined/>
                            </Button>
                        </div>
                    )}
                </div>
            </Affix>
            {isMobile && (
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                >
                    <Menu mode="vertical">
                        <Menu.Item key="home">
                            <a href="/">Home</a>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <a href="/about">About</a>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <a href="/contact">Contact</a>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            )}
        </>
    );
}