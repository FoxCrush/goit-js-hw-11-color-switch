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

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({id, amount}) => {

    const delay = randomIntegerFromInterval(200, 500);
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                resolve({ id, delay });
            }
            reject(id);
        }, delay);
    }));
};

const logSuccess = ({id, delay}) => {
  console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
