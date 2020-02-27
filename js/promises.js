// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"
//
// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
//
// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// const wait2 = () =>{
//     fetch("http://icanhazdadjoke.com/");
// }
// wait2().then((data) =>{
//     return data.json()
// });


const lastCommit = (screenName) => {
    let url = `https://api.github.com/users/${screenName}/events/public`;

     fetch(url,{headers:{'Authorization':`token ${githubToken}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date))


};
lastCommit("ParisTyus1");

// later on...

// getGithubUsernames().then((names) => {
//     names.forEach((name) => {
//         return name.map(user_event)
//     });
// }).catch(error => console.error(error));
// console.log(getGithubUsernames("/users/:ParisTyus1/events"));
