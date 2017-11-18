var appModel = {
    dummyData : {
        users: [{
            id: 1,
            fName: "test fName",
            lName: "test lName",
            email: "example@example.com",
            pincode: 12345,
            birthDate: "21-Dec-1990",
            isActive: true
        }],
        toDos: [{
            id: 1,
            user_id: 1,
            text: "Start the work",
            done: true,
            targetDate: "23-Nov-2017"
        }]
    }
}
module.exports = appModel;