import React, {useEffect} from "react";
import classes from './Main.module.css'
import victor from "../../assets/vb.png";
import vk from "../../assets/vk.png";
import inst from "../../assets/in.png";
import youtube from "../../assets/you.png";
import tg from "../../assets/tg.png";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {

    const navigate = useNavigate();





    const redirectToCorp = () => {
        navigate('/Corp');
    }
    const redirectToPersonal = () => {
        navigate('/Personal');
    }
    const redirectToAd = () => {
        navigate('/Ad');
    }


    return (
            <div className={classes.main}>
                <div >
                    <img src={victor} alt={'victor'} className={classes.victor}/>
                </div>
                <a href={'https://vk.com/victorblud'}>
                    <img src={vk} alt={'vk'} className={classes.ss}/></a>
                <a href={'https://www.instagram.com/victorblud/'}>
                    <img src={inst} alt={'inst'} className={classes.ss}/></a>
                <a href={'https://t.me/victorblud'}>
                    <img src={youtube} alt={'youtube'} className={classes.ss}/></a>
                <a href={'https://www.youtube.com/user/Blud1488'}>
                    <img src={tg} alt={'tg'} className={classes.ss}/></a>

                <div className={classes.video}>
                    <iframe  src="https://www.youtube.com/embed/CX6E2bSzv8Q"
                             title="YouTube video player" frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen className={classes.videoYou}> </iframe>
                </div>
                <hr className={classes.hr}/>

                <div>
                    <button className={classes.btn} onClick={() => redirectToCorp()}>
                        РАБОТА В BLUD.corp
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={() => redirectToPersonal()}>
                        ОНЛАЙН ВЕДЕНИЕ / ПРОГРАММА ТРЕНИРОВОК
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={()=> window.open("https://blud.shop")}>
                        МОЙ МАГАЗИН / BLUD.SHOP
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={()=> window.open("https://blud.info")}>
                        МОЯ ШКОЛА АТЛЕТИЗМА
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={()=> window.open("https://t.me/victorblud")}>
                        МОЙ ТЕЛЕГРАМ КАНАЛ
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={()=> window.open("https://vk.com/victorblud")}>
                        ВКОНТАКТЕ
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={()=> window.open("https://neva33.com")}>
                        МОЙ ЗАЛ
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={() => redirectToAd()}>
                        СИЛОВЫЕ ВЫСТУПЛЕНИЯ / МЕРОПРИЯТИЯ
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={() => redirectToAd()}>
                        ПО РЕКЛАМЕ
                    </button>
                </div>
                <div>
                    <button className={classes.btn} onClick={()=> window.open("https://canpower.ru/store/?ref=67")}>
                        ТУРНИКИ И БРУСЬЯ / ВСЕ ДЛЯ ТРЕНИРОВОК ДОМА
                    </button>
                </div>
                <div className={classes.video}>
                    <iframe  src="https://www.youtube.com/embed/05OtknP_Z34"
                             title="YouTube video player" frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen  className={classes.videoYou}> </iframe>
                </div>
                <div >
                    <img src={victor} alt={'victor'} className={classes.victor}/>
                </div>
                <div className={classes.vi}>
                    © victorblud.ru
                </div>
            </div>


    )
};

