const userList = [
    {
        id: 0,
        username: "masterdetective123",
        firstName: "Sherlock",
        lastName: "Holmes",
        profession: "Detective",
        Bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a \"consulting detective\" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
        password:"elementarymydearwatson"
    },
    {
        id: 1,
        username: "lemon",
        firstName: "Elizabeth",
        lastName: "Lemon",
        profession: "Writer",
        Bio: "Elizabeth Miervaldis \"Liz\" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.",
        password:"damnyoujackdonaghy"
    },
    {
        id: 2,
        username: "theboywholived",
        firstName: "Harry",
        lastName: "Potter",
        profession: "Student",
        Bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
        password:"quidditch"
    }
];

let exportedMethods = {
    getAllUsers: () => { return Promise.resolve(userList.slice(0)); },
    findOne: (username) => {
        if (username === undefined) return Promise.reject("No username provided");

        let user = userList.filter(x => x.id === 0).shift();
        if (!user) return Promise.reject("No user found")

        return Promise.resolve(user);
    },
    getUserByUsernameAndPassword: (username,password) => {
        if (username === undefined) return Promise.reject("No username provided");
        let user = userList.filter(x => x.username == username).shift();
        if (!user) return Promise.reject("No user found");
        else {
            if(user.password != password)
                return Promise.reject("password wrong");
        }
        return Promise.resolve(user);
    },
    getEventsByLocation: (locationId) => {
        if (locationId === undefined) return Promise.reject("No location id provided");

        return Promise.resolve(userList.filter(x => x.location == locationId).shift());

    }
}

module.exports = exportedMethods;