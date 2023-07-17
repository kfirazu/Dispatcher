export const localStorageService = {
    loadFromStorage,
    saveToStorage,
    clearStorage,
    removeItem,
  };

function loadFromStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
  
  function saveToStorage(key: string, val: string) {
    if (!localStorage.getItem(key)) {
      localStorage[key] = JSON.stringify([]);
    }
    let searches: string[] = JSON.parse(localStorage.getItem(key) as string);
    searches.push(val);
    localStorage.setItem(key, JSON.stringify(searches));
  }
  
  function clearStorage(key: string) {
    localStorage.removeItem(key);
  }
  
  function removeItem(key: string, itemToRemove: string) {
    let oldItemList = loadFromStorage(key);
    const updatedItemList = oldItemList.filter(
      (item: string) => item !== itemToRemove
    );
    localStorage.setItem(key, JSON.stringify(updatedItemList));
  }
  
