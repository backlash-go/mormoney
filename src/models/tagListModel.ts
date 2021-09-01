import createId from '@/lib/createId';

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
  update: (id: string, name: string) => 'success' | 'notFound' | 'duplicated',
  remove: (id: string) => boolean


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
    const id = createId().toString();
    this.data.push({id: id, name: name});
    this.save();
    return name;
  },
  update(id: string, name: string) {
    if (name === '') {
      return 'notFound';
    }
    const idList = this.data.map((item) => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter((item) => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'notFound';
    }

  },
  remove(id: string) {
    const index = this.data.map((item => item.id)).indexOf(id);
    this.data.splice(index, 1);
    this.save();
    return true;

  }

};

export {tagListModel};

