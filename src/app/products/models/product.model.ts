import { Сategory } from './category.enum';
export class ProductModel {
  constructor(
    public id: number = null,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category?: Сategory,
    public isAvailable?: boolean
  ) {}
}
