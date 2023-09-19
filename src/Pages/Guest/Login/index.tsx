import React, { useContext } from 'react';
import { Container } from '../../../Helper/ContainerStyle';
import LoginStyle from './LoginStyle';
import FitHubLogo from '../../../assets/images/fithub-tp.png';
import packageJson from '../../../../package.json';
import FormCard from './component/FormCard';
import { Col, Row } from 'antd';
import { AppContext } from '../../../Store/Context/Context';
import { Navigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const { state } = useContext(AppContext)

    if (state.authenticated) {
        console.log("masuk sini", state)
        return <Navigate to="/" replace />
    }
    console.log("else")
    return (
        <LoginStyle>
            <div className="login">
                <Container>
                    <a
                        className="login-header"
                        href="https://fithub.id"
                        target="_blank">
                        <i className="ni ni-planet" />
                        <span className="nav-link-inner--text">Fithub.id</span>
                    </a>
                    <div className="login-section">
                        <div>
                            <img
                                width={100}
                                height={100}
                                src={FitHubLogo}
                                alt=""
                                className="login-logo"
                            />
                            <h2>Welcome to Admin Dashboard!</h2>
                            <p className="login-version">
                                FHAD {packageJson.version}
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="login-footer">
                <Container>
                    <div className="login-section">
                        <div className="login-section__card">
                            <Row gutter={16} justify="center">
                                <Col span={8}>
                                    <FormCard />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="login-footer__copyright">
                        © 2021{' '}
                        <b>FIT HUB Indonesia - PT JAYA DIGITAL PROPERTI</b>
                    </div>
                </Container>
            </div>
        </LoginStyle>
    );
};
export default LoginPage;
