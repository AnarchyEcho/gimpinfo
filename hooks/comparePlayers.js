function compare(player1, player2, player3, player4, player5, skills) {
   const skillsArray = Object.keys(skills)

   const player1XP = skillsArray.map(x =>
      player1.main.skills[x].xp
   );

   const player2XP = skillsArray.map(x =>
      player2.main.skills[x].xp
   );

   const player3XP = skillsArray.map(x =>
      player3.main.skills[x].xp
   );

   const player4XP = skillsArray.map(x =>
      player4.main.skills[x].xp
   );

   const player5XP = skillsArray.map(x =>
      player5.main.skills[x].xp
   );

   const allPlayers = [player1, player2, player3, player4, player5]
   const allPlayersXP = [player1XP, player2XP, player3XP, player4XP, player5XP]

   function findStatOrder() {
      let playerSkills = {};

      for (let i = 0; i < allPlayersXP[0].length; i++) {
         let highestPlayer = ''
         let lowestPlayer = ''

         const highest = (Math.max(player1XP[i], player2XP[i], player3XP[i], player4XP[i], player5XP[i]))
         const lowest = (Math.min(player1XP[i], player2XP[i], player3XP[i], player4XP[i], player5XP[i]))
         allPlayers.forEach(player => {

            if (player.main.skills[skillsArray[i]].xp === highest) { highestPlayer = player }
            if (player.main.skills[skillsArray[i]].xp === lowest) { lowestPlayer = player }
         });

      for (let x = 0; x < skillsArray.length; x++) {
         playerSkills[skillsArray[i]] = {
            highest: {
               player: `${highestPlayer.name}`,
               level: `${highestPlayer.main.skills[skillsArray[i]].level}`,
               xp: `${highest}`
            },
            lowest: {
               player: `${lowestPlayer.name}`,
               level: `${lowestPlayer.main.skills[skillsArray[i]].level}`,
               xp: `${lowest}`
            }
         }
      }
   }
      return playerSkills
   }
   return findStatOrder();

}

module.exports.compare = compare