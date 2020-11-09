import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetaDataKeys';

export const router = AppRouter.getInstance();

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetaDataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetaDataKeys.method, target.prototype, key);

      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
