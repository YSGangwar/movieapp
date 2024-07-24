 // @ts-nocheck
import { useState,useEffect } from "react";
import {defaultCover1} from '../data/objects';
import { RuleSharp } from "@mui/icons-material";
import GameOver from "../components/Gameover";
export const Game = (props:any) =>{
    
    const [ answer , setCorrectAnswer]= useState(0);
  
    const {riders,dragons , shuffleCombined} = props;
    // console.log(shuffleCombined)
    
    const [time ,setTime] = useState();
    const combinedPairs = riders.map((rider,index)=>{
        return {[rider.title]:dragons[index].title}
    });

    console.log(combinedPairs);

    //functions
    const [flippedCards, setFlippedCards] = useState({});
    const [ dragonValue , setDragonValue] = useState({name:"",index:0});
    const [ firstSelected , setFirstSelected] = useState<string | null >();
    const [ riderValue , setRiderValue] = useState({name:"",index:0});
    const [ dontShow , setDontShow ] = useState({});
    const [counter, setCounter] = useState(0);
    
    // const startTime=0 ;
    const handleFlip = (index) => {
      setFlippedCards({
        ...flippedCards,
        [index]: !flippedCards[index]
      });
    };

    const findRider = (key) => {
        const result = combinedPairs.find(item =>Object.values(item)[0] === key);
        return result ? Object.keys(result)[0] : -1;    
    };

    const findDragon = (key) => {
        const result = combinedPairs.find(rider => Object.keys(rider)[0] === key);
        return result ? result[key] : -1;
    };
    

    const ifDragon =(value)=>{
        const result = dragons.find(dragon=>dragon.title===value);
        return result ? true : false;
    }

    
    const handleSubmit = (title,index) =>{

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
                        // otherCardsFlip()

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
  

    useEffect(() => {

        const updatedFlippedCards = { ...flippedCards };
        Object.keys(flippedCards).forEach(index => {
          if (!(index in dontShow)) {
            updatedFlippedCards[index] = false;
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
            {shuffleCombined.map((item, index) => (
                <div
                key={index}
                className={`flip-card ${ flippedCards[index] ? 'flipped' : ''}`}
                onClick={dontShow[index] ? null  :() => handleSubmit(item.title,index)}
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
            : <GameOver counts = {counter} time ={time}/>
            }


        </div>
    )
}