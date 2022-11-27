

export default function tagSelected(param) {
  
    async function executeQuery() {
      try {
        const url = "/api?tag=" + param;
        const rawRes = await fetch(url);
        const trucks = await rawRes.json();
        console.log(rawRes);
        console.log(trucks);
        console.log(param);
        // return product;

          // setName(trucks.Name)
          // setProfile(trucks.Profile)

      } catch (err) {
        console.log(err);
      }
    }
executeQuery()
  }