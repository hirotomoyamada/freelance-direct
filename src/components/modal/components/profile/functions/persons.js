export const persons = (data) => {
  return {
    icon: data.icon,
    cover: data.cover,
    
    name: data.name,
    body: data.body,
    age: data.age,
    sex: data.sex,
    position: data.position,
    location: data.location,
    period: data.period,

    handles: data.handles
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    tools: data.tools
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    skills: data.skills
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    urls: data.urls
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),
    data: data.data
      .filter((object) => object[Object.keys(object)])
      .map((object) => object[Object.keys(object)]),

    resident: data.resident,
    working: data.working,
    clothes: data.clothes,
    costs: data.costs,
  };
};
