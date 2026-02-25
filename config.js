/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['255617173946','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBD9l3rVaGUTNeJGDOCGCIorONEPJRRQslpVoNDhv0/g7du3H2Y67rzVkpF58uQ5+QNkOabIQDUY/wAFwRVkqD2yukBgDNQyCBABXeBDBsEYoNU2oM5KuYSCtMxmrtjY8nCO6liNkktRiEvfajjLuCqc+QaeXVCUlwR7f0g42Tu9aerWCZwJRqnqizTIGqlREdbygZaIRlkWMWN8Fcdv4NlmhJjgLJwWEUoRgYmB6g3E5GvwD9rMLnTY8NZeda2BVa4dt7Pj53No17uJtnlcK+hEs406pV+D34m16lRM4MxPE0jN/Hq3uVP/4AihgZedXahlTn6my619td/hUxxmyNd9lDHM6i/zDhUnkM1of5bP0VRIFqtY79+Dmdtctp2r4OnZfXWj7uio84evATdvt8F5ZV+riaRWyX24yf2ztVnQdB3iXhGNtg0lu/pCpenhd+Ab8qGV+P/w7hrL9dBRjxzkxF5+1Od1Xnhlr3YK12lO+1s8XxX3/VSimftF+Eh3Hydl6mRQWjk1dSPncRS4M7+/qbZziyY3S1SdyMn65id8yEryJ5Qza6RJx14QmJ1T53ZbZAuSGtHkIKSVB5dOz08a69RPCzTvCRzHV2lxVOcL5qRnxFNb1uSEl0UlXqOGVMJENMTsNonub6+OYlTrPhhzzy4gKMSUEchwnrVv8qgLoF/tkEcQe7ELTsneWeOOW1SdzgBH3KmTEjSyV9feSsNS3lwqgbl4V9mJ+Aa6oCC5hyhF/gJTlpPaRJTCEFEw/vt7F2Towd7n1lYTuC4IMKHskJVFkkP/Y6gfn9Dz8jJjuzrztPaACBj3P58RYzgLaUtjmUHiRbhCWgQZBeMAJhT9ahAR5IMxIyX6ZVot91veZ4atbOXBFnRB+poH9sEY8JI04GROFkbiYMwN/6Lf7m1aWBTfMsRAFySvME7oD4Uh3x+JI4kX+Tay/Xj+Qtgm9BGDOKFgDLTlSiLr4Wxq3hY98z6fK16oaKECPjv6UMY79fdotDaPG+Y/am9lOjAsw/zQoY8+z4LyLNEhvIxM93aZJvrbvyRpG0lxlmAvC/lzX7am3kafDfjAQ6YsNlVzt5a9wob1KOwhW9JjgxsNFsf1sj5to6koqkdBcY390dJPmnlwsb7kq8d2q7Qy6gIfVdhDvxcTpzdsGYPUgOfwsqjmfeI3gRifBpUV8nQgLe/eXCWs14v9XZBPtwNf8/edRSJXtX9cuYFKz8rIxUtXJFN+s42FY0Wv9rtmX55Jfu4q/JJTO6v2GmD0sn4GU/SV2b0DbyXWf3Z/y/FzmfyHIVVPD/bX2V52PC/Tmhmfr3JjtiGmbxFHTtFlM097+7mRPpY78Hx+74IigSzISdquzMwnOfZBF5C8bDWrZ0H+h2Ka0teVMJy1nSeQMuXTB3ucIspgWoAxJ8t8nx8OW9O2URuSFwtIIzAGQrg5LGPw/AfxTszGVAcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
