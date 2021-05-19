import Head from 'next/head'
import styles from '../../../styles/GlobalLayout.module.css'
import Link from 'next/link'
import Header from '../Organisms/Header'
import Button from '@material-ui/core/Button';

const name = '小川 恵太'
export const siteTitle = '小川恵太のホームページ'

export default function GlobalLayout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                {/* <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" /> */}
                <title>{siteTitle}</title>
            </Head>
            <Header />
            <main className={styles.content}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <Button variant="contained" color="primary">
                            ← Back to home
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}