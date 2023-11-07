import { useRef, FC, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { styled } from 'styled-components';
import { IAllAudioItem } from '../../types/allAudioReducerTypes';
import uniqid from 'uniqid';
import RightArrow from '../../assets/icons/RightArrow.png'
import LeftArrow from '../../assets/icons/LeftArrow.png'
import Play from '../../assets/icons/Play.png'
import Pause from '../../assets/icons/Pause.png'
import { Time } from './../../components/Time';
import { AudioAbout } from './../../components/AudioAbout';
import { AudioImage } from './../../components/AudioImage';
import { IAboutRefs, IAudioRefs, IDurationRefs, IPlaysRefs, IRangesRefs } from '../../types/AudioPageTypes';
import { ICurrentTimeRefs, IImageRefs, IMainBackgroundRef } from './../../types/AudioPageTypes';
import volume from '../../assets/icons/volume.png'
import FirstImg from '../../assets/music/Five Finger Death Punch - Meet My Maker/Five Finger Death Punch - Meet My Maker.jpg'



const DivAudioPageWrapper = styled.div`
    margin-top:320px;
    @media(min-width: 300px){
        margin-top:310px;
}
    @media(min-width: 400px){
        margin-top:260px;
}
    @media(min-width: 550px){
        margin-top:210px;

}
    @media(min-width: 950px){
        margin-top:160px;
    }
`

const AudioBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap:30px;
`


const VolumeInput = styled.input`
-webkit-appearance: none;
background-color: #fff;
width: 70px;
height: 5px;
max-width:0;
border-radius: 2px;
cursor:pointer;
padding: 3px;
box-sizing:border-box;
transition: all 0.4s;
visibility: hidden;
opacity: 0;
@media (min-width: 1000px) {
    &:hover {
max-width:150px;
    visibility: visible;
opacity: 1;
&::-webkit-slider-thumb{
transition: all 0.3s;
    border: 1px solid #fff;
}
}
}

&::-webkit-slider-thumb{
-webkit-appearance: none;
width: 10px;
height: 25px;
background-color:#525252;
border: 1px solid #8f8f8f;
border-radius: 2px;
}
@media (max-width: 1000px) {
    max-width:150px;
    visibility: visible;
opacity: 1;
}
@media(min-width: 400px){
width: 110px;
    }

`

const VolumeImg = styled.img`
max-height:32px;
    max-width:32px;
    cursor: pointer;
    @media (min-width: 1000px) {
        &:hover {
        &+input{
max-width:150px;
    visibility: visible;
opacity: 1;
        }
    }
}
    
`

const VolumeBody = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    gap:15px;
    padding:10px 10px 10px 0;
    ${(props: { $lowWidth: boolean }) => props.$lowWidth ? `display: none;` : void 0}
    @media(min-width: 950px){
        padding:10px;
display: flex;
    }
`


export const AudioItem = styled.div`
position: relative;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    display: flex;
    ${({ $lowWidth }: { $lowWidth: boolean }) => $lowWidth && `width: 100%;`}
    margin:0 auto;
    @media(min-width: 450px){
    ${({ $lowWidth }: { $lowWidth: boolean }) => $lowWidth && `width: 80%;`}
    }
    @media(min-width: 650px){
    ${({ $lowWidth }: { $lowWidth: boolean }) => $lowWidth && `width: 60%;`}
    }



    ${({ $mainAudio }: { $mainAudio: boolean }) => $mainAudio && `
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-items:center;
`}

    @media(min-width: 550px){
        ${({ $mainAudio }: { $mainAudio: boolean }) => $mainAudio && `
    grid-template-columns: 1fr 1fr 1fr;
`}
    }


    @media(min-width: 950px){
    justify-content: center;
        display: flex;
    max-width:none;
    width:100%;
    margin: none;
    }
`

const RangeInput = styled.input<{ $lowWidth: boolean }>`
transition: all 0.2s;
-webkit-appearance: none;
background-color:#fff;
border-radius:10px;
width:100%;
height:6px;
cursor:pointer;
padding: 2px;
box-sizing: border-box;
${props => props.$lowWidth ? `display: none;` : void 0}

@media (min-width: 1000px) {
    &:hover{    
   filter: drop-shadow(0 0 0.2em #c8c8c8aa);
 };
}
&::-webkit-slider-thumb{
-webkit-appearance: none;
width:13px;
height:27px;
border-radius:3px;
background-color:#525252;
transition: all 0.2s ease 0s;
border: 1px solid #acacac;
@media (min-width: 1000px) {
    &:hover{
border: 1px solid #ffffff;
}
}
}
@media(min-width: 950px){
    width:20%;
    display: flex;
    }
   
`


export const PlayPauseImg = styled.img`
transition: all 0.2s;
    max-height:35px;
    max-width:35px;
    cursor: pointer;
    border-radius: 20px;
    padding:5px;
    @media (min-width: 1000px) {
    &:hover{    
   filter: drop-shadow(0 0 10px #fff);
 };
}
`

const ArrowImg = styled.img`
transition: all 0.2s;
    max-height:25px;
    max-width:25px;
    padding:5px;
    cursor: pointer;
    border-radius: 5px;
    @media (min-width: 1000px) {
    &:hover{    
        background-color: #ffffff40;
 };
}
`
const MainAudio = styled.div`
    position: fixed;
    width:90%;
    z-index:101;
    top: 65px;
    left: 50%;
    padding: 15px 20px;
    transform: translate(-50%, 0);
    overflow: hidden;
`
const MainBackground = styled.div<{ $imgSrc: string }>`
   position: absolute;
   height:100%;
   width: 200vw;
   top: 0;
   left: 0;
   transition: all 0.5s ease 0s;
   background-image: ${props => {
        return `url('${props.$imgSrc}')`
    }};
    background-position:center;
    background-size:90px;
    background-repeat:repeat;
   filter: blur(2px) brightness(25%);
   animation-duration:70s;
   animation-timing-function:linear;
   animation-iteration-count:infinite;
  animation-name:moveBackground;
   @keyframes moveBackground {
    0%{
        transform:translate(0,0);
    }
    50%{
        transform:translate(-50%,0);
    }
    100%{
        transform:translate(0,0);
    }
   }

   
`
const DivPlayBody = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap:20px;
`
export const AudioPage: FC = () => {
    const store: IAllAudioItem[] = useTypedSelector(store => store.allAudioReducer.allAudioRecordings);
    const playRef: IPlaysRefs = useRef();
    const currentTimeRef: ICurrentTimeRefs = useRef();
    const rangeRef: IRangesRefs = useRef();
    const imageRef: IImageRefs = useRef();
    const durationRef: IDurationRefs = useRef();
    const nameRef: IAboutRefs = useRef();
    const authorRef: IAboutRefs = useRef();
    const volumeRef: IRangesRefs = useRef();
    const audioRefs: IAudioRefs[] = [];
    const playsRefs: IPlaysRefs[] = [];
    const rangesRefs: IRangesRefs[] = [];
    const currentTimeRefs: ICurrentTimeRefs[] = [];
    const volumeRefs: IRangesRefs[] = [];
    const nameRefs: IAboutRefs[] = [];
    const authorRefs: IAboutRefs[] = [];
    const durationRefs: IDurationRefs[] = [];
    const imageRefs: IImageRefs[] = [];
    const mainBackgroundRef: IMainBackgroundRef = useRef()
    let interval: number;
    let i: number = 0;
    let volumeMoveFlag: boolean = false;

    useEffect(() => {
        audioRefs.forEach((audioObj: IAudioRefs, index: number) => {
            audioObj.current.addEventListener('loadedmetadata', () => {
                rangesRefs[index].current.max = audioRefs[index].current.duration
                currentTimeRefs[index].current.innerHTML
                    = formatTime(Math.floor(audioRefs[index].current.currentTime));
                durationRefs[index].current.innerHTML
                    = formatTime(Math.floor(audioRefs[index].current.duration));
            })
        })
        audioRefs[i].current.addEventListener('loadedmetadata', () => {
            volumeRef.current.value = 20
            rangeRef.current.max = audioRefs[i].current.duration;
            currentTimeRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[i].current.currentTime));
            durationRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[i].current.duration));
        })
    }, [])

    function formatTime(seconds: number): string {
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60
        return [m || '0', s > 9 ? s : '0' + s].join(':')
    }

    const changeProgress = (e: React.FormEvent<HTMLInputElement>, index: number, i: number) => {
        rangesRefs[index].current.value = e.currentTarget.value;
        audioRefs[index].current.currentTime = e.currentTarget.value;
        if (i === index) {
            rangeRef.current.value = e.currentTarget.value
            currentTimeRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[index].current.currentTime))
        }
        currentTimeRefs[index].current.innerHTML
            = formatTime(Math.floor(audioRefs[index].current.currentTime))
    }

    useEffect(() => {
        rangesRefs.forEach((range: IRangesRefs) => {
            range.current.value = 0
        })
        audioRefs.forEach((audio: IAudioRefs, index: number) => {
            audio.current.volume = 0.2
            volumeRefs[index].current.value = 20
        })
        rangeRef.current.value = 0;
        volumeRef.current.value = 20
    }, [rangesRefs, audioRefs, rangeRef, volumeRef])

    const getPlaybackProcesses = () => {
        try {
            rangesRefs[i].current.value = audioRefs[i].current.currentTime
        } catch (e) {
            clearInterval(interval)
        }
        rangeRef.current.value = audioRefs[i].current.currentTime
        currentTimeRef.current.innerHTML
            = formatTime(Math.floor(audioRefs[i].current.currentTime))
        currentTimeRefs[i].current.innerHTML
            = formatTime(Math.floor(audioRefs[i].current.currentTime))
        if (audioRefs[i].current.ended) {
            currentTimeRefs[i].current.innerHTML = '0:00'
            rangesRefs[i].current.value = 0
            playsRefs[i].current.setAttribute("src", Play)
            if (i === audioRefs.length - 1) {
                clearInterval(interval)
                rangeRef.current.value = 0;
                currentTimeRef.current.innerHTML = '0:00'
                playRef.current.setAttribute("src", Play)
            } else {
                i = i + 1;
                audioRefs[i].current.play()
                playsRefs[i].current.setAttribute("src", Pause)
                imageRef.current.setAttribute('src', imageRefs[i].current.src)
                authorRef.current.innerHTML = authorRefs[i].current.innerHTML;
                nameRef.current.innerHTML = nameRefs[i].current.innerHTML;
                durationRef.current.innerHTML
                    = formatTime(Math.floor(audioRefs[i].current.duration));
                rangeRef.current.max = audioRefs[i].current.duration;
                rangeRef.current.value = audioRefs[i].current.currentTime
                currentTimeRef.current.innerHTML
                    = formatTime(Math.floor(audioRefs[i].current.currentTime));
                mainBackgroundRef.current.style.backgroundImage
                    = `url(${imageRefs[i].current.src})`
            }
        }
    }

    const switchArrow = (index: number) => {
        if (store[index]) {
            play(index)
            audioRefs[index].current.currentTime = 0
            rangesRefs[index].current.value = 0
            playsRefs[index].current.setAttribute("src", Pause);
            playRef.current.setAttribute("src", Pause);
            imageRef.current.setAttribute('src', imageRefs[index].current.src)
            authorRef.current.innerHTML = authorRefs[index].current.innerHTML;
            nameRef.current.innerHTML = nameRefs[index].current.innerHTML;
            durationRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[index].current.duration));
            rangeRef.current.max = audioRefs[index].current.duration;
            rangeRef.current.value = audioRefs[index].current.currentTime
            currentTimeRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[index].current.currentTime));
            mainBackgroundRef.current.style.backgroundImage
                = `url(${imageRefs[index].current.src})`
            volumeRef.current.value = volumeRefs[index].current.value;

        }
    }

    const play = (playIndex: number) => {
        i = playIndex;
        clearInterval(interval)
        audioRefs.forEach((i, index) => {
            i.current.pause()
            playsRefs[index].current.setAttribute("src", Play)
        })
        audioRefs[playIndex].current.play()
        interval = setInterval(() => { getPlaybackProcesses() }, 500)
    }

    function playPause(e: React.MouseEvent<HTMLImageElement>, index: number) {
        if (e.target.getAttribute("src") === Play) {
            play(index)
            playsRefs[index].current.setAttribute("src", Pause)
            playRef.current.setAttribute("src", Pause)
            rangeRef.current.value = audioRefs[index].current.currentTime
            rangeRef.current.max = audioRefs[index].current.duration;
            currentTimeRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[index].current.currentTime));
            durationRef.current.innerHTML
                = formatTime(Math.floor(audioRefs[index].current.duration));
            imageRef.current.setAttribute('src', imageRefs[index].current.src)
            nameRef.current.innerHTML = nameRefs[index].current.innerHTML;
            authorRef.current.innerHTML = authorRefs[index].current.innerHTML;
            mainBackgroundRef.current.style.backgroundImage
                = `url(${imageRefs[index].current.src})`
            volumeRef.current.value = volumeRefs[index].current.value;
        } else {
            playsRefs[index].current.setAttribute("src", Play)
            playRef.current.setAttribute("src", Play)
            audioRefs[index].current.pause()
            clearInterval(interval)
        }
    }

    const setVolume = (e: React.FormEvent<HTMLInputElement>, index: number) => {
        if (i === index) {
            volumeRef.current.value = e.target.value
        }
        audioRefs[index].current.volume = e.target.value / 100
        volumeRefs[index].current.value = e.target.value
    }

    const setVolumeHover = (volumeRef: IRangesRefs) => {
        if (window.innerWidth > 1000) {
            if (volumeMoveFlag) {
                volumeRef.current.style.visibility = 'visible';
                volumeRef.current.style.opacity = '1';
                volumeRef.current.style.maxWidth = '150px';
            }
        }
    }

    const deleteVolumeHover = (volumeRef: IRangesRefs) => {
        if (window.innerWidth > 1000) {
            volumeMoveFlag = false;
            volumeRef.current.style.visibility = 'hidden';
            volumeRef.current.style.opacity = '0';
            volumeRef.current.style.maxWidth = '0';
        }
    }


    return (
        <DivAudioPageWrapper>
            <MainAudio>
                <MainBackground ref={mainBackgroundRef} $imgSrc={FirstImg} />
                <AudioItem $mainAudio={true}>
                    <AudioImage imageRef={imageRef} src={store[i].srcImg} />
                    <DivPlayBody>
                        <ArrowImg
                            onClick={() => {
                                switchArrow(i - 1)
                            }}
                            src={LeftArrow}
                            alt='arrow' />
                        <PlayPauseImg
                            onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                                playPause(e, i)
                            }}
                            ref={playRef}
                            src={Play}
                            alt="Play"
                        />
                        <ArrowImg
                            onClick={() => {
                                switchArrow(i + 1)
                            }}
                            src={RightArrow}
                            alt='arrow' />
                    </DivPlayBody>
                    <AudioAbout
                        nameRef={nameRef}
                        authorRef={authorRef}
                        isTextCenter={true}
                        name={store[i].name}
                        author={store[i].author}
                    />
                    <Time
                        currentTimeRef={currentTimeRef}
                        durationRef={durationRef}
                    />
                    <RangeInput
                        ref={rangeRef}
                        type="range"
                        min='0'
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            changeProgress(e, i, i)
                        }}
                    />
                    <VolumeBody
                        onMouseLeave={() => {
                            deleteVolumeHover(volumeRef)
                        }}
                        onMouseOver={() => {
                            setVolumeHover(volumeRef)
                        }}>
                        <VolumeImg onMouseOver={() => {
                            volumeMoveFlag = true;
                        }} src={volume} />
                        <VolumeInput
                            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                setVolume(e, i)
                            }}
                            ref={volumeRef}
                            type="range" />
                    </VolumeBody>
                </AudioItem>
            </MainAudio>
            <AudioBody>
                {store.map(
                    (audio: IAllAudioItem, index: number): JSX.Element => {
                        audioRefs[index] = useRef()
                        playsRefs[index] = useRef()
                        rangesRefs[index] = useRef()
                        volumeRefs[index] = useRef()
                        currentTimeRefs[index] = useRef()
                        durationRefs[index] = useRef()
                        imageRefs[index] = useRef()
                        nameRefs[index] = useRef()
                        authorRefs[index] = useRef()
                        return <AudioItem $lowWidth={true} key={uniqid()}>
                            <AudioImage imageRef={imageRefs[index]} src={audio.srcImg} />
                            <audio ref={audioRefs[index]}>
                                <source src={audio.srcAudio} type="audio/mpeg" />
                            </audio>
                            <PlayPauseImg
                                onClick={(e: React.MouseEvent<HTMLImageElement>) => {
                                    i = index
                                    playPause(e, i)
                                }}
                                ref={playsRefs[index]}
                                src={Play}
                                alt="Play"
                            />
                            <AudioAbout
                                nameRef={nameRefs[index]}
                                authorRef={authorRefs[index]}
                                name={audio.name}
                                author={audio.author}
                            />
                            <Time
                                currentTimeRef={currentTimeRefs[index]}
                                durationRef={durationRefs[index]}
                                $lowWidth={true}
                            />
                            <RangeInput
                                ref={rangesRefs[index]}
                                type="range"
                                min='0'
                                $lowWidth={true}
                                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                    changeProgress(e, index, i)
                                }}
                            />
                            <VolumeBody
                                $lowWidth={true}
                                onMouseLeave={() => {
                                    deleteVolumeHover(volumeRefs[index])
                                }}
                                onMouseOver={() => {
                                    setVolumeHover(volumeRefs[index])
                                }}>
                                <VolumeImg onMouseOver={() => {
                                    volumeMoveFlag = true;
                                }} src={volume} />
                                <VolumeInput
                                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                        setVolume(e, index)
                                    }}
                                    ref={volumeRefs[index]}
                                    type="range" />
                            </VolumeBody>
                        </AudioItem>
                    }
                )}
            </AudioBody>
        </DivAudioPageWrapper>
    )
}




