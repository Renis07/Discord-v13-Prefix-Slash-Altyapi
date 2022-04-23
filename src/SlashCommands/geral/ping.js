const Discord = require("discord.js")

module.exports =  {
    name: "say", //Komut çağırma adı 
    description: "Bot istediğiniz mesajı yazar", // komut açıklama alanı
    type: "MESSAGE",    //Komut Çalışma mantığı daha detaylı bilgi için sunucumuza veya discord.js sayfasını ziyaret edin.
    
    run: async (client, interaction, args) => {
 // =================Komut Çalışma Alanı===================== //
     let don = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")
        message.delete().catch(O_o => {});
        interaction.reply({ embeds: [don], ephemeral: false })
			//interaction.reply Bunu yazmayı unutmayın yoksa etkileşim hatası alırsınız
			//ephemeral: false (Bu demek ki bu mesajı herkes görebilir true yaparsan komutu çalıştıran kişi görür tek)
  // =================Komut Çalışma Alanı===================== //
    }
}