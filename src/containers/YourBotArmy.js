import React from "react";
import BotCard from '../components/BotCard'

const YourBotArmy = (props) => {
  console.log("Bot Army:", props.bots); 
  return (
    <div className="bot-army">
      <div>
        <h1>Your bot army</h1>
      </div>
      {props.bots.map((bot) => (
        <BotCard
          key={bot.id} 
          bot={bot}
          handleBot={props.dischargeBot}
          dischargeForever={props.dischargeForever}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
