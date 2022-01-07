import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [ajaxList, setAjaxList] = useState([]);

  const makeAjaxCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    setAjaxList(result);
  };
  return (
    <div>
      <h1>Hello React and Ajax</h1>
      <input type="button" value="Make a Ajax call" onClick={makeAjaxCall} />

      {ajaxList.map((item, index) => (
        <>
          <div className="alert alert-primary" key={index}>
            {item.title}
          </div>
          <div className="alert alert-danger" key={index}>
            {item.body}
          </div>
        </>
      ))}
    </div>
  );
}
