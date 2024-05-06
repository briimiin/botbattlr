import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = ({ bots, addBot, dischargeForever }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="grid">
        <div className="row">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleBot={addBot}
              dischargeForever={dischargeForever}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotCollection;
