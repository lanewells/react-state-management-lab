// src/components/ZombieFighter/ZombieFighter.jsx

export const ZombieFighter = ({ fighterData, addFighterToTeam }) => {
  return (
    <li>
      <img src={fighterData.img} alt={fighterData.name} />
      <p>Name: {fighterData.name}</p>
      <p>Price: {fighterData.price}</p>
      <p>Strength: {fighterData.strength}</p>
      <p>Agility: {fighterData.agility}</p>
      <button onClick={() => addFighterToTeam(fighterData)}>Add to Team</button>
    </li>
  )
}
