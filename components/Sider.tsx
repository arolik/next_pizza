import Link from 'next/link';
import classes from './../styles/Sider.module.scss';


const Sider:React.FC = () => {
    return (
        <div className={classes.sider}>
            <div className={classes.sider__inner}>
                <ul className={classes.sider__nav}>
                    <li>
                        <Link href="/">Main</Link>
                    </li>
                    <li>
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link href="/popular">Popular</Link>
                    </li>
                    <li>
                        <Link href="/meet">Meet pizzas</Link>
                    </li>
                    <li>
                        <Link href="/veg">Veg pizzas</Link>
                    </li>
                    <li>
                        <Link href="/juices">Juices</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sider;





