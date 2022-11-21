export default function tagSelected(param) {
  async function executeQuery() {
    try {
      const url = "/api?tag=" + param;
      const rawRes = await fetch(url);
      let product = await rawRes.json();

      console.log(product);
      // console.log(rawResJSON);
    } catch (err) {
      console.log(err);
    }
  }
  executeQuery();
}
