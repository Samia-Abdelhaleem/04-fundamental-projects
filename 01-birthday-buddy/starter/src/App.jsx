import { useState } from "react";
import data from "./data";
import User from "./User";
const App = () => {
  const [users, setUsers] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{users.length} Birthday today</h3>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
        <button className="btn btn-block" onClick={() => setUsers([])}>
          {" "}
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
