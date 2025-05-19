import Card from "./component/Card"

let myobj = {
  userName:"Rajbir",
  rollNo:99,
  student:"college student"
}
const myArr = [1,2,3,4];
console.log(myobj);
console.log(myArr);

function App() {
  return (
    <>
      <Card username="Tanuj" id="101"/>
      <Card username="Sam" />
      <div>{myobj.userName}</div>
      <div>{myobj.rollNo}</div>
      <div>{myobj.student}</div>
      <div>{myArr}</div>
    </>
  )
}

export default App
