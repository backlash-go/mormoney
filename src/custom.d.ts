type RecordItem = {
  tags: string[],
  type: string,
  amount: number,
  notes: string,
  createdAt?: Date
}


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


interface Window {
  tagList: Tag[],
  createTag: (name: string) => void
}
