export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (products, value) => {
  let unique = products.map((product) => product[value]);
  if (value === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export const submitCart = async (cart, user) => {
  const res = await fetch(
    "https://e-commerce-baa5c-default-rtdb.firebaseio.com/orders.json",
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart,
        user,
      }),
    }
  );
};
