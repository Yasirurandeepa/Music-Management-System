export class Hall {
  h_no: string;
  size: string;
  description: string;

  constructor() {}

  setHallDetail(size, description) {
    this.size = size;
    this.description = description;
  }
  setHallID(id) {
    this.h_no = id;
  }
  getHallID() {
    return this.h_no;
  }
}

