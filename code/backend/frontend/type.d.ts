interface IProduct {
      [x: string]: any;
 
      _id: number;
      name: string;
      image: string;
      description: string;
      Featured: boolean;
      price: string | number;
      countInStock: number;
      createdAt: string;
      user: number;
      category: number;

}

type ProductState = {
  products?: IProduct[];
  loading?: boolean;
  error?: any;
};

type ProductAction = {
  type: string;
  payload?: IProduct | any;
};

type DispatchType = (args: ProductAction) => ProductAction;
