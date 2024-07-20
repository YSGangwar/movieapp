import { useEffect , useState} from "react";

export const Home = () => {

  // const Originalhouses = ["Stark","Targareyn", "Baratheon","Lannister","Marteyl"];
  // const Originalpeople = ["John","Danerys" ," Joffrey","Jaime","Oberyn"];
  // const peoples = shuffleArray([...Originalpeople]); 
  // const houses = shuffleArray([...Originalhouses]);


  function shuffleArray<T>(array:T[]):T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
   const houses = ["Stark","Targareyn", "Baratheon","Lannister","Marteyl"];
   const peoples = ["John","Danerys" ," Robert","Jaime","Oberyn"];
  //states 
  const [visited , setVisited] =useState<number[]>([0,0,0,0,0])

  const combinedPairs = peoples.map((people, index) => {
    return { [people]: houses[index] };
  });

  const findHouse=(people:string)=>{
    const result = combinedPairs.find(obj => obj.hasOwnProperty(people));
    return result ? result[people] : null;
  }


  const [selectedPeople , setSelectedPeople] = useState<string>("");
  const [ selectedHouse , setSelectedHouse] = useState<string>();
 

  const peopleClick=( people :string, index :number)=>{
    console.log(people);
    setSelectedPeople(people);
  

  }
  
  const houseClick=( house :string , index :number)=>{
    const answer = findHouse(selectedPeople);
    console.log(house);
    setSelectedHouse(house);

    if(answer == house){
      setVisited( 
        previsited=>({
          ...previsited,[index]:1
        })
      )

     
      console.log(visited[index]);
    }
    else{
      setTimeout(()=>{
        setSelectedHouse("")
      },1000)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] h-screen justify-center items-center border-2">
        <div className="w-[50%]  border-2" style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
          {
            peoples.map((item:string, index )=>{
              return(
                <button className={`p-4 flex justify-center border-2 w-32 
                ${visited[index]==1 ? "bg-emerald-500":""}
                ${ selectedPeople==item ? visited[index]!==1? "bg-sky-500":"" :"" }  
            
                `}
                onClick={()=>peopleClick(item,index)}
                >
                  {item}
                </button>
              )
            })
          }
        </div> 
        <div className="w-[50%]  border-2" style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
        {
            houses.map((item:string,index)=>{
              return(
                <button className={`p-4 flex justify-center border-2 w-32  
                  ${visited[index]==1 ? "bg-emerald-500":""}
                  ${ selectedHouse==item ? visited[index]==1 ? "bg-emerald-500":"bg-red-500" :"" }  
              
                  `}
                onClick={()=>houseClick(item, index)}
                >
                  {item}
                </button>
              )
            })
          }
        </div>
      </div>
        
      
    </div>
  )
}
