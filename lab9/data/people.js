const personList = [
    {
        id: 1,
        name: "Phil"
    },
    {
        id: 2,
        name: "Bren"
    },
    {
        id: 3,
        name: "Francis Underwood"
    },
    {
        id: 4,
        name: "Claire Underwood"
    },
    {
        id: 5,
        name: "Ricky Underwood"
    },
    {
        id: 6,
        name: "Leo Boykewich"
    }
];

let exportedMethods = {
    getAllPeople: () => { return Promise.resolve(personList.slice(0)); },
    getPerson: (id) => {
        if (id === undefined) return Promise.reject("No id provided");

        let person = personList.filter(x => x.id == id).shift();
        if (!person) return Promise.reject("No person found")

        return Promise.resolve(person);
    },
    getPersonList:(idList)=>{
        if(idList === undefined) return Promise.reject("No id list provided");

        let attendeesList = [];
        for(let i=0;i<idList.length;i++) {
            attendeesList.push(personList.filter(x=>x.id == idList[i]).shift());
        }
        if(!attendeesList) Promise.reject("No person found");

         return Promise.resolve(attendeesList);
    }
    
}

module.exports = exportedMethods;
