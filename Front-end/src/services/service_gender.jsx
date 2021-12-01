import React, { useEffect, useState } from "react";

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
            {console.log(state)}
        </div>
    );
}