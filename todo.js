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


var todo = {
    notes: [{
        text: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit',
        isDone: false,
        id: '29dgf4'
    },
        {
            text: 'Lorem ipsum dolor sit',
            isDone: false,
            id: '24dgf4'
        },
        {
            text: 'Lorem ipsum dolor sit',
            isDone: false,
            id: '23dgf4'
        }
    ],
    createNote: function (textNote) {
        if(!this.checkUniqueNote(textNote)) {
            this.notes.push({
                text: this.checkIsEmptyStr(textNote),
                isDone: false,
                date: this.getNewDate(),
                id: this.generateId()
            });
            return false;
        }
    },

    checkUniqueNote: function (textNote) {
        var duplicates = this.notes.some(function (note) {
            return note.text === textNote;
        });
        return duplicates;
        },

    checkIsEmptyStr: function (textNote) {
        if (textNote.length === 0 || !(textNote.trim())) {
            return 'You wrote nothing! Fill in something!!!'
        } else
            return textNote;
    },

    getNewDate: function () {
        var date = new Date();
        var day = date.getDate().toString().padStart(2,'0');
        var month = (date.getMonth()+1).toString().padStart(2, '0');
        var year = date.getFullYear().toString().padStart(2, '0');
        var hour = (date.getHours()+1).toString().padStart(2,'0');
        var minutes = date.getMinutes().toString().padStart(2,'0');
        var seconds = date.getSeconds().toString().padStart(2,'0');
        var today = day + '/' + month + '/' + year + '.' + hour + '/' + minutes + '/' + seconds;
        return today;
    },

    removeNote: function (id, isRemoved) {
        var noteIndex = this.notes.findIndex(function (note) {
            if (note.id === id)
            {return note}

        });
        if (isRemoved) {
            this.notes.splice(noteIndex, 1)
        }
        return this.notes;
    },

    modifedNote: function (id, editNote, isSave) {
        var currentIndex = this.notes.findIndex(function (note) {
            if (note.id === id) {
                return note
            }
       });
        if (!isSave) {
            this.notes[currentIndex].text;
        } else
        this.notes[currentIndex].text = editNote
    },

    setNoteStatus: function (id) {
        var currentIndex = this.notes.findIndex(function (note) {
            if (note.id === id) {
                return note
            }
        });
        this.notes[currentIndex].isDone = !this.notes[currentIndex].isDone;
    },

    getCountNote: function () {
        var totalNotes = this.notes.length;
        var countOfDone = this.notes.filter(function (note) {
            if (note.isDone){
                return note
            }
        }).length;
        var countIsNotDone = totalNotes - countOfDone;
        var res = 'Total notes: '+totalNotes + ' Done: '+countOfDone + ' Is not done: '+countIsNotDone;
        return res;
    },

    generateId: function () {
        var newId = '';
        var randomStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 0; i<2; i++) {
            newId += randomStr.charAt(Math.floor(Math.random()*randomStr.length));
        }
        var randonNum = '0123456789';
        for (var j = 0; j<3; j++) {
            newId += randonNum.charAt(Math.floor(Math.random()*randonNum.length));
        }
        return newId;
    },

    sortByNameNote: function () {
        this.notes.sort(function (a,b) {
            var firstDeal = a.text.toLowerCase();
            var secondDeal = b.text.toLowerCase();
            if (firstDeal < secondDeal)
                return -1;
            if (firstDeal > secondDeal)
                return 1;
            return 0;
        });
    },
    sortByState: function () {
        this.notes.sort(function (a,b) {
            var firstDeal = a.isDone;
            var secondDeal = b.isDone;
            if (firstDeal < secondDeal)
                return -1;
            if (firstDeal > secondDeal)
                return 1;
            return 0;
        });
    }
};

var toDoList = Object.freeze(todo);

console.log('создание заметки');
toDoList.createNote('buy car');
toDoList.createNote('wash dish');
toDoList.createNote('read letter');
toDoList.createNote('read letter');
toDoList.createNote('');
console.log(toDoList.notes);

console.log('удаление заметки');
console.log(toDoList.removeNote('29dgf4',confirm('Remove deal?')));
console.log(toDoList.notes);

console.log('редактирование заметки');
toDoList.modifedNote('24dgf4', 'buy pen', confirm('Save changing?'));
console.log(toDoList.notes);

//изменение статуса
toDoList.setNoteStatus('24dgf4');
console.log(toDoList.notes);
console.log(toDoList.getCountNote());

console.log('сортировка по имени');
toDoList.sortByNameNote();
console.log(toDoList.notes);

console.log('сортировка по статусу');
toDoList.sortByState();
console.log(toDoList.notes);

toDoList.checkUniqueNote('read letter');

