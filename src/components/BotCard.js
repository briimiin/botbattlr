import React from "react";
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
}

const BotCard = (props) => {
  const { bot, handleBot, dischargeForever } = props;

  const handleClick = () => {
    handleBot(bot); 
  };

  const handleDischargeForever = () => {
    dischargeForever(bot); 
    };

    return (
      <div className="bot-card-container">
        <div className="ui card small-card">
          <img alt="bot" src={bot.avatar_url} />
          <div className="card-content">
            <div className="bot-name">
              Name: {bot.name}
              <i className={botTypeClasses[props.bot.bot_class]}></i>
            </div>
            <div className="catchphrase">
              <small>{bot.catchphrase}</small>
            </div>
            <div className="stats">
              <span>
                Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}|  Class: {bot.bot_class}|
              </span>
            </div>
            <button className="discharge-button" onClick={handleDischargeForever}> x </button>
            <button className="add-to-army-button" onClick={handleClick}>Add to army</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BotCard;