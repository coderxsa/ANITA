//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hacker@org";
global.location = "Africa, Johannesbueg";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/coderxsa/ANITA";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/coderxsa/WABot/main/ANITA/PIC/anita.jpg";
global.devs = "27717311486";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "27717311486";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://raw.githubusercontent.com/coderxsa/WABot/main/ANITA/PIC/anita.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://coderx-sessions.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBKd2dNeCtEQjdZcFR0N0ZlZkFJMzF3OEZ1MzA5cnhSdkhKMm1GSndFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJVLzBDRTdCN0JuQ2dRS3kzVVpUQkprUkF1Wk40d2RURllvNG5La0pscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TWxWNmZxNWk4OGNKUXljajJMdmp5SHo2Y28yYkhiazhyK1FvSjN3dlZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHeHZ5RVNkNmcxR0w3VTcrLy9yYWpTZng5WW0ydnF0cS85bkpyMXkxaUU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJejZyaXJjS1Q1Tkd6L0tSekpyQWdYVytvb2RHOGZtbWxoVTV6QWpMMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE3TnFHY3diaWF0Q2FkczFJbUxVTkxTTnlMUWJlL0o5ditoVVdNbFZ6REU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQ0WXZYK3pmT3h2YkZWN0xvbzEycDVXejIwN2J2TVc4ZWpiazBpQjBWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDREdndwU3Q1UDhZZmRMVnJ4bEQyTVRzMXlSOHF3MHNtYjVPaCtLNGZWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpqeXdyZ3BIY01kdWFXS1JrWFJXWkh0RFFsZklNSDVQK0V5TFJ2MGYyVW5Ic2dpL3J1OEpHbmlDeEEyZWZGUTlEMVBjQUN1b1ZsQmtnUy8yVFA5cUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJMOWNYTkVVNXN3YzNWVC83SFZMY3VyWEFjM1h3M0xGZXFobDVoOHpQSUM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjEzNjU2MDg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFCNkU1ODREQ0Y4OEY0MjcxMUNDMkQ1NDNBQjIxMDQ0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0OTU4MjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjEzNjU2MDg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc4MEMyODI5OEJDRThFRUU4MDE0OTM2RDU2NzI3QTREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0OTU4MjF9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldKeUUwNDlLUnpPQ0FGcEZHUkU1YkEiLCJwaG9uZUlkIjoiYzZlMzUwZjEtNTdiNC00Y2NjLTkxZGYtODA2YjA4MjA5ZWM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJKWnVRVjZBMTV2MW9UYmxvZDdUd1gwUWpjbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcUNvelBaYjJDYzlkR3ozaE1yclVsdVdxNHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVJHRlBINU0iLCJtZSI6eyJpZCI6IjI3NjEzNjU2MDg3OjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRlbW9uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcXhveWNRdmVhc3RRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2SnZxaVhIbE42OTRLM29NajhNLzAxUjBnVU45em1QRWZ1VjQ0VzVFbjBRPSIsImFjY291bnRTaWduYXR1cmUiOiI2VWk2Y3Y1VmJCQ1BBOWpnMXl3U1BOOGViOUtIL0hYVnc0a1pxOENzN1RGTWJyUHN5VUFuR0F6bkI1SG1rTnVjcE9ndGpDVWE2TTBmcmFUNkVhaXdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVpxUFluTkhZeW5NRXcvTGl4K2dQZW1RSWMzNTJxZWQ4R2pYZjhmTXMxZmltSW13aHFXU3pNYlJSNXZJTVI1Q3d3TDlFR2xFRE54TEhqK1dXb3ZwRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxMzY1NjA4Nzo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJieWI2b2x4NVRldmVDdDZESS9EUDlOVWRJRkRmYzVqeEg3bGVPRnVSSjlFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNDk1ODE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdOWCJ9" // put sesssion id
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "2.5.0",
  caption: process.env.CAPTION || "`ANITA™`",
  author: process.env.PACK_AUTHER || "ANITA",
  packname: process.env.PACK_NAME || "ANITA",
  botname: process.env.BOT_NAME || "ANITA",
  ownername: process.env.OWNER_NAME || "CODERX",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "whatsapp").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
