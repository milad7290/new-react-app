export class Cookie {
  static getProcessedCookies() {
    return document.cookie.split(';').reduce((obj, next) => {
      const [key, value] = next.split('=');

      return { ...obj, ...{ [key.trim()]: value } };
    }, {});
  }

  static getValueByName({ name }) {
    const cookies = Cookie.getProcessedCookies();

    return { value: cookies[name] };
  }

  static removeByName({ name }) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
  }

  static setValueInCookie({ key, value }) {
    document.cookie = `${key}=${value}; path=/`;
  }
}
