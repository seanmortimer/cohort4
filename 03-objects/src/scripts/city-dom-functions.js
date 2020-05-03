const functions = {

    newCityCard: (city) => {
      const card = document.createElement('DIV');
      card.className = 'clCard';
  
      const h3 = document.createElement('H3');
      h3.appendChild(document.createTextNode(actName));
      h3.className = 'clActName';
      card.appendChild(h3);
  
      const p1 = document.createElement('P');
      p1.appendChild(document.createTextNode('Balance:'))
      card.appendChild(p1);
      const balance = document.createElement('SPAN');
      balance.id = 'id' + actName;
      p1.appendChild(balance);
  
      const p2 = document.createElement('P');
      const delBtn = document.createElement('button');
      delBtn.id = 'idDelBtn';
      delBtn.appendChild(document.createTextNode('Delete Account'));
  
  
      p2.appendChild(delBtn);
      card.appendChild(p2);
  
      return card;
    },
  
    delAct: (card) => {
      card.remove();
  
    },
  
    newActListItem: (actName) => {
      // Take in account name, return option item
      const actItem = document.createElement('OPTION')
  
      actItem.value = actName;
      actItem.id = 'idList' + actName;
      actItem.textContent = actName;
      return actItem;
    },
  
    delListItem: (item) => {
      item.remove();
  
    },
};
  
  export default functions;