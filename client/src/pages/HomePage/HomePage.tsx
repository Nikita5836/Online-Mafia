import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillMail } from 'react-icons/ai';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import styles from './HomePage.module.scss';
import Logo from '../../assets/Images/Логотип.svg';
import icons from '../../assets/Icons/Bg_icons.svg';
import { FiAlignRight } from 'react-icons/fi';
import Red from '@assets/Images/Game_btn.svg';
import Blue from '@assets/Images/Reg btn.svg';

const HomePage: React.FC = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.logo}>
					<img src={Logo} alt='logo' />
				</div>
				<FiAlignRight className={styles.Rigth} />
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<Link to='/'>Главная</Link>
						</li>
						<li className={styles.navItem}>
							<Link to='/game'>Играть</Link>
						</li>
						<li className={styles.navItem}>
							<Link to='/about'>О игре</Link>
						</li>
						<li className={styles.navItem}>
							<Link to='/rating'>Рейтинг</Link>
						</li>
						<li className={styles.navItem}>
							<Link to='/reviews'>Отзывы</Link>
						</li>
						<li className={styles.navItem}>
							<Link to='/profile'>Профиль</Link>
						</li>
						<li className={styles.navItem}>
							<Link to='/registration'>Регистрация</Link>
						</li>
					</ul>
				</nav>
			</header>

			<div className={styles.background}>
				<img src={icons} alt='background' className={styles.backgroundImage} />
			</div>

			<div className={styles.buttons}>
				<Link to='/game' className={styles.playButton}>
					<img src={Red} alt='#' />
				</Link>
				<Link to='/registration' className={styles.registerButton}>
					<img src={Blue} alt='#' />
				</Link>
			</div>

			<div className={styles.contact}>
				<AiFillMail className={styles.mailIcon} />
				<p className={styles.email}>OnlineMafia@gmail.com</p>
			</div>

			<div className={styles.socialIcons}>
				<FaFacebookF className={styles.icon} />
				<FaYoutube className={styles.icon} />
				<FaInstagram className={styles.instagramIcon} />
			</div>
		</div>
	);
};

export default HomePage;