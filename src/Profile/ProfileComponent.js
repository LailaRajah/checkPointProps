const Profile = ({t,x,y,z})=>{
    return (
        <div>
        <img src={t} alt="profile" style={{width:"150px"}}></img>

        <h1>{x}</h1>
        <h2>{y}</h2>
        <h1>{z}</h1>

        </div>
    )
}
export default Profile ;