export const address = "https://norma.nomoreparties.space/api/ingredients";
export const postAddress = "https://norma.nomoreparties.space/api/orders";
export const postEmailAddress =
  "https://norma.nomoreparties.space/api/password-reset";
export const resetPasswordAddress =
  "https://norma.nomoreparties.space/api/password-reset/reset";
export const registerAddress =
  "https://norma.nomoreparties.space/api/auth/register";
export const authAddress = "https://norma.nomoreparties.space/api/auth/login";
export const logoutAddress =
  "https://norma.nomoreparties.space/api/auth/logout";
export const updateCookieAddress =
  "https://norma.nomoreparties.space/api/auth/token";
export const getUserAddress = "https://norma.nomoreparties.space/api/auth/user";

export function setCookie(
  name: string,
  value: string,
  props: { [key: string]: any } & { expires?: number | Date | string } = {}
) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && (exp as Date).toUTCString) {
    props.expires = (exp as Date).toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
  console.log("Печенька запечена");
}

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const deleteCookie = (name: string) => {
  setCookie(name, "", { expires: -1, path: "/" });
};

export function checkToken() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [name, value] = cookie.split("=");
    if (name === "token") {
      return true;
    }
  }
  return false;
}
