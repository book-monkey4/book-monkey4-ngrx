export function book(i: number) {
  return {
    isbn: 'isbn' + i,
    title: 'title' + i,
    authors: [],
    published: new Date()
  };
}
