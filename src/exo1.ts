import axios from "axios";

interface User {
  name: string;
  username: string;
  email: string;
}

export async function getUserSummary(userId: number): Promise<string> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.data) {
      throw new Error("User not found");
    }

    const userData: User = response.data;
    const userSummary = `${userData.name} (${userData.username}) - ${userData.email}`;
    return userSummary;
  } catch (error) {
    throw new Error("User not found");
  }
}
