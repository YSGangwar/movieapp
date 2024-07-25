import { useState,useEffect } from "react";
import {defaultCover1} from '../data/objects';
import GameOver from "../components/Gameover";
interface CP  { 
    [key: string]: string 
};
interface RIDERS {
    title:string;
    index:number;
}
interface BASIC {
    title:string;
    img:string;
}
interface FLIPPED {    
    [key: number]: boolean;
      
}
export const Game = (props:any) =>{
    
    const [ answer , setCorrectAnswer]= useState(0);
  
    const {riders,dragons , shuffleCombined} = props;
    // console.log(shuffleCombined)
    
    const [time ,setTime] = useState<Date>();
    const combinedPairs = riders.map((rider:RIDERS,index:number)=>{
        return {[rider.title]:dragons[index].title}
    });

    // console.log(combinedPairs);
    const [flippedCards, setFlippedCards] = useState<FLIPPED>({});
    const [ dragonValue , setDragonValue] = useState({name:"",index:0});
    const [ firstSelected , setFirstSelected] = useState<string | null >();
    const [ riderValue , setRiderValue] = useState({name:"",index:0});
    const [ dontShow , setDontShow ] = useState<FLIPPED>({});
    const [counter, setCounter] = useState(0);

    const handleFlip = (index:number) => {
      setFlippedCards({
        ...flippedCards,
        [index]: !flippedCards[index]
      });
    };

    const findRider = (key:string)=> {
        const result = combinedPairs.find((item:CP  )=>Object.values(item)[0] === key);
        return result ? Object.keys(result)[0] : -1;    
    };

    const findDragon = (key:string) => {
        const result = combinedPairs.find((rider:CP) => Object.keys(rider)[0] === key);
        return result ? result[key] : -1;
    };
    

    const ifDragon =(value:string)=>{
        const result = dragons.find((dragon:RIDERS)=>dragon.title===value);
        return result ? true : false;
    }

    
    
    const handleSubmit = (title:string,index:number) =>{

        if(counter==1){
            const startTime = new Date();
            setTime(startTime)
           
        }

        handleFlip(index);
        setCounter(counter+1);
        console.log("Title",title);
        if(ifDragon(title)){
            if(!firstSelected){
                setDragonValue({name:title,index:index});
                setFirstSelected("dragon");
            }
            else {
                if( firstSelected==="rider"){
                    console.log(riderValue);
                    if(riderValue.name === findRider(title)){
                        console.log("Match Successfull");
                        setDontShow({
                            ...dontShow,
                            [index]:true,
                            [riderValue.index]:true
                        });
                        setCorrectAnswer(answer+1)
                        setDragonValue({name:"",index:0});
                        setRiderValue({name:"",index:0});
                        setFirstSelected(null);
                    }
                    else{
                        console.log("Wrong answer select another Dragon")
                    }
                } else {
                    console.log("cant Pick same type");
                }
            }
        }
        else{
            if(!firstSelected){
                setRiderValue({name:title,index:index});
                setFirstSelected("rider");
            }
            else {   
                if( firstSelected==="dragon"){
                    if(dragonValue.name === findDragon(title)){
                        
                        console.log("Match successfull again");
                        setDontShow({
                            ...dontShow,
                            [index]:true,
                            [dragonValue.index]:true
                        })
                        setCorrectAnswer(answer+1);
                        setRiderValue({name:"",index:0});
                        setDragonValue({name:"",index:0});
                        setFirstSelected(null)
                        

                    }
                    else{
                        console.log("Wrong answer select another Rider")
                    }
                }
                else{
                    console.log("Cant select same type for rider")
                }
            }

        }




    }
    
    const clearStates = ()=>{
        setDontShow({})
        setFlippedCards({})
        setCorrectAnswer(0);
        setRiderValue({name:"",index:0});
        setDragonValue({name:"",index:0});
        setFirstSelected(null);
        setCounter(0);
    }

    useEffect(() => {

        const updatedFlippedCards:FLIPPED = { ...flippedCards };

        Object.keys(flippedCards).forEach(index => {
            const numericIndex = Number(index);
          if (!(index in dontShow)) {
            updatedFlippedCards[numericIndex] = false;
          }
        });
        setFlippedCards(updatedFlippedCards);
      }, [dontShow]); 

      
    
    return (
        <div className='div1'>
            
            <h1 className="div2"> Match the Riders With their Dragons </h1>
            {
            answer!==dragons.length ?
            <div className="grid">
            {shuffleCombined.map((item:BASIC, index:number) => (
                <div
                key={index}
                className={`flip-card ${ flippedCards[index] ? 'flipped' : ''}`}
                onClick={ dontShow[index] ? undefined  :() => handleSubmit(item.title,index)}
                >
                <div className="flip-card-inner">
                    <div
                    className="flip-card-front"
                    style={{ backgroundImage: `url(${defaultCover1})` }}
                    ></div>
                    <div
                    className={"flip-card-back"}
                    style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                </div>
                </div>
            ))}

            </div>
            : <GameOver counts = {counter} time ={time} clearStates={clearStates}/>
            }


        </div>
    )
}