export default class UserInfo {
  constructor(nameSelector, jobSelector, avatar) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }

  setUserAvatar({ link }) {
    this._avatarElement.src = link;
  }
}
