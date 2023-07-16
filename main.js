const todoListId_1 = '1';
const todoListId_2 = '2';

const todoLists = [
    {
        id: todoListId_1,
        title: "What to learn",
        filter: 'all',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
    }
];

// const tasks = [
//     { id: '10', todoListId: '1', title: 'HTML', isDone: true },
//     { id: '11', todoListId: '1', title: 'CSS', isDone: true },
//     { id: '12', todoListId: '1', title: 'JS/TS', isDone: true },
//     { id: '13', todoListId: '2', title: 'Beer', isDone: true },
//     { id: '14', todoListId: '2', title: 'Meat', isDone: true },
//     { id: '15', todoListId: '2', title: 'Cheeps', isDone: true }
// ];

const tasks = {
    [todoListId_1]: [
        { id: '10', title: 'HTML', isDone: true },
        { id: '11', title: 'CSS', isDone: true },
        { id: '12', title: 'JS/TS', isDone: true },
    ],

    [todoListId_2]: [
        { id: '13', title: 'Beer', isDone: true },
        { id: '14', title: 'Meat', isDone: true },
        { id: '15', title: 'Cheeps', isDone: true }
    ]
};
console.log(todoLists);

const addTodo = (todoListTitle) => {
    const newTodoListId = '3';
    const newTodoList = {
        id: newTodoListId,
        title: todoListTitle,
        filter: 'all'
    };
    const newTodoListState = [...todoLists, newTodoList];
    console.log(newTodoListState);
    const newTaskState = { ...tasks, [newTodoListId]: [] };
    console.log(newTaskState);
};

addTodo('What to read');


const removeTodoList = (todoListId) => {
    const newTodoListsState = todoLists.filter((tl => tl.id !== newTodoListId));
    console.log(newTodoListsState);
    const copyTasksState = { ...tasks };
    delete copyTasksState[todoListId];
    console.log(copyTasksState);
};


const students = [
    {
        id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: "2",
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: "3",
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: "4",
        name: "John",
        age: 21,
        isMarried: false,
        scores: 100
    },
    {
        id: "5",
        name: "Helge",
        age: 21,
        isMarried: false,
        scores: 100
    },
];

// const studentsObj = {
//     '1': {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     '2': {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
// }

// const studentsObj = {};
// for (let i = 0; i < students.length; i++) {
//     studentsObj[students[i].id] = students[i];
//     delete studentsObj[students[i].id].id;
// }

// console.log(studentsObj);

console.log(students.reduce((obj, el) => {
    obj[el.id] = el;
    delete obj[el.id].id;
    return obj;
}, {}));

// const studentsObj_2 = {
//     '20': 1,
//     '21': 3,
//     '22': 1
// }

const studentsObj_2 = {};
for (let i = 0; i < students.length; i++) {
    if (Object.keys(studentsObj_2).includes(students[i].age.toString())) {
        studentsObj_2[students[i].age] = studentsObj_2[students[i].age] + 1;
    } else {
        studentsObj_2[students[i].age] = 1;
    }
}

console.log(students.reduce((obj, el) => {
    if (Object.hasOwn(obj, el.age.toString())) {
        obj[el.age] += 1;
    } else {
        obj[el.age] = 1;
    }
    return obj;
}, {}));
