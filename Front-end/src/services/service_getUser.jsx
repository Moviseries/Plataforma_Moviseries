import React, { useEffect, useState } from "react";

export default function ServiceClass(){
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
            {console.log(state)}
        </div>
    );
}