const userData=[
    {
        name:"Kannan",
        city:"Sivakasi",
        des:"Front-End Developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","ReactJs"],
        online:true,
        profile:"1.jpeg",
    },
    {
        name:"Lok",
        city:"Sattur",
        des:"Front-End Developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","ReactJs"],
        online:true,
        profile:"2.jpeg",
    },
    {
        name:"Ranjan",
        city:"Sivakasi",
        des:"Front-End Developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","ReactJs"],
        online:false,
        profile:"3.jpeg",
    },
]
function User(props){
    return(
    <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
        <img src={props.profile} className="img" alt="fruit"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <h3>{props.des}</h3>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}
export const UserCard = () => {
  return (
        <>
        {userData.map((user,index)=>(
            <User key={index}
            name={user.name}
            city={user.city}
            des={user.des}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
        ))}
        </>
  )
}

{/* <User name="Kannan" city="Sivakasi" des="Front-End Developer" skills={["UI/UX","Front End Developer","HTML","CSS","JavaScript","ReactJs"]} online={true} profile="2.jpeg"/> */}
