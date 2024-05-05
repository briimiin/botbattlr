import React from "react";

const BotCard = (props) => {
  const { bot, handleBot, dischargeForever } = props;

  const handleClick = () => {
    handleBot(bot); // Call handleBot function with the bot object
  };

  const handleDischargeForever = () => {
    dischargeForever(bot); // Call dischargeForever function with the bot object
  };

  return (
    <div className="bot-card-grid">
      <div className="ui card small-card" onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div>Name: {bot.name}</div>
          <div>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra-content">
          <span>
            Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}
          </span>
          <div>
            <button className="button" onClick={handleDischargeForever}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
