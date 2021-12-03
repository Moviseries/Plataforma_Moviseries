import React, { useEffect, useState } from "react";
import CardViewSeries from '../components/CardViewSeries'

export default function ServiceClass(props){
    const HOST_API = "http://localhost:8080/api/";

    const [state, setState] = useState({
        dataSource: []
    })

    const getGender_Series = () => {
        fetch(HOST_API + "serie/gender/"+props.props)
        .then((response) => response.json())
        .then((data) => setState({dataSource: data}))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      getGender_Series()
    }, [])

    return(
        <div>
            <CardViewSeries props={state}/>
        </div>
    );
}