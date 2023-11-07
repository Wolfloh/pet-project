import React, { FC } from 'react'
import { styled } from 'styled-components';
import { ICurrentTimeRefs, IDurationRefs } from './../types/AudioPageTypes';


const TimeDiv = styled.div`
${(props: { $lowWidth: boolean }) => props.$lowWidth ? `display: none;` : void 0}
    width: 100px;
    text-align: center;
    @media(min-width:950px) {
        display: block;
    }
`

interface ITimeProps {
    currentTimeRef: ICurrentTimeRefs;
    durationRef: IDurationRefs;
    $lowWidth: boolean;
}

export const Time: FC = ({ currentTimeRef, durationRef, $lowWidth }: ITimeProps) => {
    return (
        <TimeDiv $lowWidth={$lowWidth}>
            <span ref={currentTimeRef}></span> : <span ref={durationRef}></span>
        </TimeDiv>
    )
}
