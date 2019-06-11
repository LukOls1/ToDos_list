let notes =  {
    list: [
        {
            title: 'Go to work',
            completed: false
        },{
            title: 'Walk the dog',
            completed: false
        },{
            title: 'Cook dinner',
            completed: true
        },{
            title: 'Shopping',
            completed: false
        },{
            title: 'Study JS',
            completed: true
        }]
}
const filters = {
    searchText: '',
    hideCompleted: false
}
const renderNotes = function (notes, filters) {
    let filteredNotes = notes.list.filter(function (note) {
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
   })
    filteredNotes = filteredNotes.filter(function (note) {
        if (filters.hideCompleted) {
            return !note.completed
        }
        else  {
            return true
        }    
    })

   document.querySelector('#container').innerHTML = ''
 
   filteredNotes.forEach(function (note) {
       const noteEl = document.createElement('p')
       noteEl.textContent = note.title
       document.querySelector('#container').appendChild(noteEl)
   })
}
renderNotes(notes, filters)
document.querySelector('#filterToDos').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#toDoForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const inpval = e.target.elements.newToDo.value
    addNew(inpval, notes)
    e.target.elements.newToDo.value = ''
    
})
const addNew = function(val, notes) {
    notes.list.unshift({
        title: val,
        completed: false
    })
    renderNotes(notes, filters)
}
document.querySelector('#filterDone').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked 
    renderNotes(notes, filters)
})

