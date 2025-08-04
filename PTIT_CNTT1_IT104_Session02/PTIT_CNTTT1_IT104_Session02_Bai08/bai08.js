const displayUserInfo = (object) => {
  console.log(
    `${object.name || "unknown"} is ${object.age || "unknown"}, lives in ${
      object.location?.city || "unknown"
    }, ${object.location?.country || "unknown"}, works as ${
      object.job?.title || "unknown"
    } at ${object.job?.company || "unknown"}, and can be contacted via ${
      object.contact?.email || "unknown"
    } or ${object.contact?.phone || "unknown"}`
  );
};

displayUserInfo({
  name: "John",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
  contact: { email: "john@example.com", phone: "0123456789" },
  job: { title: "Developer", company: "Tech Corp" },
});
displayUserInfo({
  name: "Anna",
  age: 30,
  location: { city: "Da Nang", country: "Vietnam" },
});
