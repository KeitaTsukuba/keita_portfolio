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
                                    ??????????????????????????????????????????????????????????????????????????????????????????????????????
                                    ??????????????????????????????deeplearning??????????????????????????????????????????????????????????????????????????????????????????
                                    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                                <br />
                                <p className="font-mono flex justify-center">????????????: ????????????(2021??????)</p>
                                <br />
                                <p className="font-mono flex justify-center">??????: ?????????????????????(2023??????)</p>
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
                                                ??????????????????????????????????????????
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
                                                    title={"????????????web?????????"}
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
                                                    title={"???????????????????????????"}
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
                                        <p className="text-2xl font-black font-mono">????????????</p>
                                        <p>2017???4???-2021???3???</p>
                                        <p>4???</p>
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
                                        <p className="text-2xl font-black font-mono">Talknote????????????</p>
                                        <p>2019???2???-2019???3???, 2019???7???-2019???8???</p>
                                        <p>4??????</p>
                                        <p>??????????????????????????????ios???????????????</p>
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
                                        <p className="text-2xl font-black font-mono">????????????futurelabo</p>
                                        <p>2019???9???-2020???1???</p>
                                        <p>5??????</p>
                                        <p>????????????????????????????????????</p>
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
                                        <p className="text-2xl font-black font-mono">???????????????????????????</p>
                                        <p>2020???2???</p>
                                        <p>2????????????????????????</p>
                                        <p>????????????????????????????????????</p>
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
                                        <p className="text-2xl font-black font-mono">????????????Aerial Partners</p>
                                        <p>2020???3???-2020???11???</p>
                                        <p>9??????</p>
                                        <p>??????????????????????????????????????????????????????????????????</p>
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
                                        <p className="text-2xl font-black font-mono">????????????AVILEN</p>
                                        <p>2020???1???-2021???1???</p>
                                        <p>1???</p>
                                        <p>????????????????????????????????????????????????????????????????????????????????????????????????</p>
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
                                        <p className="text-2xl font-black font-mono">??????????????????????????????????????????</p>
                                        <p>2021???3???</p>
                                        <p>????????????????????? 2days ???????????????(??????????????? )</p>
                                        <p>?????????????????????</p>
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
                                        <p className="text-2xl font-black font-mono">?????????????????????</p>
                                        <p>2021???4???-2023???3???</p>
                                        <p>2???</p>
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
                                        <p className="text-2xl font-black font-mono">??????????????????????????????</p>
                                        <p>2021???5???</p>
                                        <p>2?????? ???????????????</p>
                                        <p>CDO?????????</p>
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
                                        <p className="text-2xl font-black font-mono">????????????pluszero</p>
                                        <p>2020???12???-2021???6???</p>
                                        <p>5??????</p>
                                        <p>???????????????deeplearning</p>
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
                                        <p className="text-2xl font-black font-mono">????????????????????????</p>
                                        <p>2020???12???-2021???6???</p>
                                        <p>5??????</p>
                                        <p>??????????????????????????????????????????????????????????????????</p>
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
                                        <p className="text-2xl font-black font-mono">????????????????????????</p>
                                        <p>2021???7???-2021???8???</p>
                                        <p>1????????????????????????????????????
                                        </p>
                                        <p>???????????????</p>
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
                                        <p className="text-2xl font-black font-mono">??????????????????????????????????????????</p>
                                        <p>2021???8???</p>
                                        <p>3days ??????????????????????????????????????????????????????????????? ONLINE ACE
                                        </p>
                                        <p>???????????????</p>
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
                                        <p className="text-2xl font-black font-mono">??????????????????????????????????????????</p>
                                        <p>2021???9???</p>
                                        <p>????????????????????????
                                        </p>
                                        <p>???????????????</p>
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
                                        <p className="text-2xl font-black font-mono">???????????????????????????????????????</p>
                                        <p>2021???9???</p>
                                        <p>2days???????????????
                                        </p>
                                        <p>???????????????</p>
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