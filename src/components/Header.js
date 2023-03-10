import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center">
            <Link to="/Severyanocha-Online-Shop">
                <div className="headerInfo" onClick={props.onClickLogo}>
                    <img src="/Severyanocha-Online-Shop/img/logo.svg" alt="logo" className="logo" />
                    <h1>СЕВЕРЯНОЧКА</h1>
                </div>
            </Link>
            <div className="d-flex">
                <div className="ml-50"></div>
                <div className="search">
                    <input
                        placeholder="Поиск товара"
                        onChange={props.onChangeSearchInput}
                        value={props.searchValue}></input>
                    <img src="/Severyanocha-Online-Shop/img/search.svg" alt="Search" />
                </div>
            </div>
            <div className="headerButtons">
                <ul className="d-flex align-center justify-between">
                    <Link to="/favorites">
                        <li id="marked">
                            <svg
                                width="23"
                                height="24"
                                viewBox="0 0 23 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    stroke="orangered"
                                    clipRule="evenodd"
                                    d="M12.2046 2.25644C13.3299 1.13067 14.8564 0.498169 16.4482 0.498169C18.0399 0.498169 19.5664 1.13063 20.6916 2.25636C21.8174 3.38164 22.45 4.90829 22.45 6.49999C22.45 8.09174 21.8175 9.61826 20.6917 10.7435C20.6917 10.7436 20.6917 10.7435 20.6917 10.7435L11.8517 19.5835C11.6565 19.7788 11.3399 19.7788 11.1446 19.5835L2.30461 10.7435C-0.0390375 8.3999 -0.0390373 4.60009 2.30461 2.25644C4.64826 -0.0872086 8.44807 -0.0872087 10.7917 2.25644L11.4982 2.96289L12.2046 2.25644C12.2046 2.25641 12.2046 2.25647 12.2046 2.25644ZM16.4482 1.49817C15.1217 1.49817 13.8496 2.02528 12.9118 2.96346L11.8517 4.02355C11.758 4.11732 11.6308 4.16999 11.4982 4.16999C11.3656 4.16999 11.2384 4.11732 11.1446 4.02355L10.0846 2.96355C8.13149 1.01042 4.96484 1.01042 3.01172 2.96355C1.05859 4.91667 1.05859 8.08332 3.01172 10.0364L11.4982 18.5229L19.9846 10.0364C20.9228 9.09869 21.45 7.82648 21.45 6.49999C21.45 5.17351 20.9229 3.90138 19.9847 2.96363C19.0469 2.02544 17.7747 1.49817 16.4482 1.49817Z"
                                    fill="#414141"
                                />
                            </svg>

                            <span>Избранное</span>
                        </li>
                    </Link>
                    <Link to="/orders">
                        <li>
                            <svg
                                width="23"
                                height="24"
                                viewBox="0 0 22 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.3325 1.89776C10.3324 1.89785 10.3327 1.89767 10.3325 1.89776L2.33366 5.89721L2.33255 5.89776C1.82288 6.15102 1.50045 6.67089 1.50005 7.24V16.7635C1.49608 17.3334 1.81541 17.8563 2.32416 18.113C2.32445 18.1132 2.32387 18.1129 2.32416 18.113L10.3237 22.1128C10.7462 22.3242 11.2438 22.3243 11.6663 22.1129L19.6664 18.1128L19.6675 18.1122C20.1773 17.8589 20.4997 17.3389 20.5 16.7697V7.24026C20.4997 6.67105 20.1773 6.15106 19.6675 5.89776L19.6664 5.89721L11.6675 1.89776C11.6674 1.89767 11.6677 1.89786 11.6675 1.89776C11.2474 1.6892 10.7527 1.68919 10.3325 1.89776ZM9.88755 1.00223C10.5883 0.654 11.4118 0.654 12.1125 1.00223L12.1137 1.00278L20.1125 5.00223C20.1127 5.00231 20.1124 5.00215 20.1125 5.00223C20.9618 5.42448 21.4995 6.29123 21.5 7.23973V16.77C21.4995 17.7184 20.9624 18.5852 20.1132 19.0074C20.113 19.0075 20.1134 19.0073 20.1132 19.0074L12.1138 23.0071C12.1138 23.0072 12.1138 23.0071 12.1138 23.0071C11.4097 23.3594 10.5806 23.3595 9.87644 23.0072C9.87639 23.0072 9.87649 23.0072 9.87644 23.0072L1.87644 19.0072L1.87506 19.0065C1.02685 18.5791 0.494133 17.708 0.500049 16.7584V7.24C0.500552 6.29154 1.03772 5.4248 1.88695 5.00253C1.88715 5.00243 1.88675 5.00263 1.88695 5.00253L9.88644 1.00278L9.88755 1.00223Z"
                                    fill="#414141"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.873208 5.93638C0.996703 5.6894 1.29704 5.58928 1.54403 5.71278L11.0004 10.441L20.4568 5.71278C20.7038 5.58928 21.0041 5.6894 21.1276 5.93638C21.2511 6.18337 21.151 6.48371 20.904 6.6072L11.224 11.4472C11.0833 11.5176 10.9176 11.5176 10.7768 11.4472L1.09682 6.6072C0.849826 6.48371 0.749714 6.18337 0.873208 5.93638Z"
                                    fill="#414141"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.5529 3.27638C5.67639 3.02939 5.97673 2.92928 6.22372 3.05277L16.2237 8.05277C16.4707 8.17627 16.5708 8.4766 16.4473 8.72359C16.3238 8.97058 16.0235 9.0707 15.7765 8.9472L5.7765 3.9472C5.52951 3.82371 5.4294 3.52337 5.5529 3.27638Z"
                                    fill="#414141"
                                />
                            </svg>
                            <span>Заказы</span>
                        </li>
                    </Link>
                    <Link to="/cart">
                        <li>
                            <div className="orange-circle">{props.itemsAmount}</div>
                            <svg
                                width="23"
                                height="24"
                                viewBox="0 0 23 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 21C5 19.6193 6.11929 18.5 7.5 18.5C8.88071 18.5 10 19.6193 10 21C10 22.3807 8.88071 23.5 7.5 23.5C6.11929 23.5 5 22.3807 5 21ZM7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5Z"
                                    fill="#414141"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17 21C17 19.6193 18.1193 18.5 19.5 18.5C20.8807 18.5 22 19.6193 22 21C22 22.3807 20.8807 23.5 19.5 23.5C18.1193 23.5 17 22.3807 17 21ZM19.5 19.5C18.6716 19.5 18 20.1716 18 21C18 21.8284 18.6716 22.5 19.5 22.5C20.3284 22.5 21 21.8284 21 21C21 20.1716 20.3284 19.5 19.5 19.5Z"
                                    fill="#414141"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.5 0.5C0.223858 0.5 0 0.723858 0 1C0 1.27614 0.223858 1.5 0.5 1.5H4.08051C4.83783 5.79147 5.60333 10.0643 6.24931 14.3709C6.43288 15.5947 7.48416 16.5 8.72165 16.5H18.8597C20.0514 16.5 21.0774 15.6588 21.3111 14.4903L22.7503 7.29417C22.936 6.36599 22.226 5.5 21.2795 5.5H6.66046C6.3575 5.5 6.07797 5.58901 5.84436 5.74093L4.99239 0.913107C4.95023 0.674179 4.74262 0.5 4.5 0.5H0.5ZM6.166 7.07417C6.12065 6.77187 6.35478 6.5 6.66046 6.5H21.2795C21.595 6.5 21.8316 6.78866 21.7698 7.09806L20.3305 14.2942C20.1903 14.9953 19.5747 15.5 18.8597 15.5H8.72165C7.97916 15.5 7.34839 14.9568 7.23825 14.2225L6.166 7.07417Z"
                                    fill="#414141"
                                />
                            </svg>
                            <span>Корзина</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="userInfo d-flex align-center justify-between">
                <img
                    src="https://icons-for-free.com/download-icon-customer+man+profile+user+icon-1320183283254549972_512.png"
                    alt=""></img>
                <span className="ml-10 mr-25">Username</span>
                <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7 6.29289L12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        fill="#414141"
                    />
                </svg>
            </div>
        </header>
    );
}

export default Header;
