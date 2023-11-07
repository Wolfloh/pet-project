import React, { FC } from 'react'
import { styled } from 'styled-components';


const AboutBodyStart = styled.div`
    text-align: center;
    width: 50%;
    @media(min-width: 950px){
    width: 14%;
    text-align: start;
    }
`

const AboutBodyCenter = styled.div`
text-align: center;
@media(min-width: 950px){
    width: 16%;
    }
`

const Name = styled.div`
   font-weight:600;
`

const Author = styled.div`
   color: #d9d9d9;
`

interface IAboutProps {
    name: string;
    author: string;
    isTextCenter: boolean;
    nameRef: {
        current: HTMLImageElement
    };
    authorRef: {
        current: HTMLImageElement
    }
}

export const AudioAbout: FC = ({ nameRef, authorRef, name, author, isTextCenter }: IAboutProps) => {
    if (isTextCenter) {
        return (
            <AboutBodyCenter>
                <Name ref={nameRef}>
                    {name}
                </Name>
                <Author ref={authorRef}>
                    {author}
                </Author>
            </AboutBodyCenter>
        )
    } else {
        return (
            <AboutBodyStart>
                <Name ref={nameRef}>
                    {name}
                </Name>
                <Author ref={authorRef}>
                    {author}
                </Author>
            </AboutBodyStart>
        )
    }
}
