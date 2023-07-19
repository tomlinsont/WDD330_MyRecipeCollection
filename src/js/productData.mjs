function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export  function getData(category = "chicken") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}

export async function findProductByLabel(label) {
  const recipes = await getData();
  return recipes.find((item) => item.label === label);
}