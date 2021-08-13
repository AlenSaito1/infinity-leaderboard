export const css = `
@font-face {
font-family: "Cooper Black";
src: url("https://cdn.glitch.com/8f973a1b-80be-4cc1-bc2e-cba7259fd18d%2FCooperBlack.otf?v=1627042743268");
}
body {
  text-align: center; background-color:black; color:white; font-size:1.3rem; font-family:"Cooper Black", serif;}
a {
  color:blue; text-decoration:none;
}

div {
  justify-content: center;
}

.leaderboardentrylabel{ 
  color: white;
  text-shadow: 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black;
  font-family: "Cooper Black", serif;
}
.headerimg{
  justify-content: center;
}
.leaderboardentry {
  width:70%; padding-top:4px; padding-bottom:4px; margin: auto; margin-bottom: 5px; border-radius: 10px;
} 

.leaderboardentry:hover {
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1); 
}

`
