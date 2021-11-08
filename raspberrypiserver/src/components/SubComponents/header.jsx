import React from 'react';
import {Link} from 'react-router-dom'
import {navList} from '../../data/data'
import {DivNavStyled, DivTitleStyled} from './customStyles'


const Header = ({pageTitle,image}) => {

    return(
        <div>
            <DivNavStyled>
                {
                navList.map((x)=>(
                    <div style={{display:'inline-flex', marginLeft: '10px'}}>
                        <Link key={x.id} to={x.link}>{x.name}</Link>
                    </div>
                    ))
                }
            </DivNavStyled>

            {pageTitle?(
            <DivTitleStyled image={image}>
                ------ {pageTitle} ------
            </DivTitleStyled>):null
            }

        </div>
    )
}

export default Header