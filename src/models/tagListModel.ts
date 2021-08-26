const localStorageKeyName = 'tagList';


type TagListModel = {
  data: string[],
  save: () => void,
  create: (name: string) => string,
  fetch: () => string[],

}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;

  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));

  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
      alert('已经存在');
      return '';
    }
    this.data.push(name);
    this.save();
    return name;
  }
};

export {tagListModel};

