// src/components/TeamMember/TeamMember.jsx

export const TeamMember = ({ teamMember, removeTeamMember }) => {
  return (
    <li>
      <img src={teamMember.img} alt={teamMember.name} />
      <p>Name: {teamMember.name}</p>
      <p>Price: {teamMember.price}</p>
      <p>Strength: {teamMember.strength}</p>
      <p>Agility: {teamMember.agility}</p>
      <button onClick={() => removeTeamMember(teamMember)}>Remove</button>
    </li>
  )
}
