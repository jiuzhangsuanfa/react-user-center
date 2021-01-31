import { message } from 'antd';
import * as api from '../api/account';

const base = `/${process.env.PUBLIC_URL ? process.env.PUBLIC_URL + '/' : ''}`;

export function getCaptcha(payload = {}) {
  return async () => {
    const { code, message: content } = await api.getCaptcha(payload);
    if (code === 20020) {
      await message.success(content);
    } else {
      await message.error(content);
    }
  }
}

export function register(payload = {}) {
  return async () => {
    const { code, message: msg } = await api.register(payload);
    if (code === 20023) {
      await message.success(msg);
      window.location.href = base;
    } else {
      await message.error(msg);
      throw new Error('register failed');
    }
  }
}


export function login(payload = {}) {
  return async () => {
    const { code, message: msg, data: { token } = {} } = await api.login(payload);
    if (code === 0) {
      await message.success(msg);
      window.localStorage.setItem('user-center-token', token);
      window.location.href = base;
    } else {
      await message.error(msg);
      throw new Error('register failed');
    }
  }
}
