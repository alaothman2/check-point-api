import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        setUsers(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div class="container" key={user.id}>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
                </div>
                <div class="table-responsive">
                  <table class="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium pl-4"
                        >
                          id
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          username
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Added
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pl-4">{user.id}</td>
                        <td>
                          <h5 class="font-medium mb-0">{user.name}</h5>
                        </td>
                        <td>
                          <span class="text-muted">{user.username}</span>
                        </td>
                        <td>
                          <span class="text-muted">{user.email}</span>
                        </td>
                        <td>
                          <span class="text-muted">{user.address.street}</span>
                        </td>
                        <td>
                          <select
                            class="form-control category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle"
                          >
                            <i class="fa fa-key"></i>{" "}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i class="fa fa-trash"></i>{" "}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i class="fa fa-edit"></i>{" "}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i class="fa fa-upload"></i>{" "}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
