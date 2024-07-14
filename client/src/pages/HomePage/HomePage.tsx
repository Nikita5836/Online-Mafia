import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss'
import Logo from '../../assets/Images/Logo.svg'
import icons from '../../assets/Icons/Bg_icons.svg'
import Game_btn from '@assets/Images/Game_btn.svg'
import Reg_btn from '@assets/Images/Reg btn.svg'

import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { IoLogoInstagram } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'

const HomePage: React.FC = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.logo}>
					<img src={Logo} alt='logo' />
				</div>
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
							<Link to='/register'>Регистрация</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main className={styles.background}>
				<img src={icons} alt='background' className={styles.backgroundImage} />
				<div className={styles.buttons}>
					<Link to='/game' className={styles.playButton}>
						<img src={Game_btn} alt='#' />
					</Link>
					<Link to='/register' className={styles.registerButton}>
						<img src={Reg_btn} alt='#' />
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<div className={styles.SocialIcons}>
					<SlSocialFacebook className={styles.icons} />
					<SlSocialYoutube className={styles.icons} />
					<IoLogoInstagram className={styles.icons} />
				</div>
				<div className={styles.email}>
					<TfiEmail
						href='mailto:MafiaOnline12@gmail.com'
						className={styles.icons}
					/>
					<a href='mailto:MafiaOnline12@gmail.com'>MafiaOnline12@gmail.com</a>
				</div>
			</footer>
		</div>
	)
}

export default HomePage
