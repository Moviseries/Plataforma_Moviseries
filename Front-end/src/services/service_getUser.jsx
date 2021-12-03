import React, { useEffect, useState } from "react";
import Login from '../components/pages/Login';

export default function ServiceClass(props){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getUsers = () => {
        fetch(HOST_API + "users")
        .then((response) => response.json())
        .then((data) => setState({
            dataSource: data
        }))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getUsers()
    }, [])

    return(
        <div>
            <Login datos={state} login={props.login} />
        </div>
    );
}