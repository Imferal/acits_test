import React from "react";
import { Redirect } from "react-router-dom";

export default function Auth() {

    if (localStorage.getItem('bearerToken')) {
        return <Redirect to="/today" />
    } else {
        return <Redirect to="/login" />
    }

}