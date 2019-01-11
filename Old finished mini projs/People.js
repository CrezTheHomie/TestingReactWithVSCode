import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function People() {
  const friends = [
    { name: "john", job: "dev", age: "25", height: 155 },
    { name: "suze", job: "teech", age: "25", height: 155 },
    { name: "kev", job: "homeless", age: "25", height: 155 }
  ];

  return (
    <section>
      {/* MUST BE AN EXPRESSION CMD + / */}
      <Person person={friends[0]}>Some info about me</Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}
const Person = props => {
  const { name, job, age, height } = props.person;
  const { children } = props;
  console.log(props);
  return (
    <div>
      <p>{children}</p>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{height}</p>
      <hr />
    </div>
  );
};
ReactDOM.render(<People />, document.getElementById("root"));
