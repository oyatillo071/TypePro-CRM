import axios from "axios";

// Login API
export async function loginApi(data, navigate) {
  try {
    const response = await axios.post("http://localhost:3000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/");
    }
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
  }
}

// Managers API full
export async function getManagersApi(navigate, id = "") {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/managers/${id ? id : ""}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

// Full get api
export async function fullGetApi(navigate, url = "") {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const response = await axios.get("http://localhost:3000/" + url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

// Search manager
export async function getManagersByNameApi(name, navigate) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/managers?name_like=${name}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

//Pagination manager
export async function getManagersWithPagination(page, limit, navigate) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/managers?page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}
