export interface Product {
  id: string;
  name: string;
  price: number;
  promoPrice?: number;
  stock: number;
  image: string;
}

export const productsData: Product[] = [
  {
    id: "1",
    name: "Chave de Torque Digital Topeak D-Torq",
    price: 1290.00,
    promoPrice: 990.00,
    stock: 3,
    image: "/utils/placeholder.svg"
  },
  {
    id: "2",
    name: "Bomba de Suspensão de Alta Pressão Rockshox 600 PSI",
    price: 380.00,
    stock: 5,
    image: "/utils/placeholder.svg"
  },
  {
    id: "3",
    name: "Fluido de Suspensão Maxima Plush 3WT 1L",
    price: 220.00,
    promoPrice: 189.90,
    stock: 12,
    image: "/utils/placeholder.svg"
  },
  {
    id: "4",
    name: "Gancheira de Câmbio de Alumínio CNC Universal SRAM UDH",
    price: 150.00,
    stock: 15,
    image: "/utils/placeholder.svg"
  },
  {
    id: "5",
    name: "Canote Retrátil Fox Transfer Factory 31.6mm Kashima",
    price: 3890.00,
    promoPrice: 3490.00,
    stock: 2,
    image: "/utils/placeholder.svg"
  },
  {
    id: "6",
    name: "Kit Sangria de Freios Shimano Original com Funil e Óleo Mineral",
    price: 290.00,
    stock: 8,
    image: "/utils/placeholder.svg"
  },
  {
    id: "7",
    name: "Graxa de Rolamentos Especializada Motorex Bike Grease 2000",
    price: 95.00,
    stock: 20,
    image: "/utils/placeholder.svg"
  },
  {
    id: "8",
    name: "Kit de Retentores e Vedação Fox Float 32mm Original",
    price: 280.00,
    promoPrice: 249.00,
    stock: 6,
    image: "/utils/placeholder.svg"
  }
];
