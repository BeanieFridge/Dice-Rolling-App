function rollDice() {
  const numDice = document.getElementById('numDice').value;
  // const typeDice = document.getElementById('typeDice').value;
  const resultRoll = document.getElementById('diceRolled');
  const result = [];

  for(let i = 0; i < numDice; i++){
    const typeDice = document.getElementById('typeDice').value;
    const value = Math.floor(Math.random() * typeDice) + 1;
    result.push(value);
  }
  resultRoll.textContent = `${result.join(', ')}`
}






