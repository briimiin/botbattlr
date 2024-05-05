import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {

  render() {
    console.log("Bot Army:", this.props.bots); // Log the bot data to inspect it
    return (
      <div className="ui-segment-inverted-olive-bot-army">
          <div>
              <h1>Your bot army</h1>
          </div>
        {this.props.bots.map((bot, index) => (
          <BotCard
            key={bot.id} // Assuming each bot has a unique identifier called "id"
            bot={bot}
            handleBot={this.props.dischargeBot}
            dischargeForever={this.props.dischargeForever}
          />
        ))}
      </div>
    );
  }
}

export default YourBotArmy;
