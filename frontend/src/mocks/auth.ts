import type { User } from 'src/models/user';
import { randomId } from 'src/utils/randomId';
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/jwt';
import { wait } from 'src/utils/wait';

const users = [
  {
    id: '1',
    avatar: '/static/images/avatars/3.jpg',
    location: 'San Francisco, USA',
    username: 'admin',
    email: 'demo@example.com',
    name: 'Rachael Simons',
    jobtitle: 'Lead Developer',
    password: 'TokyoPass1@',
    role: 'admin',
    posts: '27',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    followers: '6513',
    description: 'Curabitur at ipsum ac tellus semper interdum.'
  }
];

class AuthApi {
  async login({ email, password }): Promise<string> {
    await wait(500);

    return new Promise((resolve, reject) => {
      try {
        const user = users.find((_user) => _user.email === email);

        if (!user || user.password !== password) {
          reject(new Error('Email and password combination does not match'));
          return;
        }

        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN
        });

        resolve(accessToken);
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async register({ email, name, password }): Promise<string> {
    await wait(1000);

    return new Promise((resolve, reject) => {
      try {
        let user = users.find((_user) => _user.email === email);

        if (user) {
          reject(new Error('Email address is already in use'));
          return;
        }

        user = {
          id: randomId(),
          avatar: null,
          jobtitle: 'Lead Developer',
          email,
          username: null,
          name,
          password,
          location: null,
          role: 'admin',
          posts: null,
          coverImg: null,
          followers: null,
          description: null
        };

        users.push(user);

        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN
        });

        resolve(accessToken);
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  me(accessToken): Promise<User> {
    return new Promise((resolve, reject) => {
      try {
        const { userId } = decode(accessToken) as any;

        const user = users.find((_user) => _user.id === userId);

        if (!user) {
          reject(new Error('Invalid authorization token'));
          return;
        }

        resolve({
          id: user.id,
          avatar: user.avatar,
          jobtitle: user.jobtitle,
          email: user.email,
          name: user.name,
          location: user.location,
          username: user.username,
          role: user.role,
          posts: user.posts,
          coverImg: user.coverImg,
          followers: user.followers,
          description: user.description
        });
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
