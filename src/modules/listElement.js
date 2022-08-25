const createListELement = (user, score) => {
  const element = document.createElement('tr');
  element.innerHTML = `<td>${user}: ${score}</td>`;
  return element;
};

export default createListELement;
