import styled from 'styled-components'


export const DivNavStyled = styled.div`
    background-color:rgb(1,255,78) ;
    width:100vw;
    /* color:red */
 
    a{
        text-decoration: none;
        color:${props => props.fontColor};

        &:hover{
            text-decoration: none;
            color:${props => props.fontColor};
        };

    };


`

export const DivTitleStyled = styled.div`
    /* background-color:gray; */
    width:100vw;
    height:8vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.3rem;
    /* background-image:${(props)=> `url(${props.image})`}; */
    /* background-image: url('../../data/images/2015-11-15 19.06.18 1119174166625710206_247494281.jpg'); */
    background-size:cover;
    background-repeat: repeat;


`