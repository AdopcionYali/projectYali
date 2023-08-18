const savePostObject = async (postData) => {
  try {
    let response = await fetch("http://localhost:8080/", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postData }),
    });
    let data = await response.json();
    if (!data.success) throw new Error("Error");
    return data;
  } catch (error) {
    return error;
  }
};

