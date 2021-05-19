import React from "react";
import GlobalLayout, { siteTitle } from '../templates/GlobalLayout'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import styles from '../../../styles/Tech.module.css'



const HomePage: React.FC = () => {
    var forntlist = [];
    var backlist = [];
    var RandDlist = [];
    var InfraDlist = [];

    var data = [
        { text: "html", img: "/html.png" },
        { text: "css", img: "/css3.png" },
        { text: "Bootstrap", img: "/bootstrap-4.svg" },
        { text: "tailwind", img: "/tailwindcss.svg" },
        { text: "javascript", img: "/js.png" },
        { text: "typescript", img: "/ts.png" },
        { text: "Jquery", img: "/jquery.svg" },
        { text: "Vue", img: "/vue.png" },
        { text: "vuetify", img: "/vuetify.svg" },
        { text: "React", img: "/react.svg" },
        { text: "Nuxt", img: "/nuxt.png" },
        { text: "Next", img: "/next-js.svg" },
    ];

    for (var i in data) {
        forntlist.push(
            <Grid item xs={12} md={2} className="flex justify-center">
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

    var backdata = [
        { text: "php", img: "/php.svg" },
        { text: "laravel", img: "/laravel-1.svg" },
        { text: "go", img: "/go-6.svg" },
        { text: "java", img: "/java-4.svg" },
        { text: "kotlin", img: "/kotlin-1.svg" },
    ];

    for (var i in backdata) {
        backlist.push(
            <Grid item xs={12} md={2} className="flex justify-center">
                <Card >
                    <CardContent>
                        <Typography>
                            <div className={styles.img_box}>
                                <Image src={backdata[i].img} width={220} height={220} layout={"intrinsic"} >
                                </Image>
                                <p className={styles.img_box_text}>{backdata[i].text}</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    var RandDdata = [
        { text: "python", img: "/python-5.svg" },
        { text: "pytorch", img: "/PyTorch.jpeg" },
        { text: "opencv", img: "/opencv.png" },
    ];
    for (var i in RandDdata) {
        RandDlist.push(
            <Grid item xs={12} md={2} className="flex justify-center">
                <Card >
                    <CardContent>
                        <Typography>
                            <div className={styles.img_box}>
                                <Image src={RandDdata[i].img} width={220} height={220} layout={"intrinsic"} >
                                </Image>
                                <p className={styles.img_box_text}>{RandDdata[i].text}</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    var InfraDdata = [
        { text: "docker", img: "/docker.svg" },
        { text: "docker compose", img: "/docker-compose.png" },
        { text: "aws", img: "/aws-2.svg" },
    ];
    for (var i in InfraDdata) {
        InfraDlist.push(
            <Grid item xs={12} md={2} className="flex justify-center">
                <Card >
                    <CardContent>
                        <Typography>
                            <div className={styles.img_box}>
                                <Image src={InfraDdata[i].img} width={220} height={220} layout={"intrinsic"} >
                                </Image>
                                <p className={styles.img_box_text}>{InfraDdata[i].text}</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    }


    return (
        <GlobalLayout home={false}>
            <Card>
                <CardContent>
                    <Typography>
                        <p className="mt-2 text-2xl font-mono flex justify-center">Frontend Tech</p>
                        <Grid container spacing={3} className="flex justify-center" mt={3}>
                            {forntlist}
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>
            <br className="mt-5" />
            <Card>
                <CardContent>
                    <Typography>
                        <p className="mt-2 text-2xl font-mono flex justify-center">Backend Tech</p>
                        <Grid container spacing={3} className="flex justify-center" mt={3}>
                            {backlist}
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>
            <br className="mt-5" />
            <Card>
                <CardContent>
                    <Typography>
                        <p className="mt-2 text-2xl font-mono flex justify-center">R&D Tech</p>
                        <Grid container spacing={3} className="flex justify-center" mt={3}>
                            {RandDlist}
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>
            <br className="mt-5" />
            <Card>
                <CardContent>
                    <Typography>
                        <p className="mt-2 text-2xl font-mono flex justify-center">Infrastructure Tech</p>
                        <Grid container spacing={3} className="flex justify-center" mt={3}>
                            {InfraDlist}
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>

        </GlobalLayout >
    );
};

export default HomePage;