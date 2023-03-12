
module.exports = function generateRandomToken(length=48, tokensToAvoid) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  while (token.length < length) {
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    token += randomChar;
  }

  if (tokensToAvoid.includes(token)) {
    return generateRandomToken(length, tokensToAvoid); // Recurse until a unique token is generated
  }

  return token;
}
