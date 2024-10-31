// src/App.jsx
import { useState } from "react"
import "./App.css"
import { ZombieFighter } from "./components/ZombieFighter/ZombieFighter.jsx"
import { TeamMember } from "./components/TeamMember/TeamMember.jsx"

// naming each element separately so I can track what gets passed where

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const availableFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952"
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796"
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355"
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776"
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4"
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2"
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2"
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc"
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537"
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e"
    }
  ]

  const teamStrength = team.reduce(
    (total, fighter) => total + fighter.strength,
    0
  )
  const teamAgility = team.reduce(
    (total, fighter) => total + fighter.agility,
    0
  )

  const addFighterToTeam = (selectedFighter) => {
    if (money >= selectedFighter.price) {
      setTeam((prevTeam) => [...prevTeam, selectedFighter])
      setMoney((prevMoney) => prevMoney - selectedFighter.price)
    } else {
      console.log("Not enough money!")
    }
  }

  const removeTeamMember = (memberToRemove) => {
    setTeam((prevTeam) =>
      prevTeam.filter((teamMember) => teamMember.name !== memberToRemove.name)
    )
    setMoney((prevMoney) => prevMoney + memberToRemove.price)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: ${money}</h3>
      <h3>Team Strength: {teamStrength}</h3>
      <h3>Team Agility: {teamAgility}</h3>

      <div className="team-section">
        <h3>Your Team</h3>
        {team.length > 0 ? (
          <ul>
            {team.map((teamMember, idx) => (
              <TeamMember
                key={idx}
                teamMember={teamMember}
                removeTeamMember={removeTeamMember}
              />
            ))}
          </ul>
        ) : (
          <h5>No fighters in your team yet.</h5>
        )}
      </div>

      <h3>Available Fighters</h3>
      <ul>
        {availableFighters.map((fighterData, idx) => (
          <ZombieFighter
            key={idx}
            fighterData={fighterData}
            addFighterToTeam={addFighterToTeam}
          />
        ))}
      </ul>
    </>
  )
}

export default App
