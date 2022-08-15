import React from "react";
import classes from './Personal.module.css'
import blud from '../../assets/vb.png'
import {Field, Form, Formik} from "formik";


export const Personal = (props) => {



    const initialValues = {
        name: '',
        email: '',
        number: ''
    }

    const onSubmit =  (values) => {
       window.alert(values.email)
    }



    return (<div className={classes.mainPersonal}>

            <img  src={blud} alt={"blud"} className={classes.victor}/>
            <div className={classes.text}>

                    Стоимость онлайн ведения от 15 тыс./мес.,
                программа тренировок 5 тыс./мес.. Если вам интересна более подробная информация,
                пожалуйста отправьте заявку через форму ниже.

            </div>

            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                <Form >

                    <div className={classes.all}>
                        <div className={classes.txt}>
                            ИМЯ
                        </div>
                        <div>
                            <Field  type='text' name='name'
                                    component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <div className={classes.txt}>
                            E-mail
                        </div>
                        <div>
                            <Field type='text' name='email'
                                    component='input' className={classes.inp} autocomplete="off"/>
                        </div>
                        <div className={classes.txt}>
                            ТЕЛЕФОН
                        </div>
                        <div>
                            <Field  type='number' name='number'
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

