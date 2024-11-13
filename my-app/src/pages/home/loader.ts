export const loader = async () => {
  console.log("In the loader ");

  const data = await getData();

  return data;
};

const getData = async () => {
  return new Promise((res, rej) =>
    setTimeout(
      () =>
        res({
          first: "Your",
          last: "Name",
          avatar: "https://robohash.org/you.png?size=200x200",
          twitter: "your_handle",
          notes: "Some notes",
          favorite: true,
          id: "1",
        }),
      5000
    )
  );
};
