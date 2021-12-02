import React from 'react'
import { NavDropdown } from 'react-bootstrap';

export default function ViewGender (props){
    return (
        <div>
            {
            props.props.dataSource.map((element) => {
                return (
                    <NavDropdown.Item href="#action/3.2">{element.name_gender}</NavDropdown.Item>
                )
            })
            }
        </div>
    );
}