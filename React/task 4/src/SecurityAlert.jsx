// import React from 'react'

export const SecurityAlert = () => {
  const logs = [
  { id: 1, time: "10:14 AM", location: "Server Room A", status: "Critical" },
  { id: 2, time: "11:30 AM", location: "Main Gate", status: "Normal" },
  { id: 3, time: "01:45 PM", location: "Finance Office", status: "Warning" }
];
  return (
    <>
    {logs.map((l)=>{
      return (
        <div key={l.id} style={{color:"black"}}>
          <p><strong>Time : <strong> {l.time}</strong></strong></p>
          <p><strong>Time : <strong> {l.location}</strong></strong></p>
          <p><strong>Time : <strong> {l.status}</strong></strong></p>
        </div>
      );
      
      })};

    </>
  )
}
