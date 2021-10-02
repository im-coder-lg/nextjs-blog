import styles from './layout.module.css'

export default function Layout({ children }) {
    return <div classname={styles.container}>{children}</div>
}