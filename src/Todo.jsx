// conditional rendering 
export default function Todo({task,isDone}){

     let listitem;
     if(isDone){
        listitem = <li>{task}: Done</li>
     }
     else{
        listitem = <li>{task}: WorkOn</li>
     }
        // return(
        //     // <li> {isDone? 'Finished': 'Work on'}:  {task}</li>
        //     <li>{task}: {isDone || 'WorkOn'} </li>
        // )

        return listitem;
      
    

}