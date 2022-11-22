import * as ReactDOM from "react-dom";

export default function tagSelected(param) {
  async function executeQuery() {
    try {
      const url = "/api?tag=" + param;
      const rawRes = await fetch(url);
      let product = await rawRes.json();
      // console.log(product);
      return product;
    } catch (err) {
      console.log(err);
    }
  }

  async function returnQuery() {
    const queryResult = await executeQuery();
    console.log(queryResult);
    // console.log(queryToHTML);
    // ReactDOM.render(queryToHTML, document.getElementById("root"));
  }
  returnQuery();
  // const queryToHTML = returnQuery();
  // return queryToHTML.map((e) => <div>{e.Name}</div>);
}
