//ProductModel sınıfında constructor'da fieldları tanımlamadan model tanımı yapmak için
//tsconfig.json dosyasında "strict" alanını false değerine çekmemiz gerekir.
export class ProductModel {
  name: String;
  year: number;
  date: Date;
  bool: boolean;
}
