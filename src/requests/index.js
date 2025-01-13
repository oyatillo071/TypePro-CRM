import axios from "axios";
import { toast } from "sonner";

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
    console.log(error);

    if (error.response?.status == 403 || error.response?.status == 401) {
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
    if (error.response?.status == 403 || error.response?.status == 401) {
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
    if (error.response?.status === 403 || error.response?.status === 401) {
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
    if (error.response?.status === 403 || error.response?.status === 401) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

// putch request

export async function updateEmployeeData(employeeId, updates, navigate) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/employees/${employeeId.trim() ? "" : employeeId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      const existingData = response.data;

      const updatedData = {
        ...existingData,
        ...updates,
      };

      const patchResponse = await axios.patch(
        `http://localhost:3000/employees/${employeeId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (patchResponse.status === 200) {
        toast.success(
          "Ma'lumot muvaffaqiyatli yangilandi:",
          patchResponse.data
        );
        return patchResponse.data;
      }
    }
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

// add tasks
export async function addTaskApi(navigate, newTask) {
  try {
    const userData = await axios.get(`http://localhost:3000/tasks`);

    if (userData.status === 200) {
      const tasksData = userData.data;

      const newTaskId =
        tasksData.length > 0
          ? Math.max(...tasksData.map((task) => task.id)) + 1
          : 1;

      const updatedTask = {
        ...newTask,
        id: newTaskId,
      };

      const updatedTasksData = [...tasksData, updatedTask];
      const response = await axios.patch(
        `http://localhost:3000/tasks`,
        updatedTasksData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Vazifa muvaffaqiyatli qo'shildi:", response.data);
        return response.data;
      }
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

// add employee manager

export async function addDynamicTaskApi(navigate, newTask, id = "") {
  try {
    const urlType = newTask.type === "manager" ? "managers" : "employees";

    const response = await axios.get(`http://localhost:3000/${urlType}/${id}`);

    if (response.status === 200) {
      const existingData = response.data;

      const currentTasks = existingData.tasks || [];
      const newTaskId =
        currentTasks.length > 0
          ? Math.max(...currentTasks.map((task) => task.id)) + 1
          : 1;

      const updatedTask = {
        ...newTask,
        id: newTaskId,
      };

      const updatedData = {
        ...existingData,
        tasks: [...currentTasks, updatedTask],
      };

      const putResponse = await axios.patch(
        `http://localhost:3000/${urlType}/${id}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (putResponse.status === 200) {
        console.log("Vazifa muvaffaqiyatli qo'shildi:", putResponse.data);
        return putResponse.data;
      }
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
    }
    console.error("Xatolik yuz berdi:", error.message);
  }
}

// delete employee
export async function deleteManagerApi(navigate, id) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  if (!id) {
    toast.error("ID kiritilmagan");
    return;
  }

  try {
    const response = await axios.delete(
      `http://localhost:3000/managers/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      toast.success("Manager o'chirildi:", response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response?.status === 403) {
      navigate("/login");
      localStorage.removeItem(userData);
    }
    toast.error("Xatolik yuz berdi:", error.message);
  }
}
