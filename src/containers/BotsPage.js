import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [enlistedClasses, setEnlistedClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((botsData) => setBots(botsData));
  }, []);

  const addBotToArmy = (armyBot) => {
    const botClass = armyBot.bot_class;
    if (!enlistedClasses.includes(botClass)) {
      setBotArmy((prevBotArmy) => [...prevBotArmy, armyBot]);
      setEnlistedClasses((prevEnlistedClasses) => [
        ...prevEnlistedClasses,
        botClass,
      ]);
    }
  };

  const dischargeBot = (armyBot) => {
    const updatedBotArmy = botArmy.filter((bot) => bot !== armyBot);
    setBotArmy(updatedBotArmy);
    const botClass = armyBot.bot_class;
    setEnlistedClasses((prevEnlistedClasses) =>
      prevEnlistedClasses.filter((c) => c !== botClass)
    );
  };

  const dischargeForever = (armyBot) => {
    const updatedBots = bots.filter((bot) => bot !== armyBot);
    const updatedBotArmy = botArmy.filter((bot) => bot !== armyBot);

    setBots(updatedBots);
    setBotArmy(updatedBotArmy);

    fetch(`http://localhost:3000/bots/${armyBot.id}`, {
      method: "DELETE",
    });

    const botClass = armyBot.bot_class;
    setEnlistedClasses((prevEnlistedClasses) =>
      prevEnlistedClasses.filter((c) => c !== botClass)
    );
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
