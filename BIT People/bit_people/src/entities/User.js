class User {
    constructor(props){
        this.name = `${props.name.first} ${props.name.last}`;
        this.email = props.email;
        this.birth = props.dob;
        this.photo = props.picture.large;
        this.gender = props.gender;
    }
}

export default User;