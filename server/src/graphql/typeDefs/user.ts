export default `#graphql
input Pagination {
        page: Int!
        items: Int!
}

scalar Upload

input File {
  name: String!
  type: String!
  size: Int!
  path: String!
  buffer: Upload!
}


type User{
    id: ID!
    firstName: String!
    middleName: String
    lastName: String
    email: String!
    photo: Document
    roles: [Role]!

}

type Role{
    id: ID
    name: String
}

type Document{
    id: ID!
    filename: String!
    type: String!
    data: String!
}

enum RoleType{
    super
    admin
    student
    staff
    viewer
}

input UserFilter {
    id: Int
    firstName: String
    lastName: String
}



type AuthPayload {
        token: String!
        user: User!
    }

type Query {
    login(username: String!, password: String!): AuthPayload
}

type Mutation {
    registerUser(firstName: String!, username: String!, email: String!, password: String!, roles: [RoleType]!, middleName:String, lastName: String,  photo: File): AuthPayload
}
`