
import Link from 'next/link'
import classes from '../styles/Main.module.scss'

export default function Home() {
  return (
    <div className={classes.main__page}>
      <div className={classes.main__pageInfo}>
        <h1 className={classes.main__pageTitle}>La Pizza</h1>
        <p className={classes.main__pageMessage}>order 2 pizzas, and get 3 free!!!</p>
        <Link href="/menu" className={classes.main__pageLink}>go to menu</Link>
      </div>
    </div>
  )
}
