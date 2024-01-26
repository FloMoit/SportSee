const baseUrl = "http://localhost:3000";

class APIService {
  static async getUserInfo(userId: number) {
    const response = await fetch(baseUrl + "/user/" + userId);
    return await response.json();
  }
  static async getUserActivity(userId: number) {
    const response = await fetch(baseUrl + "/user/" + userId + "/activity");
    return await response.json();
  }
  static async getUserAverageSessions(userId: number) {
    const response = await fetch(
      baseUrl + "/user/" + userId + "/average-sessions"
    );
    return await response.json();
  }
  static async getUserAveragePerformance(userId: number) {
    const response = await fetch(baseUrl + "/user/" + userId + "/performance");
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
