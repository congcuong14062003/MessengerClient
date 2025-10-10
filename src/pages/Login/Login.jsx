import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import './Login.scss';
import signUpWithGoogle from '../../components/HandleLoginGoogle/HandleLoginGoogle';
import config from '../../configs';
import signUpWithFacebook from '../../components/HandleLoginFacebook/HandleLoginFacebook';
import { LuScanFace } from 'react-icons/lu';
import getToken from '../../ultils/getToken/get_token';
import ShowPopupLoginWithGoogle from '../../components/HandleLoginGoogle/HandleLoginGoogle';
import { API_CHECK_EXIST_USER, API_LOGIN_POST, API_SIGNUP_SOCIALNETWORK_POST } from '../../API/api_server';
import { getData, postData } from '../../ultils/fetchAPI/fetch_API';
import getDataForm from '../../ultils/getDataForm/get_data_form';
import ShowPopupLoginWithFacebook from '../../components/HandleLoginFacebook/HandleLoginFacebook';
import { LoadingIcon } from '../../assets/icons/icons';
import { useLoading } from '../../components/Loading/Loading';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { showLoading, hideLoading } = useLoading();
    const handleSubmit = async (e) => {
        showLoading()
        e.preventDefault();
        if (!email || !password) {
            console.log('vào');
            hideLoading();
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        const data = getDataForm('.form_login');
        const respone = await postData(API_LOGIN_POST, {
            type_account: 'register',
            ...data,
        });
        if (respone?.status === true) {
            navigate('/');
        }
        hideLoading()
    };
    useEffect(() => {
        const storedToken = getToken();
        if (storedToken) {
            navigate('/');
        }
    }, []);

    const handleLoginSocial = async (payload) => {
        showLoading()
        try {
            console.log("payload:", payload);
            const response = await getData(API_CHECK_EXIST_USER(`uid_${payload?.user_id}`));
            if (response?.status === 200 || response?.status === true) {
                const responseLogin = await postData(API_LOGIN_POST, {
                    user_id_login: `uid_${payload?.user_id}`,
                    user_password: payload?.user_password,
                    type_account: payload?.type_account,
                });
                if (responseLogin?.status) {
                    console.log(responseLogin);
                    navigate('/');
                } else {
                    toast.error('Lỗi đăng nhập, vui lòng thử lại hoặc dùng phương thức đăng nhập khác');
                }
            } else {
                console.log('đăng ký');
                const responseSignup = await postData(API_SIGNUP_SOCIALNETWORK_POST, payload);
                if (responseSignup) {
                    await handleLoginSocial(payload);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
        hideLoading()
    };
    const handleLoginWithGoogle = async () => {
        const payload = await ShowPopupLoginWithGoogle();
        await handleLoginSocial(payload);
    };
    const handleLoginWithFaceBook = async () => {
        const data = await ShowPopupLoginWithFacebook();
        console.log(data);
        await handleLoginSocial(data);
    };

    return (
        <div className="login_container">
            <div className="bt-form-login-simple-1">
                <a onClick={handleLoginWithGoogle} href="#" className="btn-login-google">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                            fill="#FBC02D"
                        ></path>
                        <path
                            d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z"
                            fill="#E53935"
                        ></path>
                        <path
                            d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z"
                            fill="#4CAF50"
                        ></path>
                        <path
                            d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                            fill="#1565C0"
                        ></path>
                    </svg>
                    Login in with Google
                </a>
                {/* <a onClick={handleLoginWithFaceBook} href="#" className="btn-login-google">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 64 64">
                        <radialGradient
                            id="nT5WH7nXAOiS46rXmee3Oa_msQ6HdxpqUmi_gr1"
                            cx="33.34"
                            cy="27.936"
                            r="43.888"
                            gradientTransform="matrix(1 0 0 -1 0 66)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#f4e9c3"></stop>
                            <stop offset=".219" stop-color="#f8eecd"></stop>
                            <stop offset=".644" stop-color="#fdf4dc"></stop>
                            <stop offset="1" stop-color="#fff6e1"></stop>
                        </radialGradient>
                        <path
                            fill="url(#nT5WH7nXAOiS46rXmee3Oa_msQ6HdxpqUmi_gr1)"
                            d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"
                        ></path>
                        <linearGradient
                            id="nT5WH7nXAOiS46rXmee3Ob_msQ6HdxpqUmi_gr2"
                            x1="32"
                            x2="32"
                            y1="-3.34"
                            y2="59.223"
                            gradientTransform="matrix(1 0 0 -1 0 66)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stop-color="#155cde"></stop>
                            <stop offset=".278" stop-color="#1f7fe5"></stop>
                            <stop offset=".569" stop-color="#279ceb"></stop>
                            <stop offset=".82" stop-color="#2cafef"></stop>
                            <stop offset="1" stop-color="#2eb5f0"></stop>
                        </linearGradient>
                        <path
                            fill="url(#nT5WH7nXAOiS46rXmee3Ob_msQ6HdxpqUmi_gr2)"
                            d="M58,32c0,13.35-10.05,24.34-23,25.83C34.02,57.94,33.01,58,32,58c-1.71,0-3.38-0.17-5-0.49	C15.03,55.19,6,44.65,6,32C6,17.64,17.64,6,32,6S58,17.64,58,32z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M42.8,36.05l-0.76,2C41.6,39.22,40.46,40,39.19,40H35v17.83C34.02,57.94,33.01,58,32,58	c-1.71,0-3.38-0.17-5-0.49V40h-2.95C22.36,40,21,38.66,21,37v-2c0-1.66,1.36-3,3.05-3H27v-6c0-5.51,4.49-10,10-10h3	c2.21,0,4,1.79,4,4s-1.79,4-4,4h-3c-1.1,0-2,0.9-2,2v6h4.95C42.08,32,43.55,34.09,42.8,36.05z"
                        ></path>
                    </svg>
                    Login in with Facebook
                </a> */}
                <div className="text-wrap">
                    <div className="text-line"></div>
                    <p className="text">or</p>
                    <div className="text-line"></div>
                </div>
                <form className="form_login form" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                            name="user_email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password *</label>
                        <input
                            name="user_password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="password"
                            className="form-input"
                        />
                    </div>
                    <div className="form-meta">
                        <Link to={config.routes.forgotPassword} className="form-link">
                            Quên mật khẩu
                        </Link>
                    </div>
                        <ButtonCustom type="submit" title="Đăng nhập" className="primary form-btn" />
                </form>
                <Link to="/login/face-recognition/">
                    <LuScanFace className="icon-face" />
                </Link>
                <div className="form-option">
                    Bạn chưa có tài khoản
                    <Link to={config.routes.signup}>Đăng ký nhanh</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
