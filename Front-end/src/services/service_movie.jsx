import React, { useEffect, useState } from "react";
import CardView from "../components/CardViewMovies";

export default function ServiceClass(props){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getMovies = () => {
        fetch(HOST_API + "movies")
        .then((response) => response.json())
        .then((data) => setState({dataSource: data}))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getMovies()
    }, [])

    return(
        <div>
            <CardView props={state} amount={props.amount} login={props.login}/>
        </div>
    );
}