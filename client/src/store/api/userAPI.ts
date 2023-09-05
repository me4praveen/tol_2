import axios from "axios";
import { SERVER_URL } from "../../constants/api.constants";

export const fetchUserDetails = async (username: string, password: string) => {
  let res = await axios.post(SERVER_URL, {
    query: `query Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
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
      "username": username,
      "password": password,
    }
  },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  if (res?.data?.error) {
    res = await axios.post(SERVER_URL, {
      query: `mutation registerUser($firstname: String!, $username: String!, $email: String!, $password: String!, $roles: [RoleType]!, $middleName:String, $lastName: String,  $photo: File ){
              registerUser(firstName: $firstname, username: $username, email: $email, password: $password, roles: $roles, middleName:$middleName, lastName: $lastName,  photo: $photo ){
                  token,
                  user {
                    email
                    firstName
                    id
                    lastName
                    middleName
                    roles {
                      id
                      name
                    }
                  }
                }
              }
              `,
      variables: {
        "firstname": "shashi",
        "username": username,
        "lastName": "kant",
        "email": "shashi@gmail.com",
        "middleName": "",
        "password": password,
        "photo": null,
        "roles":["super", "admin"]
      }
    },

      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }



  return res.data.data.login || res.data.data.registerUser;

}


export default {
  fetchUserDetails
}