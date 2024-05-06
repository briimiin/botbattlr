// BotsPage.js
import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";
import ClassFilter from "./ClassFilter";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [enlistedClasses, setEnlistedClasses] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filteredClasses, setFilteredClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((botsData) => setBots(botsData));
  }, []);

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleFilter = (selectedClasses) => {
    setFilteredClasses(selectedClasses);
  };

  const sortedBots = [...bots].sort((a, b) => b[sortBy] - a[sortBy]);

  const filteredBots = filteredClasses.length
    ? sortedBots.filter((bot) => filteredClasses.includes(bot.bot_class))
    : sortedBots;

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
      <SortBar handleSort={handleSort} />
      <ClassFilter classes={["Assault", "Defender", "Support", "Medic", "Witch", "Captain"]} handleFilter={handleFilter} />
      <BotCollection
        bots={filteredBots}
        addBot={addBotToArmy}
        dischargeForever={dischargeForever}
        canAddToArmy={filteredClasses.length >= 3}
      />
    </div>
  );
};

export default BotsPage;
