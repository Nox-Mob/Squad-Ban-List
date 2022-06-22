import DiscordWebhookNode from 'discord-webhook-node';

const { Webhook, MessageBuilder } = DiscordWebhookNode;

export default function (url, options = {}) {
  return [
    new Webhook(url, { retryOnLimit: false })
      .setUsername('Squad Ban List')
      .setAvatar(
        'https://raw.githubusercontent.com/CodeWithBryan/Squad-Ban-List/master/client/src/assets/img/brand/sbl-logo-square.png'
      ),
    new MessageBuilder()
      .setColor(options.color || '#ffc40b')
      .setFooter('Powered by the Squad Ban List.')
      .setTimestamp()
  ];
}
