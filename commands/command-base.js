const prefix = "$"


module.exports = (client, commandOptions) => {
  let {
    commands,
    expectedArgs = '',
    minArgs = 0,
    maxArgs = null,
    callback,
  } = commandOptions

  // Mets la commande dans un tableau
  if (typeof commands === 'string') {
    commands = [commands]
  }

  console.log(`Registering command "${commands[0]}"`)


  // Ecoute input de messages Discord
  client.on('message', (message) => {
    const { member, content, guild } = message

    for (const alias of commands) {
      const command = `${prefix}${alias.toLowerCase()}`

      if (
        content.toLowerCase().startsWith(`${command} `) ||
        content.toLowerCase() === command
      ) {
        // Une commande a été executé

        // Enlève les espaces en cas d'erreurs
        const arguments = content.split(/[ ]+/)

        // Enlève le nom de la commande pour garder args
        arguments.shift()

        // Vérifier qu'on a le bon nombre d'arguments 
        if (
          arguments.length < minArgs ||
          (maxArgs !== null && arguments.length > maxArgs)
        ) {
          message.reply(
            `Syntaxe incorrecte : ${prefix}${alias} ${expectedArgs}`
          )
          return
        }

        // Custom command code
        callback(message, arguments, arguments.join(' '), client)
        console.log(command + " est executé.")
        return
      }
    }
  })
}