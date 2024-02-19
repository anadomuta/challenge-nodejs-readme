// Set up individual badge URLs objecy
const badgeUrls = {
  HTML: "html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JavaScript:
    "javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  Bootstrap:
    "bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  jQuery:
    "jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
  NodeJS: "node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
};

// Function to generate language badges based on user selection
const generateBadge = (badge) =>
  `![${badge}](https://img.shields.io/badge/${badgeUrls[badge]})`;

const generateBadges = (selectedBadges) => {
  let badges = "";
  for (const badge of selectedBadges) {
    badges += generateBadge(badge) + "\n";
  }
  return badges;
};

// Function to generate license badge based on user selection
const generateLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${license}-white.svg)`;
  } else {
    return "";
  }
};

module.exports = { generateBadges, generateLicenseBadge };
