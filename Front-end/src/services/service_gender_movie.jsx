import React, { useEffect, useState } from "react";
import CardViewMovie from '../components/CardViewMovies';

export default function ServiceClass(props){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getGender_Movies = () => {
        fetch(HOST_API + "movie/gender/"+props.props)
        .then((response) => response.json())
        .then((data) => setState({dataSource: data}))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getGender_Movies()
    }, [])

    return(
        <div>
            <CardViewMovie props={state}/>
        </div>
    );
}