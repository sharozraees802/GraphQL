import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query GetAllStudent {
    students {
      id
      name
      email
      age
    }
  }
`;

const Student = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error :(</h1>;

  const { students } = data;
  console.log(error);
  return (
    <div>
      <h1>Students Lists</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Studen_Name</th>
            <th>Studen_Email</th>
            <th>Studen_Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud) => {
            return (
              <tr key={stud.id}>
                <td>{stud.name}</td>
                <td>{stud.email}</td>
                <td>{stud.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
