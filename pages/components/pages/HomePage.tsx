import React from "react";
import GlobalLayout, { siteTitle } from '../templates/GlobalLayout'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import styles from '../../../styles/Tech.module.css'
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import ForwardIcon from '@material-ui/icons/Forward';

const HomePage: React.FC = () => {
    var datalist = [];
    var data = [
        { text: "Vue", img: "/vue.png" },
        { text: "React", img: "/react.svg" },
        { text: "go", img: "/go-6.svg" },
        { text: "python", img: "/python-5.svg" },
        { text: "docker", img: "/docker.svg" },
        { text: "aws", img: "/aws-2.svg" },
    ];
    for (var i in data) {
        datalist.push(
            <Grid item xs={6} md={2} className="flex justify-center">
                <Card >
                    <CardContent>
                        <Typography>
                            <div className={styles.img_box}>
                                <Image src={data[i].img} width={220} height={220} layout={"intrinsic"} >
                                </Image>
                                <p className={styles.img_box_text}>{data[i].text}</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
    return (
        <GlobalLayout home={true}>
            <Grid>
                <Grid item xs={12} md={12} className="flex justify-center">
                    <img alt="Keita Ogawa" src="keita.jpg" className="shadow-lg rounded-full w-60 h-auto align-middle border-none" />
                </Grid>
                <Grid item xs={12} md={12} mt="0.75rem" className="flex justify-center">
                    <p className="text-7xl font-black font-mono"> Keita Ogawa</p>
                </Grid>
                <Grid item xs={12} md={12} mt="1.25rem">
                    <Card>
                        <CardContent>
                            <Typography>
                                <p className="mt-2 text-2xl font-mono flex justify-center">About me</p>
                                <br></br>
                                <p className="font-mono">
                                    筑波大学の情報系学部を卒業後、筑波大学院に進学し研究をしております。
                                    筑波大学大学院では、deeplearningと画像処理を利用した生体認証（虹彩）の研究を行っております。
                                    インターンやアルバイト、業務委託にてアプリケーションの開発と画像処理の開発を行なっております。
                                </p>
                                <br />
                                <p className="font-mono flex justify-center">最終学歴: 筑波大学(2021年卒)</p>
                                <br />
                                <p className="font-mono flex justify-center">現在: 筑波大学大学院(2023年卒)</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} mt="1.25rem">
                    <Card>
                        <CardContent>
                            <Typography>
                                <p className="mt-2 text-2xl font-mono flex justify-center">My Tech</p>
                                <br></br>
                                <Grid container spacing={3} className="flex justify-center">
                                    {datalist}
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center" mt={1}>
                                    <Grid item xs={12} md={12} className="flex justify-center">
                                        <Link href="/components/pages/Technology">
                                            <Button variant="contained" color="primary">
                                                技術の詳細についてはこちらへ
                                        <ForwardIcon color="inherit" />
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} mt="1.25rem">
                    <Card>
                        <CardContent>
                            <Typography>
                                <p className="mt-2 text-2xl font-mono flex justify-center">Works</p>
                                <br></br>
                                <span className="flex justify-center">
                                    <ImageList sx={{ width: 850, height: 250 }} cols={3} rowHeight={250} gap={40}>
                                        <Link href="http://takekino.starfree.jp/">
                                            <ImageListItem>
                                                <Image src={"/takeshi.png"} width={250} height={250} loading="lazy" objectFit="cover">
                                                </Image>
                                                <ImageListItemBar
                                                    title={"木下武のwebサイト"}
                                                />
                                            </ImageListItem>
                                        </Link>
                                        <Link href="https://museum-app.com/">
                                            <ImageListItem>
                                                <Image src={"/museum.png"} width={250} height={250} loading="lazy" objectFit="cover" />
                                                <ImageListItemBar
                                                    title={"museum"}
                                                />
                                            </ImageListItem>
                                        </Link>
                                        <Link href="/">
                                            <ImageListItem>
                                                <Image src={"/homepage.png"} width={250} height={250} loading="lazy" objectFit="cover" />
                                                <ImageListItemBar
                                                    title={"自分のホームページ"}
                                                />
                                            </ImageListItem>
                                        </Link>
                                    </ImageList>
                                </span>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} mt="1.25rem">
                    <Card>
                        <CardContent>
                            <Typography>
                                <p className="mt-2 text-2xl font-mono flex justify-center">Profile</p>
                                <br></br>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="tsukuba.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">筑波大学</p>
                                        <p>2017年4月-2021年3月</p>
                                        <p>4年</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="talknote.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">Talknote株式会社</p>
                                        <p>2019年2月-2019年3月, 2019年7月-2019年8月</p>
                                        <p>4ヶ月</p>
                                        <p>フロントエンジニア、iosエンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="futurelabo.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社futurelabo</p>
                                        <p>2019年9月-2020年1月</p>
                                        <p>5ヶ月</p>
                                        <p>サーバーサイドエンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="teamlabo.jpeg" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社チームラボ</p>
                                        <p>2020年2月</p>
                                        <p>2週間のインターン</p>
                                        <p>サーバーサイドエンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="aerial.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社Aerial Partners</p>
                                        <p>2020年3月-2020年11月</p>
                                        <p>9ヶ月</p>
                                        <p>サーバーサイドエンジニア、フロントエンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="avilen.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社AVILEN</p>
                                        <p>2020年1月-2021年1月</p>
                                        <p>1年</p>
                                        <p>サーバーサイドエンジニア、フロントエンジニア、インフラエンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="cyber.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社サイバーエージェント</p>
                                        <p>2021年3月</p>
                                        <p>フロントエンド 2days インターン(ハッカソン )</p>
                                        <p>フロントエンド</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="tsukuba.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">筑波大学大学院</p>
                                        <p>2021年4月-2023年3月</p>
                                        <p>2年</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="unisys.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">日本ユニシス株式会社</p>
                                        <p>2021年5月</p>
                                        <p>2日間 ハッカソン</p>
                                        <p>CDO特別賞</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="pluszero.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社pluszero</p>
                                        <p>2020年12月-2021年6月</p>
                                        <p>5ヶ月</p>
                                        <p>画像処理、deeplearning</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="dip.jpeg" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社ディップ</p>
                                        <p>2020年12月-2021年6月</p>
                                        <p>5ヶ月</p>
                                        <p>サーバーサイドエンジニア、インフラエンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="mixi.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社ミクシィ</p>
                                        <p>2021年7月-2021年8月</p>
                                        <p>1ヶ月半のサマーインターン
                                        </p>
                                        <p>エンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="cyber.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社サイバーエージェント</p>
                                        <p>2021年8月</p>
                                        <p>3days 次世代トップエンジニア創出インターンシップ ONLINE ACE
                                        </p>
                                        <p>エンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="Talknote" src="cyber.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社サイバーエージェント</p>
                                        <p>2021年9月</p>
                                        <p>就業型インターン
                                        </p>
                                        <p>エンジニア</p>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <MoreVertIcon color="primary" />
                                    </Grid>
                                    <Grid item xs={12} md={7} className="flex justify-center">
                                        <span />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="flex justify-center">
                                    <Grid item xs={12} md={3} className="flex justify-center">
                                        <img alt="dena" src="dena.png" className="shadow-lg rounded-full w-32 h-auto align-middle border-none" />
                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <p className="text-2xl font-black font-mono">株式会社ディー・エヌ・エー</p>
                                        <p>2021年9月</p>
                                        <p>2daysハッカソン
                                        </p>
                                        <p>エンジニア</p>
                                        <br />
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/* <Link href="/components/pages/Technology">aaaaaaaaaaa</Link> */}
        </GlobalLayout >
    );
};

export default HomePage;