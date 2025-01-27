interface CP { 
    [key: string]: string 
};
interface RIDERS {
    title: string;
    index: number;
}
interface BASIC {
    title: string;
    img: string;
}
interface FLIPPED {    
    [key: number]: boolean;
}
interface COLOR_PROPS {
    [key:number]:string;
}
interface SECLECTED {
    value:string,
    index:number;
}
export type  {CP,RIDERS,BASIC,FLIPPED,COLOR_PROPS,SECLECTED};