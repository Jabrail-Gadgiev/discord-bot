const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sus')
		.setDescription('Replies with a secret Pong!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
				// Ensure the text will fit in an embed description, if the user chooses that option
				.setMaxLength(2000))
		.addBooleanOption(option =>
			option.setName('embed')
				.setDescription('Whether or not the echo should be embedded')),
	async execute(interaction) {
		await interaction.reply({content: 'SUS Pong!', ephemeral: true});
	},
};