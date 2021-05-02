import { styleChangeLock } from '../stores/globalState';

export const cbDefault = 'cubicBezier(0.37, 0, 0.63, 1)';
// export const eaElasticDefault = 'spring(0.7, 80, 10, 3)';
export const eaElasticDefault = 'easeOutElastic(1, 1)';

export function lockApp() {
    styleChangeLock.set(true);
    setTimeout(() => styleChangeLock.set(false), 350);       
}