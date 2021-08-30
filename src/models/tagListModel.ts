const localStorageKeyName = 'tagList';


type Tag = {
  id: string,
  name: string
}

type TagListModel = {
  data: Tag[],
  save: () => void,
  create: (name: string) => string,
  fetch: () => Tag[],

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
    const names = this.data.map((item) => item.name);
    if (names.indexOf(name) >= 0) {
      alert('已经存在');
      return '';
    }
    this.data.push({id: name, name: name});
    this.save();
    return name;
  }
};

export {tagListModel};

