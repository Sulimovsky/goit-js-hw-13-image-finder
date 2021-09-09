export default class apiService {
  constructor() {
    this.searchQuery = '';
    this.key = '20328983-97c171d0912a39316d7306b5c';
    this.page = 1;
  }

  async fetchApiService() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`;

    return await fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      })
      .catch(err => console.log(err))
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
