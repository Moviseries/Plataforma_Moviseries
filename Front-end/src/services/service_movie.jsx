import React, { useEffect, useState } from "react";

export default function ServiceClass(){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getMovies = () => {
        fetch(HOST_API + "movies")
        .then((response) => response.json())
        .then((data) => setState({
            dataSource: data
        }))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getMovies()
    }, [])

    return(
        <div>
            {console.log(state)}
        </div>
    );
}