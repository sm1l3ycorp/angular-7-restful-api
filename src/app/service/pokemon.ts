export class Pokemon {

    public id: number;
    public num: number;
    public name: string;
    public type: string;
    public height: number;
    public weight: number;
    public weaknesses: string;

    constructor(id: number, num: number, name: string, type: string, height: number, weight: number, weaknesses: string) {
      this.id = id;
      this.num = num;
      this.name = name;
      this.type = type;
      this.height = height;
      this.weight = weight;
      this.weaknesses = weaknesses;
    }
  }
