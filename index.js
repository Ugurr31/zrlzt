// Discord
const { PermissionsBitField, StringSelectMenuBuilder, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder, AuditLogEvent } = require("discord.js");

// İNTENTS
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember] });
//lourity
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const config = require("./config.json")
// Database
const db = require("croxydb")

global.client = client;
client.commands = (global.commands = []);
const { readdirSync } = require("fs")
const { TOKEN } = require("./config.json");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: false,
        type: 1
    });

    console.log(`[COMMAND] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(TOKEN)

// Bir Hata Oluştu
process.on("unhandledRejection", (reason, p) => {
    console.log(reason, p);
})

process.on("unhandledRejection", async (error) => {
    return console.log("Bir hata oluştu! " + error)
})
//
//
//


client.on('interactionCreate', async interaction => {
    if (interaction.isStringSelectMenu()) {
        const lourity = new EmbedBuilder()

        if (interaction.customId === "menu") {

            if (interaction.values[0] == "etkinlikRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.etkinlikRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.etkinlikRole).catch(l => { })
            }

            if (interaction.values[0] == "cekilisRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.cekilisRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.cekilisRole).catch(l => { })
            }

            if (interaction.values[0] == "vampirkRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.vampirkRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.vampirkRole).catch(l => { })
            }

            if (interaction.values[0] == "dcRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.dcRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.dcRole).catch(l => { })
            }

            if (interaction.values[0] == "noRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`Etkinlik rolleri başarıyla üzerinizden alınmıştır.`)], ephemeral: true })
                await interaction.member.roles.remove(config.etkinlikRole).catch(l => { })
                await interaction.member.roles.remove(config.cekilisRole).catch(l => { })
                await interaction.member.roles.remove(config.vampirkRole).catch(l => { })
                await interaction.member.roles.remove(config.dcRole).catch(l => { })
            }
        }



        if (interaction.customId === "menu2") {

            if (interaction.values[0] == "kocRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.kocRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.kocRole).catch(l => { })
            }

            if (interaction.values[0] == "bogaRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.bogaRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.bogaRole).catch(l => { })
            }

            if (interaction.values[0] == "ikizlerRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.ikizlerRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.ikizlerRole).catch(l => { })
            }

            if (interaction.values[0] == "yengecRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.yengecRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.yengecRole).catch(l => { })
            }

            if (interaction.values[0] == "aslanRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.aslanRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.aslanRole).catch(l => { })
            }

            if (interaction.values[0] == "basakRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.basakRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.basakRole).catch(l => { })
            }

            if (interaction.values[0] == "teraziRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.teraziRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.teraziRole).catch(l => { })
            }

            if (interaction.values[0] == "akrepRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.akrepRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.akrepRole).catch(l => { })
            }

            if (interaction.values[0] == "yayRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.yayRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.yayRole).catch(l => { })
            }

            if (interaction.values[0] == "oglakRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.oglakRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.oglakRole).catch(l => { })
            }

            if (interaction.values[0] == "kovaRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.kovaRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.kovaRole).catch(l => { })
            }

            if (interaction.values[0] == "balikRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.balikRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.balikRole).catch(l => { })
            }

            if (interaction.values[0] == "noRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`Burç rolleri başarıyla üzerinizden alınmıştır.`)], ephemeral: true })
                await interaction.member.roles.remove(config.kocRole).catch(l => { })
                await interaction.member.roles.remove(config.bogaRole).catch(l => { })
                await interaction.member.roles.remove(config.ikizlerRole).catch(l => { })
                await interaction.member.roles.remove(config.yengecRole).catch(l => { })
                await interaction.member.roles.remove(config.aslanRole).catch(l => { })
                await interaction.member.roles.remove(config.basakRole).catch(l => { })
                await interaction.member.roles.remove(config.teraziRole).catch(l => { })
                await interaction.member.roles.remove(config.akrepRole).catch(l => { })
                await interaction.member.roles.remove(config.yayRole).catch(l => { })
                await interaction.member.roles.remove(config.oglakRole).catch(l => { })
                await interaction.member.roles.remove(config.kovaRole).catch(l => { })
                await interaction.member.roles.remove(config.balikRole).catch(l => { })
            }
        }



        if (interaction.customId === "menu3") {

            if (interaction.values[0] == "csgoRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.csgoRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.csgoRole).catch(l => { })
            }

            if (interaction.values[0] == "lolRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.lolRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.lolRole).catch(l => { })
            }

            if (interaction.values[0] == "valorantRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.valorantRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.valorantRole).catch(l => { })
            }

            if (interaction.values[0] == "gtavRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.gtavRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.gtavRole).catch(l => { })
            }

            if (interaction.values[0] == "pubgRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.pubgRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.pubgRole).catch(l => { })
            }

            if (interaction.values[0] == "fortniteRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.fortniteRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.fortniteRole).catch(l => { })
            }

            if (interaction.values[0] == "noRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`Oyun rolleri başarıyla üzerinizden alınmıştır.`)], ephemeral: true })
                await interaction.member.roles.remove(config.csgoRole).catch(l => { })
                await interaction.member.roles.remove(config.lolRole).catch(l => { })
                await interaction.member.roles.remove(config.valorantRole).catch(l => { })
                await interaction.member.roles.remove(config.gtavRole).catch(l => { })
                await interaction.member.roles.remove(config.pubgRole).catch(l => { })
                await interaction.member.roles.remove(config.fortniteRole).catch(l => { })
            }
        }



        if (interaction.customId === "menu4") {

            if (!interaction.member.roles.cache.has(config.familyRole) || !interaction.member.roles.cache.has(config.boostRole)) return interaction.reply({ embeds: [lourity.setColor("Red").setDescription(`Renk rolü alabilmek için <@&${config.familyRole}> veya <@&${config.boostRole}> rollerine sahip olman gerekmekte!`)], ephemeral: true })

            if (interaction.values[0] == "kirmiziRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.kirmiziRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.kirmiziRole).catch(l => { })
            }

            if (interaction.values[0] == "beyazRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.beyazRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.beyazRole).catch(l => { })
            }

            if (interaction.values[0] == "morRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.morRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.morRole).catch(l => { })
            }

            if (interaction.values[0] == "lacivertRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.lacivertRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.lacivertRole).catch(l => { })
            }

            if (interaction.values[0] == "yesilRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.yesilRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.yesilRole).catch(l => { })
            }

            if (interaction.values[0] == "turuncuRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.turuncuRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.turuncuRole).catch(l => { })
            }

            if (interaction.values[0] == "turkuazRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.turkuazRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.turkuazRole).catch(l => { })
            }

            if (interaction.values[0] == "sariRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.sariRole}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.sariRole).catch(l => { })
            }

            if (interaction.values[0] == "noRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`Renk rolleri başarıyla üzerinizden alınmıştır.`)], ephemeral: true })
                await interaction.member.roles.remove(config.kirmiziRole).catch(l => { })
                await interaction.member.roles.remove(config.beyazRole).catch(l => { })
                await interaction.member.roles.remove(config.morRole).catch(l => { })
                await interaction.member.roles.remove(config.lacivertRole).catch(l => { })
                await interaction.member.roles.remove(config.yesilRole).catch(l => { })
                await interaction.member.roles.remove(config.turuncuRole).catch(l => { })
                await interaction.member.roles.remove(config.sariRole).catch(l => { })
            }
        }



        if (interaction.customId === "menu5") {

            if (interaction.values[0] == "sevVar") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.sevVar}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.sevVar).catch(l => { })
            }

            if (interaction.values[0] == "sevYok") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.sevYok}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.sevYok).catch(l => { })
            }

            if (interaction.values[0] == "sevYapmiyorum") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`<@&${config.sevYapmiyorum}> rolü başarıyla üzerinize verilmiştir.`)], ephemeral: true })
                await interaction.member.roles.add(config.sevYapmiyorum).catch(l => { })
            }

            if (interaction.values[0] == "noRole") {
                interaction.reply({ embeds: [lourity.setColor("Green").setDescription(`Sevgili rolleri başarıyla üzerinizden alınmıştır.`)], ephemeral: true })
                await interaction.member.roles.remove(config.sevVar).catch(l => { })
                await interaction.member.roles.remove(config.sevYok).catch(l => { })
                await interaction.member.roles.remove(config.sevYapmiyorum).catch(l => { })
            }
        }
    }
})

