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
}

export default APIService;
