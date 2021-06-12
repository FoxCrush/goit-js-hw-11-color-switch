const delay = ms => {
    const delayedPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
    return delayedPromise;
};

const timeLogger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(timeLogger); // Resolved after 2000ms
delay(1000).then(timeLogger); // Resolved after 1000ms
delay(1500).then(timeLogger); // Resolved after 1500ms

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//     );

//     callback(updatedUsers);
// };
const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
    );
    const promise = new Promise((resolve, reject) => {
        resolve(updatedUsers)
    })

    console.log(updatedUsers);
    console.log("~ promise", promise)

    return promise
};


const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
