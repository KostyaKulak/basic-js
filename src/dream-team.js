module.exports = function createDreamTeam(members) {
  if (members == undefined || !(members instanceof Array || typeof members == 'array')) {
    return false;
  } else {
    return members.filter(s => s instanceof String || typeof s == 'string')
      .map(s => s.replace(/ /g, ''))
      .map(s => s[0])
      .map(s => s.toUpperCase())
      .sort()
      .join('');
  }
};