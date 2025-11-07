const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('help').setDescription('Show help for Reaction Roles bot.'),
  async execute({ interaction }){
    const text = [
      '**Reaction Roles Bot — Help**',
      '/rmessage channel mappings — Create reaction-role message. Mappings format: emoji:roleId or emoji:@role (comma separated)',
      '/radd messageid emoji:roleId — Add mapping to existing message',
      '/rremove messageid emoji — Remove mapping',
      '/rlist — List reaction role messages',
      '/rdelete messageid — Delete configuration',
      '/groupcreate name — Create a role group',
      '/groupadd name role — Add a role to group',
      '/groupremove name role — Remove a role from group',
      '/timedrole user role minutes — Give a role for limited minutes',
      '/autorole add role — Add autorole; /autorole clear — clear autoroles'
    ].join('\n');
    await interaction.reply({ content:text, ephemeral:true });
  }
};
