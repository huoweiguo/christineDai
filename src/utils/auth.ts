// 示例使用
const HomeKey = 'myHomeKey';

// 缓存对象到localStorage
function cacheObject(key:string, object:object) {
  localStorage.setItem(key, JSON.stringify(object));
}
 
// 从localStorage读取缓存的对象
function getCachedObject(key:string) {
  const objectString = localStorage.getItem(key);
  if (objectString) {
    return JSON.parse(objectString);
  }
  return null;
}

export {
  HomeKey,
  cacheObject,
  getCachedObject
}