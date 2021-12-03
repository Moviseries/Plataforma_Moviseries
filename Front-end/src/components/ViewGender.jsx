import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ViewGender (props){

    const Reload = () => {
        window.location.reload(true);
    }

    const styles = {
        color: 'black',
        textDecoration: 'none',
        padding: '10'
    }

    return (
        <div>
            {
            props.props.dataSource.map((element) => {
                return (
                    <NavDropdown.Item  onClick={Reload}><Link style={styles} to={`/Genders/${element.id_gender}/${element.name_gender}`}>{element.name_gender}</Link></NavDropdown.Item>
                )
            })
            }
        </div>
    );
}