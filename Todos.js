const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')

let todos = users.find(user => user.name === currentUser).todos

function updateSite(){
$('.todos').html('')

for (let todo of todos) {
    $('.todos').html($('.todos').html() + `<div class="todo">
    <div class="todo-content">
        <h2>${todo.title}</h2>
        <p>
           ${todo.text}
        </p>
    </div>
    <div class="options">
        <button id="butt" class="btn btn-danger">Delete</button>
        <button id="but2" class="btn btn-success">Edit</button>
    </div>
</div>`)
}
};

updateSite()

$('#addTodo').click(function(){
    $('.my-modal').addClass('active')
})

$('#close').click(function(){
    $('.my-modal').removeClass('active')
})



$('#but2').click(function(){
    $('.my-modal2').addClass('active')
})

$('#close2').click(function(){
    $('.my-modal2').removeClass('active')
})



$('#save-todo').click(function(){
    let addTodo = {
        id: Date.now(),
        title: $('input').val(),
        text: $('textarea').val()
    }

    todos.push(addTodo)

    users.find(user => user.name === currentUser).todos = todos

    localStorage.setItem('users', JSON.stringify(users))
    updateSite()
    $('.my-modal').removeClass('active')
})


changeTodo = false

changeTodo = true



$('#save-todo2').click(function(){
    let changeTodo2 = {
        id: Date.now(),
        title: $('#inp').val(),
        text: $('#te').val()
    }

    todos.push(changeTodo2)

    users.find(user => user.name === currentUser).todos = todos

    localStorage.setItem('users', JSON.stringify(users))

if(changeTodo === true){
    function updateSite(){
        $('.todos').html('')
        
        for (let todo of todos) {
            $('.todos').html(`<div class="todo">
            <div class="todo-content">
                <h2 class="h2">${todo.title}</h2>
                <p class="p2">
                   ${todo.text}
                </p>
            </div>
            <div class="options">
                <button id="butt" class="btn btn-danger">Delete</button>
                <button id="but2" class="btn btn-success">Edit</button>
            </div>
        </div>`)
        }
        };
        
}

    updateSite()
    $('.my-modal2').removeClass('active')

});






