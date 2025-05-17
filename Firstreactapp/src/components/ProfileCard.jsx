 export default function ProfileCard(props) {
   
const {id,name,age,bio} = props

return (
 <div className="profile_card">
  
  <div className="container" id ={id} >
   
    <h4>Name: {name}</h4> 
    <p>Age : {age}</p>
    <p>Bio : {bio}</p>
  </div>
</div>
  );
}