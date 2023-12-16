import "@/app/styles/OurTeam.scss";

function OurTeam({ team }) {
  return (
    <div className="our-team-container">
      {team.map((person) => (
        <div className="team-member">
          <img src={person.img} alt="" />
          <h1>{person.name}</h1>
          <p>{person.role}</p>
        </div>
      ))}
    </div>
  );
}

export default OurTeam;
