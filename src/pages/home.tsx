import { useEffect , useState} from "react";

export const Home = (props:any) => {
  type person = { [key:string]:string}
  const { houses, peoples, combinedPairs, originalPeople, originalHouses } = props;
  const [visited, setVisited] = useState<boolean[]>(new Array(originalPeople.length).fill(false));


  const findHouse=(people:string):string |null=>{
    const result = combinedPairs.find((obj: person ) => obj .hasOwnProperty(people));
    return result ? result[people] : null;
  }


  const [selectedPeople , setSelectedPeople] = useState<string>("");
  const [ selectedHouse , setSelectedHouse] = useState<string>();
 

  const peopleClick=( people :string)=>{
    console.log(people);
    setSelectedPeople(people);
  }
  
  const houseClick=( house :string , index :number)=>{
    
    const answer = findHouse(selectedPeople);
    console.log(house);
    setSelectedHouse(house);

    if (answer === house) {
      const personIndex = originalPeople.indexOf(selectedPeople);
      setVisited(prevVisited => {
        const newVisited = [...prevVisited];
        newVisited[personIndex] = true;
        return newVisited;
      });
    } else {
      setTimeout(() => {
        setSelectedHouse("");
      }, 1000);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] h-screen justify-center items-center border-2">
        <div className="w-[50%]  border-2" style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
          {
            peoples.map((item:string, index :number)=>{
              return(
                <button
                key={index}
                className={`p-4 flex justify-center border-2 w-32 
                  ${visited[originalPeople.indexOf(item)] ? "bg-emerald-500" : ""}
                  ${selectedPeople === item && !visited[originalPeople.indexOf(item)] ? "bg-sky-500" : ""}
                `}
                onClick={() => peopleClick(item)}
              >
                  {item}
                </button>
              )
            })
          }
        </div> 
        <div className="w-[50%]  border-2" style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
        {
            houses.map((item:string,index:number)=>{
              return(
                <button
                key={index}
                className={`p-4 flex justify-center border-2 w-32  
                  ${visited[originalHouses.indexOf(item)] ? "bg-emerald-500" : ""}
                  ${selectedHouse === item && !visited[originalHouses.indexOf(item)] ? "bg-red-500" : ""}
                `}
                onClick={() => houseClick(item, index)}
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



