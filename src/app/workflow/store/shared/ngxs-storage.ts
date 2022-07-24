import {
  NgxsStoragePluginModule,
  StorageEngine,
  STORAGE_ENGINE,
} from '@ngxs/storage-plugin';

export class NgXSStorageEngine implements StorageEngine {
  get length(): number {
    // Your logic here
    return localStorage.length;
  }

  getItem(key: string): any {
    // Your logic here
    return localStorage.getItem(key);
  }

  setItem(key: string, val: any): void {
    // Your logic here
    localStorage.setItem(key, val);
  }

  removeItem(key: string): void {
    // Your logic here
    localStorage.removeItem(key);
  }

  clear(): void {
    // Your logic here
    localStorage.clear();
  }
}
