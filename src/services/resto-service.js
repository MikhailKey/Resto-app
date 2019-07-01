export default class RestoService {
  _apiBase = 'http://localhost:3000';  
  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, error: ${res.status}`);
    }
    return await res.json();
  }
  
  getMenuItems = async () => {
     return await this.getResourse('/menu/')
     
    }
  } 