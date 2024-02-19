const baseUrl = "http://localhost:3000";

class APIService {
  userId: string;
  constructor({ userId }: { userId: string }) {
    this.userId = userId;
  }

  async getUserInfo() {
    const response = await fetch(baseUrl + "/user/" + this.userId);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async getUserActivity() {
    const response = await fetch(
      baseUrl + "/user/" + this.userId + "/activity"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async getUserAverageSessions() {
    const response = await fetch(
      baseUrl + "/user/" + this.userId + "/average-sessions"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async getUserAveragePerformance() {
    const response = await fetch(
      baseUrl + "/user/" + this.userId + "/performance"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

export default APIService;
