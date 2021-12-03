import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import Genders from './pages/Genders';
import { Link } from 'react-router-dom';

export default function ViewGender (props){


    return (
        <div>
            {
            props.props.dataSource.map((element) => {
                return (
                    <NavDropdown.Item ><Link style={{color:'black', textDecoration: 'none'}} to={`/Genders/${element.id_gender}/${element.name_gender}`}>{element.name_gender}</Link></NavDropdown.Item>
                )
            })
            }
        </div>
    );
}