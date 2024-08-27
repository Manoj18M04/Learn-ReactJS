import propTypes from "prop-types"

const UserData = [
    {
        name: "Tony Stark",
        city: "New York",
        role: "Iron Man",
        profile: "images/Tony_Stark.jpg",
        online: false,
        known: ["Genius", "Billionaire", "Playboy", "Philanthropist", "Savior", "Inventor", "Scientist", "Engineer", "Cursed with Knowledge"],
    },
    {
        name: "Steve Rogers",
        city: "Queens",
        role: "Captain America",
        profile: "images/Steve_Rogers.jpg",
        online: true,
        known: ["Super Soldier", "The First Avenger", "Sentinel of Liberty", "Captain", "Cap"],
    },
    {
        name: "Thor Odinson",
        city: "Asgard",
        role: "Thor",
        profile: "images/Thor_Odinson.jpg",
        online: false,
        known: ["Son of Odin", "God of Thunder", "Pointbreak", "Goldlocks", "Lightning"],
    },
    {
        name: "Bruce Banner",
        city: "Berkeley",
        role: "Hulk",
        profile: "images/Bruce_Banner.jpg",
        online: true,
        known: ["Green Gollath", "Worldbreaker", "Mindless", "The Devil", "Professor Hulk", "Doc Green"],
    },
    {
        name: "Natasha Ramanoff",
        city: "Volgograd",
        role: "Black Widow",
        profile: "images/Natasha_Ramanoff.jpg",
        online: true,
        known: ["Black widow", "Natasha Ramanoff", "Destroyer of the redroom", "Assassin"],
    },
    {
        name: "Clint Barton",
        city: "Missouri",
        role: "Hawkeye",
        profile: "images/Clint_Barton.jpg",
        online: true,
        known: ["The Scout", "The Long Rifle", "Natty Bumppo", "Pathfinder", "Arrow", "Leather-shocking", "Ronin"],
    },
    {
        name: "Peter Parker",
        city: "New York",
        role: "Spiderman",
        profile: "images/Peter_Parker.jpg",
        online: true,
        known: ["Spidey", "Web Head", "Wall-Crawler", "Friendly neighborhood Spiderman", "Web-Crawler", "Queens kid", "The Webslinger", "Underoos"],
    },
    {
        name: "Wanda Maximoff",
        city: "WestView",
        role: "Scarlet Witch",
        profile: "images/Wanda_Maximoff.jpg",
        online: false,
        known: ["Jinx", "Witch", "Witch Women", "The Sorceress", "Evil Eye", "Miss Witch", "Leisure babygirl"],
    },
]

function User(props) {
    return(
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}> {props.online ? "ONLINE" : "OFFLINE"} </span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h5>{props.city}</h5>
            <p>{props.role}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h4>Well-known as :</h4>
                <ul>
                    {props.known.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const UserCard = () => {
  return (
    <> 
    <h1>AVENGERS ASSMBLE !!!</h1>
    {UserData.map((user, index) => (
            <User key = {index}
            name = {user.name}
            city = {user.city}
            role = {user.role}
            profile = {user.profile}
            online = {user.online}
            known = {user.known}
            />
        ))}
    </>
  );
}

User.propTypes = {
    name: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    role: propTypes.string.isRequired,
    profile: propTypes.string.isRequired,
    online: propTypes.bool.isRequired,
    known: propTypes.arrayOf(propTypes.string).isRequired,
}