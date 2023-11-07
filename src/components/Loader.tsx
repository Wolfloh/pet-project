import React from 'react'
import { styled } from 'styled-components';

const SpanLoader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

const DivLoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    margin: auto;
`

export const Loader = () => {
    return (
        <DivLoaderWrapper>
            <SpanLoader></SpanLoader>
        </DivLoaderWrapper>
    )
}
