import {useEffect, useState} from "react"

export default function compare(player1, player2, player3, player4, player5, skills) {
    const skillsArray = Object.keys(skills)
    

    const player1XP = skillsArray.map( x =>
       player1.skills[x].xp
    );
    
    const player2XP = skillsArray.map( x =>
       player2.skills[x].xp
    );

    const player3XP = skillsArray.map( x =>
       player3.skills[x].xp
    );

    const player4XP = skillsArray.map( x =>
       player4.skills[x].xp
    );

    const player5XP = skillsArray.map( x =>
       player5.skills[x].xp
    );
   
    const allPlayers = [player1, player2, player3, player4, player5]
    const allPlayersXP = [player1XP, player2XP, player3XP, player4XP, player5XP]
    
    function findMaxStats() {
      let highestPlayerSkills = []
      for (let i = 0; i < allPlayersXP[0].length -1; i ++) {
         let highestPlayer = ''
         const highest = (Math.max(player1XP[i], player2XP[i], player3XP[i], player4XP[i], player5XP[i]))
         allPlayers.forEach(player => {
            if (player.skills[skillsArray[i]].xp === highest) {highestPlayer = player.username}
         });
         highestPlayerSkills.push({
            name:`${skillsArray[i]}`,
            xp:`${highest}`,
            player:`${highestPlayer}`
         })
         }
         console.log(highestPlayerSkills)
}
findMaxStats();
}