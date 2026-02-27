const doSubmit = async (data: string): Promise<boolean> => {
  const response = await fetch("https://formspree.io/f/xoqbygdg", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: data
  });

  return response.ok;
};

export default doSubmit;