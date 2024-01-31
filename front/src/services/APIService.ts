const baseUrl = "http://localhost:3000";

class APIService {
  userId: string;
  constructor({ userId }: { userId: string }) {
    this.userId = userId;
  }

  async getUserInfo() {
    const response = await fetch(baseUrl + "/user/" + this.userId);
    return await response.json();
  }
  async getUserActivity() {
    const response = await fetch(
      baseUrl + "/user/" + this.userId + "/activity"
    );
    return await response.json();
  }
  async getUserAverageSessions() {
    const response = await fetch(
      baseUrl + "/user/" + this.userId + "/average-sessions"
    );
    return await response.json();
  }
  async getUserAveragePerformance() {
    const response = await fetch(
      baseUrl + "/user/" + this.userId + "/performance"
    );
    return await response.json();
  }
  /*
  static async post(userId: string, body: any) {
    const response = await fetch(baseUrl + "/user/" + userId, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.json();
  }

  static async put(url: string, body: any) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.json();
  }

  static async delete(url: string) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return await response.json();
  }
  */
}

export default APIService;
