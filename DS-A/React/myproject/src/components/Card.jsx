import React from 'react'

const Card = (props) => {
  return (
    <div>
        <center>
        
        <div style = {{border : '2px solid purple' , width : '400px' , height : '400px' , display : 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'20px'}}>
            <h3 style = {{color : 'blue', "text-align" : 'center'}}>ABES STUDENT CARD</h3>

            <img src="https://imgs.search.brave.com/SOW74QJm8-Rern7-cil9AleUt9zN15fQyf6HeKhCohM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/MzQ5MzI1OC92ZWN0/b3IvY29uZnVzZWQt/d29tYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUdpSG0z/TVk4aU1OSndGcFdm/RUpFbXZQbUZwMlFP/eFNEVHVTTnhkclhf/Ykk9" alt="" 
            style={{height : '75px' , width : '75px'}}
            />



            <br />

            <p>* B.Tech (DS-A) </p>
            <br />
            <p>* Name :- {props.name} </p>
            <br />
            <p>* Year: 3 </p>
        </div>
        </center>


    </div>
  )
}

export default Card