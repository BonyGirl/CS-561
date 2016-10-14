const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const education = data.education;
const hobby = data.hobby;
const _class = data._class;

dbConnection().then(db => {
    return db.dropDatabase()
    .then(() => {
        return dbConnection;
    })
    .then(() => {
        return education.addEdu("Shanghai University", "undergrad", "Bachelor of Science");
    })
    .then(() => {
        return education.addEdu("Beihai High School", "highschool");
    })
    .then(() => {
        return education.addEdu("Beihai Foreign Language School", "middleschool");
    })
    .then(() => {
        return education.addEdu("Beihai Foreign Language School", "middleschool");
    })
    .then(() => {
        return hobby.addHob("Swimming", "breaststroke");
    })
    .then(() => {
        return hobby.addHob("Painting", "Oil Painting");
    })
    .then(() => {
        return _class.addClass("CN001", "Chinese", "Zhihong Li", "Perfect");
    })
    .then(() => {
        return _class.addClass("CN002", "Math", "Zanwei Zhu", "Perfect");
    })
    .then(() => {
        return _class.addClass("CN003", "English", "Honhpei Wei", "Perfect");
    })    
    .then(() => {
        return _class.addClass("CN004", "Biology", "Yongyuan Lee", "Great");
    })
    .then(() => {
        return _class.addClass("CN005", "Physics", "Dong Pang", "Amazing");
    })
    .then(() => {
        return _class.addClass("CN006", "Chemistry", "Zhenshu Zhang", "Terrific");
    })



    .then(() => {
        console.log("Done seeding class database");
        db.close();
    });
}, (error) => {
    console.error(error);
});

          // })
            // .then(() => {
            //     return _class.addClass("CN003", "English", "Honhpei Wei", "Perfect");
            // })
            // .then(() => {
            //     return _class.addClass("CN004", "Biology", "Yongyuan Lee", "Great");
            // })
            // .then(() => {
            //     return _class.addClass("CN005", "Physics", "Dong Pang", "Amazing");
            // })
            // .then(() => {
            //     return _class.addClass("CN006", "Chemistry", "Zhenshu Zhang", "Terrific");
            // })
            // .then(() => {
            //     return education.addEdu("Shanghai University", "undergrad", "Bachelor of Science");
            // })
            
            //;
    
    // .then((aojia) => {
    //     const id = aojia._id;

    //     return posts
    //         .addPost("Hello, class!", "Today we are creating a blog!", id)
    //         .then(() => {
    //             return posts.addPost("Using the seed", "We use the seed to have some initial data so we can just focus on servers this week", id);
    //         })
    //         .then(() => {
    //             return posts.addPost("Using routes", "The purpose of today is to simply look at some GET routes", id);
    //         });
    // })

    // .then((db) => {
    //     return _class.addClass("CN001", "Chinese", "Zhihong Li", "Awesome").then(() => {
    //         return db;
    //     });
    // }).then((db) => {
    //     return _class.addClass("CN002", "Math", "Zanwei Zhu", "Great").then(() => {
    //         return db;
    //     });
    // }).then((db) => {
    //     return _class.addClass("CN003", "English", "Honhpei Wei", "Perfect").then(() => {
    //         return db;
    //     });
    // }).then((db) => {
    //     return _class.addClass("CN004", "Biology", "Yongyuan Lee", "Great").then(() => {
    //         return db;
    //     });
    // }).then((db) => {
    //     return _class.addClass("CN005", "Physics", "Dong Pang", "Amazing").then(() => {
    //         return db;
    //     });
    // }).then((db) => {
    //     return _class.addClass("CN006", "Chemistry", "Zhenshu Zhang", "Terrific").then(() => {
    //         return db;
    //     });
    //})