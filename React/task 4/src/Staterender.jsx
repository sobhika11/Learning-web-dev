import React,{useState} from 'react'

export const Staterender = () => {
  const employeesData = [
  { id: 101, name: "Alice Vance", role: "Network Engineer", clearance: "Level 3" },
  { id: 102, name: "Bob Miller", role: "Security Guard", clearance: "Level 1" },
  { id: 103, name: "Charlie Cox", role: "Database Admin", clearance: "Level 3" },
  { id: 104, name: "Diana Prince", role: "Chief Officer", clearance: "Level 2" }
];

  const[clearancefilter,SetClearancefilter]=useState("All");
  const filtered=employeesData.filter((emp)=>{
    return clearancefilter=="All" || emp.clearance==clearancefilter
  });
  return (
    <>
    <div>
        <button onClick={()=>SetClearancefilter("All")}>All</button>
        <button onClick={()=>SetClearancefilter("Level 1")}>Level 1</button>
        <button onClick={()=>SetClearancefilter("Level 2")}>Level 2</button>
        <button onClick={()=>SetClearancefilter("Level 3")}>Level 3</button>
    </div>
        {
           filtered.map((emp)=>{
            return(
                <div key={emp.id} className='display'>
                <p><strong>name : {emp.name}</strong></p>
                <p><strong>role : {emp.role}</strong></p>
                <p><strong>clearance : {emp.clearance}</strong></p>
                </div>

            );
           })}
    </>
  )
}
