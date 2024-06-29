const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349136098207";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_17_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQXhFRExHMkhDdzlPMEtJU3pwOVRCbk1ZRExJSXZUL0JSa2MxeG50REI5OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM2MDk4MjA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFODJGMkM0OTQ1RTdCODE5NEJBNzAwODQyQjkwQzk3QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2ODE0NTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM2MDk4MjA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMTA0NkVBRTY1ODkyRTYyMkQxMzNCRDBBNDVBODY1RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2ODE0NTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnYzMjIzd3lUYVNldkhrOUpCNWRpQVwiLFxuICBcInBob25lSWRcIjogXCI0MWViOWIyYS1jMGNlLTQ3OGUtYWFjNi03Yzc5YTI4OWMyZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxNTEsXG4gICAgICAyMzgsXG4gICAgICAxMDcsXG4gICAgICAxMjYsXG4gICAgICAzMSxcbiAgICAgIDQwLFxuICAgICAgMTk1LFxuICAgICAgMTYzLFxuICAgICAgMjEsXG4gICAgICAxNTcsXG4gICAgICAyMTgsXG4gICAgICAxMDcsXG4gICAgICAxNCxcbiAgICAgIDE4MixcbiAgICAgIDEwNSxcbiAgICAgIDQ2LFxuICAgICAgMjQyLFxuICAgICAgMTk0LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDc0LFxuICAgICAgMTI4LFxuICAgICAgMjgsXG4gICAgICAzMyxcbiAgICAgIDI0OSxcbiAgICAgIDExNCxcbiAgICAgIDcsXG4gICAgICA5MSxcbiAgICAgIDIyNixcbiAgICAgIDQ3LFxuICAgICAgMjM0LFxuICAgICAgMjUyLFxuICAgICAgMTU4LFxuICAgICAgMTg5LFxuICAgICAgMTc4LFxuICAgICAgMTc0LFxuICAgICAgMTgwLFxuICAgICAgMjA3LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRZR0ZGTlhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM2MDk4MjA3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NDc3NzkyOTgxNDE3OToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRvbiBUZXNjb1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvQXlhb0hFS3FEZ2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3dTUkxIYzBQQVZxYjh1c0tiOCt5K0JjRzRzSHVWc3FNNWE3Y3RtOWNIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwODV1ZkozRmZPU2dpTTRLTi9ZOExqeUFEbW5MQ2thbHRGR20wOTJjWmsvRDlQRmxKT2RMRFFHMWVjQnhrcDR1eWVkRytIRGRUU0l0UTkrTmk3Q3ZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRQ1NqWWVnUE1KRGhidWR0SGlEdWJNWVUxR2VtMkJCQ2VTb3dZT1Z1T1JaMnUxbFE4OGdZN0F6RTNCajJuZUNiQVEzQUlEamdhNWl5bkRrRmxaWlpCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM2MDk4MjA3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY4MTQ1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFvWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQW9aLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFI5a3A1aVMzQWMyU2dHTFhUbTVhWGYxN05oa0lPc1FtT3Rjd3YvV0dVND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY4MzMyODYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2ODE0NTUxMjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
