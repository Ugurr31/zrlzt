const { Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");
const config = require("../config.json")

module.exports = {
    name: "rol-select",
    description: 'Menülü rol alma sistemini kurarsın.',
    type: 1,
    options: [],
    run: async (client, interaction) => {

        const lourity = new EmbedBuilder()

        if (interaction.user.id !== config.ownerId) return interaction.reply({ embeds: [lourity.setColor("Red").setDescription("Bu komutu kullanabilmek için kurucu olman gerekiyor.")], ephemeral: true })

        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('menu')
                    .setPlaceholder('Etkinlik Rolleri')
                    .addOptions([
                        {
                            label: "Etkinlik Katılımcısı",
                            description: "Etkinliklerden haberdar olmak için!",
                            emoji: `${config.etkinlik}`,
                            value: "etkinlikRole"
                        },
                        {
                            label: "Çekiliş Katılımcısı",
                            description: "Çekilişlerden haberdar olmak için!",
                            emoji: `${config.cekilis}`,
                            value: "cekilisRole"
                        },
                        {
                            label: "Vampir Köylü Katılımcısı",
                            description: "Vampir köylü oyunlarından haberdar olmak için!",
                            emoji: `${config.vampirkoylu}`,
                            value: "vampirkRole"
                        },
                        {
                            label: "Doğruluk Cesaret Katılımcısı",
                            description: "Doğruluk cesaret oyunlarından haberdar olmak için!",
                            emoji: `${config.dc}`,
                            value: "dcRole"
                        },
                        {
                            label: "Rolleri Temizle",
                            description: "Rol istemiyorsan temizlemek için!",
                            emoji: `${config.noRole}`,
                            value: "noRole"
                        },
                    ]))

        const row2 = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('menu2')
                    .setPlaceholder('Burç Rolleri')
                    .addOptions([
                        {
                            label: "Koç",
                            description: "Koç burcunu almak için!",
                            emoji: `${config.koc}`,
                            value: "kocRole"
                        },
                        {
                            label: "Boğa",
                            description: "Boğa burcunu almak için!",
                            emoji: `${config.boga}`,
                            value: "bogaRole"
                        },
                        {
                            label: "İkizler",
                            description: "İkizler burcunu almak için!",
                            emoji: `${config.ikizler}`,
                            value: "ikizlerRole"
                        },
                        {
                            label: "Yengeç",
                            description: "Yengeç burcunu almak için!",
                            emoji: `${config.yengec}`,
                            value: "yengecRole"
                        },
                        {
                            label: "Aslan",
                            description: "Aslan burcunu almak için!",
                            emoji: `${config.aslan}`,
                            value: "aslanRole"
                        },
                        {
                            label: "Başak",
                            description: "Başak burcunu almak için!",
                            emoji: `${config.basak}`,
                            value: "basakRole"
                        },
                        {
                            label: "Terazi",
                            description: "Terazi burcunu almak için!",
                            emoji: `${config.terazi}`,
                            value: "teraziRole"
                        },
                        {
                            label: "Akrep",
                            description: "Akrep burcunu almak için!",
                            emoji: `${config.akrep}`,
                            value: "akrepRole"
                        },
                        {
                            label: "Yay",
                            description: "Yay burcunu almak için!",
                            emoji: `${config.yay}`,
                            value: "yayRole"
                        },
                        {
                            label: "Oğlak",
                            description: "Oğlak burcunu almak için!",
                            emoji: `${config.oglak}`,
                            value: "oglakRole"
                        },
                        {
                            label: "Kova",
                            description: "Kova burcunu almak için!",
                            emoji: `${config.kova}`,
                            value: "kovaRole"
                        },
                        {
                            label: "Balık",
                            description: "Balık burcunu almak için!",
                            emoji: `${config.balik}`,
                            value: "balikRole"
                        },
                        {
                            label: "Rolleri Temizle",
                            description: "Rol istemiyorsan temizlemek için!",
                            emoji: `${config.noRole}`,
                            value: "noRole"
                        },
                    ]))

        const row3 = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('menu3')
                    .setPlaceholder('Oyun Rolleri')
                    .addOptions([
                        {
                            label: "CS:GO",
                            description: "CS:GO rolünü almak için!",
                            emoji: `${config.csgo}`,
                            value: "csgoRole"
                        },
                        {
                            label: "League of legends",
                            description: "League of legends rolünü almak için!",
                            emoji: `${config.lol}`,
                            value: "lolRole"
                        },
                        {
                            label: "Valorant",
                            description: "Valorant rolünü almak için!",
                            emoji: `${config.valorant}`,
                            value: "valorantRole"
                        },
                        {
                            label: "Gta V",
                            description: "Gta V rolünü almak için!",
                            emoji: `${config.gtav}`,
                            value: "gtavRole"
                        },
                        {
                            label: "Pubg",
                            description: "Pubg rolünü almak için!",
                            emoji: `${config.pubg}`,
                            value: "pubgRole"
                        },
                        {
                            label: "Fortnite",
                            description: "Fortnite rolünü almak için!",
                            emoji: `${config.fortnite}`,
                            value: "fortniteRole"
                        },
                        {
                            label: "Rolleri Temizle",
                            description: "Rol istemiyorsan temizlemek için!",
                            emoji: `${config.noRole}`,
                            value: "noRole"
                        },
                    ]))

        const row4 = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('menu4')
                    .setPlaceholder('Renk Rolleri')
                    .addOptions([
                        {
                            label: "Kırmızı",
                            description: "Kırmızı rengini almak için!",
                            emoji: `${config.kirmizi}`,
                            value: "kirmiziRole"
                        },
                        {
                            label: "Beyaz",
                            description: "Beyaz rengini almak için!",
                            emoji: `${config.beyaz}`,
                            value: "beyazRole"
                        },
                        {
                            label: "Mor",
                            description: "Mor rengini almak için!",
                            emoji: `${config.mor}`,
                            value: "morRole"
                        },
                        {
                            label: "Lacivert",
                            description: "Lacivert rengini almak için!",
                            emoji: `${config.lacivert}`,
                            value: "lacivertRole"
                        },
                        {
                            label: "Yeşil",
                            description: "Yeşil rengini almak için!",
                            emoji: `${config.yesil}`,
                            value: "yesilRole"
                        },
                        {
                            label: "Turuncu",
                            description: "Turuncu rengini almak için!",
                            emoji: `${config.turuncu}`,
                            value: "turuncuRole"
                        },
                        {
                            label: "Turkuaz",
                            description: "Turkuaz rengini almak için!",
                            emoji: `${config.turkuaz}`,
                            value: "turkuazRole"
                        },
                        {
                            label: "Sarı",
                            description: "Sarı rengini almak için!",
                            emoji: `${config.sari}`,
                            value: "sariRole"
                        },
                        {
                            label: "Rolleri Temizle",
                            description: "Rol istemiyorsan temizlemek için!",
                            emoji: `${config.noRole}`,
                            value: "noRole"
                        },
                    ]))

        const row5 = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('menu5')
                    .setPlaceholder('İlişki Rolleri')
                    .addOptions([
                        {
                            label: "Sevgilim Var",
                            description: "Sevgilim var rolünü almak için!",
                            emoji: `${config.sevgilimVar}`,
                            value: "sevVar"
                        },
                        {
                            label: "Sevgilim Yok",
                            description: "Sevgilim yok rolünü almak için!",
                            emoji: `${config.sevgilimYok}`,
                            value: "sevYok"
                        },
                        {
                            label: "Sevgili Yapmıyorum",
                            description: "Sevgilim yapmıyorum rolünü almak için!",
                            emoji: `${config.sevgiliYapmam}`,
                            value: "sevYapmiyorum"
                        },
                        {
                            label: "Rolleri Temizle",
                            description: "Rol istemiyorsan temizlemek için!",
                            emoji: `${config.noRole}`,
                            value: "noRole"
                        },
                    ]))

        const content = `${config.etkinlik} \`Etkinlik Katılımcısı\` **Rolünü Aldığınızda Düzenlenen Etkinliklerden Haberdar Olursunuz**\n\n${config.cekilis} \`Çekiliş Katılımcısı\` **Rolünü Aldığınızda Düzenlenen ${config.netflix}, ${config.spotify}, ${config.nitro} Çekilişlerine Katılabilirsiniz**\n\n${config.unlem} \`Renk rollerini ( Booster Ve Taglı ) Kullanıcılar Alabilir\``

        interaction.channel.send({ content: content, components: [row, row2, row3, row4, row5] })
        interaction.reply({ content: "Rol select menu başarıyla kuruldu!", ephemeral: true })
    }
}