const generateBadges = (selectedBadges) => {
  const badges = [];

  if (selectedBadges.includes("HTML")) {
    badges.push(
      `![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white`
    );
  }

  if (selectedBadges.includes("CSS")) {
    badges.push(
      `![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)`
    );
  }

  if (selectedBadges.includes("JavaScript")) {
    badges.push(
      `![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`
    );
  }

  if (selectedBadges.includes("Bootstrap")) {
    badges.push(
      `![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)`
    );
  }

  if (selectedBadges.includes("jQuery")) {
    badges.push(
      `![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`
    );
  }

  if (selectedBadges.includes("NodeJS")) {
    badges.push(
      `![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`
    );
  }

  return badges.join("\n");
};

const generateLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${license}-white.svg)`;
  } else {
    return "";
  }
};

module.exports = generateBadges;
module.exports = generateLicenseBadge;
