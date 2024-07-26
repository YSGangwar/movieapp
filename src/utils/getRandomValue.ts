import  { daemon,rhanerya,balerion, vermithor,vhagar,caraxes,drogon,syrax,meleys,aegon,baela,daenrys,rhaneys ,defaultCover1} from '../data/objects';
export function getRandom () {
    const  jaehaerys = "https://i0.wp.com/wikiofthrones.com/wp-content/uploads/2022/10/Jaehaerys-I-Targaryens-rule-3885038.jpg?w=830&ssl=1";

    const colors = ["red","blue","yellow","lime","orange","teal","purple","aqua"]
    const dragons = [
        { title: "Balerion", img: balerion },
        { title: "Vermithor", img: vermithor },
        { title: "Vhagar", img: vhagar },
        { title: "Caraxes", img: caraxes },
        { title: "Drogon", img: drogon },
        { title: "Syrax", img: syrax },
        { title: "Meleys", img: meleys }
      ];
      
      const riders = [
        { title: "Aegon I", img: aegon },
        { title: "Jaehaerys", img: jaehaerys },
        { title: "Baela", img: baela },
        { title: "Daemon", img: daemon },
        { title: "Daenerys", img: daenrys },
        { title: "Rhaenyra", img: rhanerya },
        { title: "Rhaenys", img: rhaneys }
      ];
      
    function shuffleArray<T>(array:T[]):T[] {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const combined = [...dragons,...riders];
    const shuffleCombined = shuffleArray([...combined]);
   
    return {riders , dragons, shuffleCombined, colors};
}
