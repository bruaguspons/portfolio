interface SubmitPayload {
  email: string;
  message: string;
}

const doSubmit = async (payload: SubmitPayload): Promise<boolean> => {
  const response = await fetch("https://formspree.io/f/xoqbygdg", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response.ok;
};

export default doSubmit;