import React, { FC } from 'react';
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import CatImg from '../assets/img/cat.png'
import { Link, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    background-color:#242424;
    min-width:100%;
    min-height:100vh;
    font-family:Raj;
    color:#fff;
    font-size:18px;
`

const Container = styled.div`
    max-width:1280px;
    font-family:Raj;
    position: relative;
    min-height: 100vh;
    margin:0 auto;
    padding:68px 10px 0 10px;
    display: flex;
    flex-direction:column;
    align-items: center;
    @media(min-width: 550px){
        padding:66px 20px 0 20px;
    }
`

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65px;
    padding-bottom: 3px;
    z-index:100;
    display: flex;
    background-color:#242424;
align-items: center;
justify-content: center;
`

const HeaderContent = styled.div`
    display: flex;
    gap:20px;
    padding:10px;
@media(min-width:400px){
    gap:40px;
    padding:20px; 
}
`

const HeaderLink = styled.div`
a{
    white-space: nowrap;
    text-decoration: none;
    transition: all 200ms linear; 
position:relative;
cursor: pointer;
font-size:18px;
font-weight:500;
user-select:none;
padding:3px 10px;
border-radius:5px;
color:#fff;
text-align: center;
border: 1px solid transparent;
${({ $audioPage }: { $audioPage: boolean }) => $audioPage && `border: 1px solid #fff;`}
${({ $todosPage }: { $todosPage: boolean }) => $todosPage && `border: 1px solid #fff;`}
@media(min-width:400px){
    font-size:20px;
}
@media (min-width: 1000px) {
    &:hover{    
        color:#242424;
   background-color:#ffffff;
 };
}
}

`

const Main = styled.main`
    flex: 1 1 auto;
    min-width:100%;
    min-height:80vh;
    display: flex;
    flex-direction:column;
`
const Footer = styled.footer`
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:100px;
    padding:5px;
    img{
        width:150px;
        height:150px;
        object-fit: cover;
    }
`

interface INavigate {
    pathname: string;
    hash: string;
    key: string;
    search: string;
    state: string | null;
}

export const Layout: FC = () => {
    const nav: INavigate = useLocation();
    let audioPage = false;
    let todosPage = false;
    if (nav.pathname === '/') {
        audioPage = true;
    } else {
        todosPage = true;
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <HeaderContent>
                        <HeaderLink $audioPage={audioPage}>
                            <Link to='/'>
                                Audio Recordings
                            </Link>
                        </HeaderLink>
                        <HeaderLink $todosPage={todosPage}>
                            <Link to='todos'>
                                Todo List
                            </Link>
                        </HeaderLink>
                    </HeaderContent>
                </Header>
                <Main>
                    <Outlet />
                </Main>
                <Footer><img src={CatImg} alt="" /></Footer>
            </Container>
        </Wrapper>

    )
}
