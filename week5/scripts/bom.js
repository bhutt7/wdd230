const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value != '') {
        let item = document.createElement('li');
        let destroy = document.createElement('button');

        item.textContent = input.value;
        destroy.textContent = '❌';
        
        item.append(destroy);
        list.append(item);

        destroy.addEventListener('click', function() {
            item.remove();
        })

        input.focus();
        input.value = '';
    }
});