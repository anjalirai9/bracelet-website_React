

import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";

const App=()=>{
const [mytsk,setMytsk]=useState("");
const mywork=useSelector((state)=>state.todo.task);
const dispatch=useDispatch();
console.log(mywork);
let sno=0;

const ans=mywork.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
    </tr>
    </>
  )
})


  return(
    <>
      <h1>To Do App</h1>
      Enter your Task:<input type="text" value={mytsk} onChange={(e)=>{setMytsk(e.target.value)}}/>
      <button onClick={()=>{dispatch(addTask({id:Date.now(),work:mytsk}))}}>Add</button>
      <hr size ="4" color="red" />
      <table>
        <tr>
          <th>sno</th>
          <th>your Task</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default App;
























// import { useSelector, useDispatch } from "react-redux";
// import { changeColor } from "./colorSlice";
// import { useState } from "react";
// const App=()=>{
//   const bgcolor=useSelector((state)=>state.bgcolor.color);
//   const dispatch=useDispatch();
//   const [val,setVal]=useState("");
//   return(
//     <>
//     <h1>welcome to toolkit example</h1>
//     Enter color:<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
//     <button onClick={()=>{dispatch(changeColor(val))}}>changeColor</button>
//     <br/>
//     <br/>
//     <div style={{width:"400px",height:"300px",backgroundColor:bgcolor}}></div>
//     </>
//   )
// }
// export default App;
























// import AuthUser from "./AuthUser" ;
// import unAuthUser from "./unAuthUser";
// import { useContext } from "react";
// import { userrContaxt} from ""

// const App=()=>{
//   const {user}= useContext(userrContaxt);
//     return(
//    <>
//   {user.auth? <AuthUser />:<UnAuthApp/>} 
//    </>
//   )
// }
// export default App;