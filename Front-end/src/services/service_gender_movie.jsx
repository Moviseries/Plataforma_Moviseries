import React, { useEffect, useState } from "react";

export default function ServiceClass(){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getGender_Movies = () => {
        fetch(HOST_API + "gender_movies")
        .then((response) => response.json())
        .then((data) => setState({
            dataSource: data
        }))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getGender_Movies()
    }, [])

    return(
        <div>
            {console.log(state)}
        </div>
    );
}