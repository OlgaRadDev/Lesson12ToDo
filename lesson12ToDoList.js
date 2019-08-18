// Вам нужно создать список задач, который умеет:
//
//     добавлять новые задачи и проверять их уникальность. У каждой задачи есть статус,
// время создания и текст
// удалять задачу, но с условием (тут передаете в качестве аргумента confirm)
// редактировать задачу (тоже спрашиваете нужно ли сохранить изменения)
// выводить общее количество задач, сколько выполнили и сколько осталось
// генерировать id для ваших заметок
// сортировать в зависимости от условия - по алфавиту задачи или по статусу
//
//// Ах, да! Это не просто объект - вам нужно сделать так, чтоб в него нельзя было вносить
// изменения, чтоб никто не переписал случайно его методы)

var toDo = {
    notes: [{
        text: 'Lorem ipsum dolor sit amet,	consectetur adipisicing elit.',
        isDone: false,
        id: '25hgjh1'
    }],

    createNote: function (textNote) {
        this.notes.push({
            text: textNote,
            isDone: false,
            date: Date.now(),
            id: '25hgjh1'
        })

    },
    removeNote: function (id) {
        var currentNoteIndex = this.notes.findIndex(function(note){
            if (note.id === id) {
                return note;
            }
        });
        this.notes.splice(currentNoteIndex, 1);

    },
    modifedNote: function (id, editNote) {
        var currentNoteIndex = this.notes.findIndex(function(note){
            if (note.id === id) {
                return note;
            }
        });
        this.notes[currentNoteIndex].text = editNote;

    },

    sortByName: function(notes) {
        notes.sort(function(a,b) {
            var firstDeal = a.text.toLowerCase();
            var secondDeal = b.text.toLowerCase();
            if (firstDeal < secondDeal)
                return -1;
            if (firstDeal > secondDeal)
                return 1;
            return 0;
        });

    },

    setNoteStatus: function(id) {
        var currentNoteIndex = this.notes.findIndex(function(note){
            if (note.id === id) {
                return note;
            }
        });
        this.notes[currentNoteIndex].isDone = !this.notes[currentNoteIndex].isDone;

    },

    getCountOfDone: function() {
        var totalNotes = this.notes.length;
        var isDoneNotes = this.notes.filter(function(note) {
            if (note.isDone) {
                return note;
            }
        }).length;

        return totalNotes;
    },

    get 
    // var newId = function() {
    //     this.id = createId();
    //     function createId() {
    //         var randomStr = 'abcdefghijklmnopqrstuvwxyz1234567890';
    //         var str = '';
    //         for (var i = 0; i < 15; i++) {
    //             str += randomStr[parseInt(Math.random()*(randomStr.length))];
    //         }
    //     }
    // };

getCurrentDate: function() {

}

};

// toDo.createNote();
console.log(toDo.removeNote(confirm("Remove deal?"+'25hgjh1')));
console.log(toDo.modifedNote(confirm("Save changing?")));
console.log(toDo.sortByName());

