
import './App.css';
import Profile from './Profile/ProfileComponent'
function App() {
  const person =[
    {fullName:"Ahlem Touati", bio:"Good person", profession:"Student",img:"https://static.vecteezy.com/ti/vecteur-libre/p1/4773704-un-visage-de-fille-avec-un-beau-sourire-un-avatar-femme-pour-un-site-web-et-un-reseau-social-vectoriel.jpg"},
    {fullName:"Leila Rajah", bio:"Good person", profession:"Student",img:"https://static.vecteezy.com/ti/vecteur-libre/p1/4773704-un-visage-de-fille-avec-un-beau-sourire-un-avatar-femme-pour-un-site-web-et-un-reseau-social-vectoriel.jpg"}
  ]
  return (
    <div className="App">
    {person.map (el=>
      <Profile x={el.fullName} y={el.bio} z={el.profession} t={el.img}></Profile>)}
      
    </div>
  );
}

export default App;
