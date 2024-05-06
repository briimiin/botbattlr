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
      <div className="ui card small-card" >
          <img alt="bot" src={bot.avatar_url} />
          Name: {bot.name}
          <i className={botTypeClasses[props.bot.bot_class]}></i>
          <br></br>
          <small>{bot.catchphrase}</small>
          <br></br>
          <span>
            Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}|
          </span>
          <br></br>
          Class: {bot.bot_class}
          <br></br>
          <button className="button" onClick={handleDischargeForever}> x </button>
          <br></br>
          <button onClick={handleClick}>Add to army</button>
       
      </div>
  );
};

export default BotCard;
