const generateBadges = (selectedBadges) => {
  const badges = [];

  if (selectedBadges.includes("HTML")) {
    badges.push(
      `![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`
    );
  }

  if (selectedBadges.includes("CSS")) {
    badges.push(
      `![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
      `
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
