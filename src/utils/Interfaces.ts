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
export type  {CP,RIDERS,BASIC,FLIPPED};