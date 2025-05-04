import React, { useState } from "react";

const habitsList = [
  "Me suis levé à l'heure prévue",
  "Ai lu mon plan de trading",
  "Ai respecté ma journée sans impulsivité",
  "Ai tenu mon journal de trading",
  "Ai fait une pause entre les sessions"
];

const checklistItems = [
  "Checked economic calendar",
  "Reviewed news events",
  "Identified key market levels",
  "Visualized A+ setups",
  "Defined risk/reward",
  "Entry/stop/target set",
  "Rated confidence level",
  "Avoided FOMO",
  "Journal updated",
  "Emotion tracked",
  "Trade screenshots taken"
];

export default function TradingDisciplineApp() {
  const [habits, setHabits] = useState(Array(habitsList.length).fill(false));
  const [checklist, setChecklist] = useState(Array(checklistItems.length).fill(false));

  const toggleHabit = i => {
    const copy = [...habits];
    copy[i] = !copy[i];
    setHabits(copy);
  };

  const toggleChecklist = i => {
    const copy = [...checklist];
    copy[i] = !copy[i];
    setChecklist(copy);
  };

  const getScore = () => {
    const total = habits.filter(Boolean).length + checklist.filter(Boolean).length;
    const score = Math.round((total / (habits.length + checklist.length)) * 100);
    return `${score}% discipline`;
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>🧠 Trading Discipline Tracker</h1>

      <h2>🗓 Habitudes quotidiennes</h2>
      {habitsList.map((label, i) => (
        <div key={i}>
          <input type="checkbox" checked={habits[i]} onChange={() => toggleHabit(i)} />
          <label>{label}</label>
        </div>
      ))}

      <h2>📋 Checklist de session</h2>
      {checklistItems.map((item, i) => (
        <div key={i}>
          <input type="checkbox" checked={checklist[i]} onChange={() => toggleChecklist(i)} />
          <label>{item}</label>
        </div>
      ))}

      <h3>Discipline Score: {getScore()}</h3>
    </div>
  );
}