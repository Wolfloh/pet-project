export interface IAllAudioState {
    allAudioRecordings: IAllAudioItem[];
}

export interface IAllAudioItem {
    name: string,
    author: string,
    srcAudio: string,
    srcImg: string,
}

export enum AllAudioTypes {
    DELETE_MUSIC = 'DELETE_MUSIC'
}

export interface IAllAudioDeleteAction {
    type: AllAudioTypes.DELETE_MUSIC;
    payload: number;
}
