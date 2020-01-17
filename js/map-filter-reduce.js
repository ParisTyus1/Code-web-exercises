const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let languages = users.filter(user => user.languages.length >= 3);
console.log(languages);

let userEmail = users.map(user => user.email);
console.log(userEmail);

let yearsExp = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
},0);//starting point for accumulator//
console.log(yearsExp/users.length);
console.log(yearsExp);

let longEmail = users.reduce((emailCount,emailLetter) =>{
    return emailCount.email.length > emailLetter.email.length ? emailCount : emailLetter
});
console.log(longEmail);

let instructorlist = users.reduce((listNames, names)=>{
    return listNames + `${names.name} `;
},"");
console.log(instructorlist);


