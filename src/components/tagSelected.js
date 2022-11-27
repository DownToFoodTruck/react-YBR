export default async function tagSelected(param) {
  try {
    const res = await fetch("/api?tag=" + param);
    const final_data = await res.json();
    return await final_data;
  } catch (err) {
    console.log(err);
  }
}
