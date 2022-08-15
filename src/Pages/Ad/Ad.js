import React from "react";
import classes from './Ad.module.css'
import blud from '../../assets/vb.png'
import {Field, Form, Formik} from "formik";
import tg from "../../assets/tg.png";


export const Ad = (props) => {



    const initialValues = {
        email: '',
        name: '',
        number: '',
        request: '',
        link: ''
    }

    const onSubmit =  (values) => {
       window.alert(values.email )
    }



    return (<div className={classes.mainPersonal}>

            <img  src={blud} alt={"blud"} className={classes.victor}/>
            <div className={classes.text}>
                blud.manager@gmail.com

            </div>
        <img src={tg} alt={'tg'} className={classes.tg}/>
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form >

                    <div className={classes.all}>
                        <div className={classes.txt}>
                            E-mail
                        </div>
                        <div>
                            <Field type='text' name='email'
                                   component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <div className={classes.txt}>
                            Ваше имя
                        </div>
                        <div>
                            <Field  type='text' name='name'
                                    component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <div className={classes.txt}>
                            Телефон
                        </div>
                        <div>
                            <Field  type='number' name='number'
                                    component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <div className={classes.txt}>
                            Ваш вопрос / предложение
                        </div>
                        <div>
                            <Field  type='text' name='request'
                                    component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <div className={classes.txt}>
                            УДОБНЫЙ СПОСОБ СВЯЗИ
                        </div>
                        <div>
                            <Field  type='text' name='link'
                                    component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <button type="submit" className={classes.btn}> ОТПРАВИТЬ </button>
                    </div>
                </Form>
            </Formik>

            <div className={classes.vi}>
                victorblud.ru
            </div>
    </div>

    );
}

