import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((botsData) => setBots(botsData));
  }, []);

  const addBotToArmy = (armyBot) => {
    if (!botArmy.find((bot) => bot === armyBot)) {
      const foundBot = bots.find((bot) => bot === armyBot);
      setBotArmy((prevBotArmy) => [...prevBotArmy, foundBot]);
    }
  };

  const dischargeBot = (armyBot) => {
    const updatedBotArmy = botArmy.filter((bot) => bot !== armyBot);
    setBotArmy(updatedBotArmy);
  };

  const dischargeForever = (armyBot) => {
    if (botArmy.find((bot) => bot === armyBot)) {
      const updatedBots = bots.filter((bot) => bot !== armyBot);
      const updatedBotArmy = botArmy.filter((bot) => bot !== armyBot);

      setBots(updatedBots);
      setBotArmy(updatedBotArmy);

      fetch(`http://localhost:3000/bots/${armyBot.id}`, {
        method: "DELETE",
      });
    } else {
      console.log("Not even enlisted");
    }
  };

  return (
    <div>
      <YourBotArmy
        bots={botArmy}
        dischargeBot={dischargeBot}
        dischargeForever={dischargeForever}
      />
      <BotCollection
        bots={bots}
        addBot={addBotToArmy}
        dischargeForever={dischargeForever}
      />
    </div>
  );
};

export default BotsPage;
