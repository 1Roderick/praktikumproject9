class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  /** REVIEW: Отлично:
   * 
   * Код разбора ответа вынесен в отдельный метод, отлично!
   */
  getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    /** REVIEW: Можно лучше:
     * 
     * return Promise.reject(new Error(`Ошибка: ${res.status}`));
     */
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInformation() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    })
      .then(res => {
        return this.getResponseData(res);
      })
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then(res => {
        return this.getResponseData(res);
      })
  }

  serverUpdateUserInfo(newName, newJob) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: newName,
        about: newJob
      })
    })
      .then(res => {
        return this.getResponseData(res);
      })
  }
}

