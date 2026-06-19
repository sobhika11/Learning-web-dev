import React from 'react'

const Student = () => {
    const st=[
        {
            id:1,
            name:"sobhi",
            dept:"CSBS",
        },
        {
            id:2,
            name:"kani",
            dept:"CSBS",
        },
        {
            id:3,
            name:"sowmi",
            dept:"AIDS",
        }
    ]
  return (
    <>
    <table>
     <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dept</th>
        </tr>
    </thead>
    <tbody>
        {st.map((mp) => (
            <tr key={mp.id}>
                <td>{mp.id}</td>
                <td>{mp.name}</td>
                <td>{mp.dept}</td>
            </tr>
        ))}
    </tbody>
    </table>
    </>
  )
}

export default Student