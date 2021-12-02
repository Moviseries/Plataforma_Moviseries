import React, { useEffect, useState } from "react";
import ViewGender from "../components/ViewGender";

export default function ServiceClass(){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getGenders = () => {
        fetch(HOST_API + "genders")
        .then((response) => response.json())
        .then((data) => setState({
            dataSource: data
        }))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getGenders()
    }, [])

    return(
        <div>
            <ViewGender props={state} />
        </div>
    );
}