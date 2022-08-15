import React from "react";
import classes from '../../App.module.css'
import {TableRow} from "../../compononets/TableRow/TableRow";
import {TableHeaderContainer} from "../../compononets/TableHeader/TableHeaderContainer";

export const MainPage = ({users, pickedUsers}) => {


    return (<div>
                <div className={classes.table}>
                    <TableHeaderContainer />
                    {users.map((el) => <TableRow key={el.id} id={ el.id} name={el.name} userName={el.username} email={el.email} picked={el.picked} />)}
                </div>
                <div className={classes.pickedUsers}>
                    <h1> Выбранные пользователи </h1>
                    {pickedUsers}
                </div>

        </div>

    )
};

