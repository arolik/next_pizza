import Image from 'next/image';
import Link from 'next/link';
import classes from './../styles/Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className="inner">
                <div className={classes.header__inner}>
                    <div className={classes.header__logo}>
                        <Image src="/images/logo.png" width={90} height={90} alt="logo" />
                    </div>
                    <div className={classes.header__auth}>
                        <Link href="/login" className={classes.auth__item}>Log in</Link>
                        <Link href="/register" className={classes.auth__item}>Register</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;




