import React from "react";
import classes from './Corp.module.css'


export const Corp = (props) => {

    return (<div className={classes.corpMain}>

            <div className={classes.name}>
                BLUD Corp.
            </div>
            <button className={classes.vacancy}>
                Вакансии
            </button>
            <button className={classes.busines}>
                Бизнесу
            </button>
        </div>

    );
}

