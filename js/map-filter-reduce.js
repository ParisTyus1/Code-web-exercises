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
console.log(`Total years of experience is ${yearsExp}. The average is ${yearsExp/users.length}.`);


let longEmail = users.reduce((emailCount,emailLetter) =>{
    return emailCount.email.length > emailLetter.email.length ? emailCount : emailLetter;
});
console.log(longEmail.email);

let instructorlist = users.reduce((listNames, names)=>{
    return listNames + `${names.name} `;
},"Your instructors are: ");
console.log(instructorlist);

//TODO: Use .reduce to get the unique list of languages from the list of users.
let uniqueLang = users
    .reduce((languages, usersLang) => {
        usersLang.languages.forEach( (language) => {
            if (languages.includes(language)){
            } else {
                languages.push(language);
            }
        });
        return languages
    }, []);
console.log(uniqueLang);
