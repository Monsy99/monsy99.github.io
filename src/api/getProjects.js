import axios from "axios";

const getProjects = async () => {
  let data;
  try {
    const response = await axios({
      method: "get",
      url: "https://api.github.com/users/monsy99/starred",
    });
    data = response.data;
  } catch (e) {
    console.log(e);
  }
  return data;
};

export { getProjects };
