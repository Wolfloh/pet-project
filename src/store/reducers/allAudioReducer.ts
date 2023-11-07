import BringMe from '../../assets/music/Evanescence - Bring Me To Life/BringMe.mp3';
import BringMeImg from '../../assets/music/Evanescence - Bring Me To Life/Evanescence - Bring Me To Life.jpg';
import FiveFinger from '../../assets/music/Five Finger Death Punch - Meet My Maker/Five Finger Death Punch - Meet My Maker.mp3'
import FiveFingerImg from '../../assets/music/Five Finger Death Punch - Meet My Maker/Five Finger Death Punch - Meet My Maker.jpg'
import Highway from '../../assets/music/Highway/Highway.mp3'
import HighwayImg from '../../assets/music/Highway/Highway.jpg'
import Staind from '../../assets/music/Staind - Outside/Staind - Outside.mp3'
import StaindImg from '../../assets/music/Staind - Outside/Staind - Outside.jpg'
import Mary from '../../assets/music/mary on a cross/Ghost - Mary On A Cross.mp3'
import MaryImg from '../../assets/music/mary on a cross/mary on a cross.jpg'
import Hero from '../../assets/music/College & Electric Youth - A Real Hero/College & Electric Youth - A Real Hero.mp3'
import HeroJpg from '../../assets/music/College & Electric Youth - A Real Hero/College & Electric Youth - A Real Hero.jpg'
import Decadence from '../../assets/music/Disturbed - Decadence/Disturbed - Decadence.mp3'
import DecadenceJpg from '../../assets/music/Disturbed - Decadence/Disturbed - Decadence.jpg'
import Fugue from '../../assets/music/Johann Sebastian Bach - Fugue in G Minor/Johann Sebastian Bach - Fugue in G Minor.mp3'
import FugueImg from '../../assets/music/Johann Sebastian Bach - Fugue in G Minor/Johann Sebastian Bach - Fugue in G Minor.jpg'
import Lorna from '../../assets/music/Lorna Shore - To The Hellfire/Lorna Shore - To The Hellfire.mp3'
import LornaImg from '../../assets/music/Lorna Shore - To The Hellfire/Lorna Shore - To The Hellfire.jpg'
import Sting from '../../assets/music/Sting - Shape Of My Heart/Sting - Shape Of My Heart.mp3'
import StingImg from '../../assets/music/Sting - Shape Of My Heart/Sting - Shape Of My Heart.jpg'

import {
    IAllAudioState,
    IAllAudioDeleteAction
} from './../../types/allAudioReducerTypes';

const initialState: IAllAudioState = {
    allAudioRecordings: [
        {
            name: 'Meet My Maker',
            author: 'Five Finger Death Punch',
            srcAudio: FiveFinger,
            srcImg: FiveFingerImg,
        },
        {
            name: 'Decadence',
            author: 'Disturbed',
            srcAudio: Decadence,
            srcImg: DecadenceJpg,
        },
        {
            name: 'Shape Of My Heart',
            author: 'Sting',
            srcAudio: Sting,
            srcImg: StingImg,
        },
        {
            name: 'Bring Me to Life',
            author: 'Evanescence',
            srcAudio: BringMe,
            srcImg: BringMeImg,
        },
        {
            name: 'To The Hellfire',
            author: 'Lorna Shore',
            srcAudio: Lorna,
            srcImg: LornaImg,
        },
        {
            name: `Mr. Highway's Thinking About The End`,
            author: 'A Day to Remember',
            srcAudio: Highway,
            srcImg: HighwayImg,
        },
        {
            name: 'A Real Hero',
            author: 'College & Electric Youth',
            srcAudio: Hero,
            srcImg: HeroJpg,
        },
        {
            name: 'Fugue in G Minor',
            author: 'Johann Sebastian Bach',
            srcAudio: Fugue,
            srcImg: FugueImg,
        },
        {
            name: `Outside`,
            author: 'Staind',
            srcAudio: Staind,
            srcImg: StaindImg,
        },
        {
            name: `Mary on a Cross`,
            author: 'Ghost',
            srcAudio: Mary,
            srcImg: MaryImg,
        }
    ]
}


export const allAudioReducer =
    (state: IAllAudioState = initialState, action: IAllAudioDeleteAction): IAllAudioState => {
        switch (action.type) {
            default:
                return state
        }
    }