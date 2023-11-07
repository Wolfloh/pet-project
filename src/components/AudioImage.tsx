import React, { FC } from 'react'
import { styled } from 'styled-components';
import { IImageRefs } from '../types/AudioPageTypes';


export const AudioImg = styled.img`
    border-radius: 5px;
    min-height:50px;
    min-width:80px;
    max-height:50px;
    max-width:80px;
    object-fit:cover;
    
`
interface IProps {
    src: string,
    imageRef: IImageRefs,
}

export const AudioImage: FC = ({ src, imageRef }: IProps) => {
    return (
        <AudioImg ref={imageRef} src={src} alt='audio-img' />
    )
}
