import User from "../entities/User.js"

class UserService {
    fetchUsers(){
        return fetch("https://randomuser.me/api/?results=15")
                    .then((response) => {
                        return response.json();
                
                    })
                    .then((result)=>{
                        console.log(result)
                        const userList = result.results;
                        return userList;
                    })
                    .then((userList)=>{
                        return userList.map((user) =>{
                            return new User(user);
                        })
                    })
    }
}

export const userService = new UserService();
