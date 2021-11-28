let list = $('#list');
let li = $('<li></li>');
let input = $('#input');
let inputValue = input.val();

function newItem(){
  li.append(inputValue);

  if (inputValue === ' '){
    alert ('Cannot be blank!');
  }else {
    list.append(li);
    input.val();
  }
}

$('#button').on('click', newItem);

function crossOut(){

}
