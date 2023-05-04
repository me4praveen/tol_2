import axios from "axios";

export const fetchUserDetails = async (username: string, password: string) => {
    const data = await axios.post("http://localhost:5000/graphql", {
            query: `mutation registerUser($firstname: String!, $username: String!, $email: String!, $password: String!, $roles: [RoleType]!, $middleName:String, $lastName: String,  $photo: File ){
              registerUser(firstName: $firstname, username: $username, email: $email, password: $password, roles: $roles, middleName:$middleName, lastName: $lastName,  photo: $photo ){
                token,
                user {
                  email
                  firstName
                  id
                  lastName
                  middleName
                  photo {
                    id
                    type
                  }
                  roles {
                    id
                    name
                  }
                }
              }
            }`,
            variables: {
                "firstname": "shashi",
                "username": "devone2",
                "lastName": "kant",
                "email": "shashikant@gmail.com",
                "middleName": "",
                "password": "tol1992",
                "photo": null,
                "roles": ["super", "admin"]
            }
    },

        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );


    return data;

}


export default {
    fetchUserDetails
}