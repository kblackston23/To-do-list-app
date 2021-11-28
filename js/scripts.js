//Adding new item to List

function newItem(){
  let list = $('#list');
  let li = $('<li></li>');
  let input = $('#input');
  let inputValue = $('#input').val();

  li.append(inputValue);

  if (inputValue === ''){
    alert ('Cannot be blank!');
  }else {
    $('#list').append(li);
    $('#input').val('');
  }


//Crossing out item from List

function crossOut(){
  li.toggleClass('strike');
}

li.on('dblclick', crossOut);

//Add delete button
let crossOutButton = $('<crossOutButton></crossOutButton>')
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

function deleteListItem(){
  li.addClass('delete');
}
crossOutButton.on('click', deleteListItem);

//Make list sortable

$('#list').sortable()
}
