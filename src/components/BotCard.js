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
    <div className="bot-card-grid">
      <div className="ui card small-card" >
      
        <div className="image">
          <img alt="bot" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div>
            Name: {bot.name}
            <i className={botTypeClasses[props.bot.bot_class]}></i>
          </div>
          <div>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra-content">
          <span>
            Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}|
          </span>
          <div>
            <div>
              Class: {bot.bot_class}
            </div>
            <button className="button" onClick={handleDischargeForever}>
              x
            </button>
          </div>
        </div>
        <div> 
          <button onClick={handleClick}>Add to army</button>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
