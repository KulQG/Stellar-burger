export const address = 'https://norma.nomoreparties.space/api/ingredients'

export const GET_FEED = 'GET_FEED'
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS'
export const GET_FEED_FAILED = 'GET_FEED_FAILED'

export const postAddress = 'https://norma.nomoreparties.space/api/orders'

export const GET_ORDER = 'GET_ORDER'
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'

export const postEmailAddress = 'https://norma.nomoreparties.space/api/password-reset'
export const resetPasswordAddress = 'https://norma.nomoreparties.space/api/password-reset/reset'
export const registerAddress = 'https://norma.nomoreparties.space/api/auth/register'
export const authAddress = 'https://norma.nomoreparties.space/api/auth/login'
export const logoutAddress = 'https://norma.nomoreparties.space/api/auth/logout'
export const updateCookieAddress = 'https://norma.nomoreparties.space/api/auth/token'
export const getUserAddress = 'https://norma.nomoreparties.space/api/auth/user'

export function setCookie(name, value, props) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
    console.log(`печенька запечена: ${updatedCookie}`)
}

export function getCookie(name) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const deleteCookie = (name) => {
    setCookie(name, null, { expires: -1 });
}