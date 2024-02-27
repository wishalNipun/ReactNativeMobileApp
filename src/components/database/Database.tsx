export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#2D4F8F',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
  light: '#F3F4FB',
  darkBlue: '#7978B5',
 
};

export interface Item {
  id: number;
  category: string;
  productName: string;
  productPrice: number;
  description: string;
  isOff: boolean;
  offPercentage?: number;
  productImage: any;
  isAvailable: boolean;
  productImageList: any[];
  tax: number;
}
export const Items: Item[] = [
  {
    id: 1,
    category: 'product',
    productName: 'New Men Wallet Thin Slim Business Purse Luxury Brand',
    productPrice: 2000,
    description:
      'Interior Slot Pocket,Cell Phone Pocket,Interior Compartment,Coin Pocket,Note Compartment,Photo Holder,Card Holder | Lining Material | Polyester',
    isOff: false,
    offPercentage: 0,
    productImage: require('../database/images/products/WALLET-Brand1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/WALLET-Brand1.png'),
      require('../database/images/products/WALLET-Brand2.png'),
      require('../database/images/products/WALLET-Brand3.png'),
    ],
    tax: 0,
  },
  {
    id: 2,
    category: 'product',
    productName: 'Samsung Washing Machine 13 kg-WA13CG5745BV',
    productPrice: 190000,
    description:
      'Type Fully Automatic Inverter Digital Inverter Capacity 13kg Spin Speed (RPM) 700 RPM No Of Tubs 1 Loading Type Top Loading Display | Panel LED Display Special Features Eco Bubble | BubbleStorm™ | Speed Spray™ Programs |Functions 9 Programs Timer Yes Internal Light No Suitable For Domestic Child Lock Yes Energy Saving Modes Yes Eco Mode Yes Voltage | Weight 40 kg Colors Black Caviar',
    isOff: true,
    offPercentage: 20,
    productImage: require('../database/images/products/washmachine1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/washmachine1.png'),
      require('../database/images/products/washmachine2.png'),
      require('../database/images/products/washmachine3.png'),
    ],
    tax: 5,
  },
  {
    id: 3,
    category: 'product',
    productName: 'Acoustic Box Guitar with Bag Pick 2 year Warranty Standard',
    productPrice: 16000,
    description:
      'Type: Acoustic | Guitar Body Material: Bass Wood | Arm: Mahogany |Fret Board: Maple | Back/ Sides: Basswood | Cutaway: Yes | Rosette: 3 Ring Decal | Binding: Black Plastic | Fingerboard Inlay: Pearl Dots Tuning | Finishing: High Gloss',
    isOff: false,
    offPercentage: 0,
    productImage: require('../database/images/products/guitar1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/guitar1.png'),
      require('../database/images/products/guitar2.png'),
      require('../database/images/products/guitar3.png'),
    ],
    tax: 8,
  },
  {
    id: 4,
    category: 'product',
    productName: 'Wireless Bluetooth Headphone',
    productPrice: 5000,
    description:
      'Wireless Headphone Noise Cancelling Headset with Microphone,Mute Button,25 Hrs Playtime, 20 Hrs Talking,for Travel, Home Learning,Office Meeting.',
    isOff: false,
    productImage: require('../database/images/products/headset1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/headset1.png'),
      require('../database/images/products/headset2.png'),
      require('../database/images/products/headset3.png'),
    ],
    tax: 5,
  },
  {
    id: 5,
    category: 'accessory',
    productName:
      'Vnox Mens Stainless Steel 8MM Link Chain Miami Cuban Bracelets',
    productPrice: 1000,
    description:
      'Model Number : VNOX-BR-1319S-21.5 | Compatibility: All Compatible | Function : Trendy | Chain Type : Link Chain | Shapepattern : Round',
    isOff: true,
    offPercentage: 5,
    productImage: require('../database/images/accessories/braselet1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/braselet1.png'),
      require('../database/images/accessories/braselet2.png'),
      require('../database/images/accessories/braselet3.png'),
    ],
    tax: 0,
  },
  {
    id: 6,
    category: 'accessory',
    productName:
      'Huitan Stylish Lady Timeless Finger Ring for Wedding Ceremony',
    productPrice: 550,
    description:
      'BRAND: HUITAN | MODEL NUMBER: Q411 | Material: Brass, Cubic Zirconia | WEIGHT: About 4.9g | CONDITION: 100% Brand-new excellent craft.',
    isOff: false,
    productImage: require('../database/images/accessories/ring1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/ring1.png'),
      require('../database/images/accessories/ring2.png'),
      require('../database/images/accessories/ring3.png'),
    ],
    tax: 10,
  },
  {
    id: 7,
    category: 'accessory',
    productName: 'Magnetic Car Phone Holder Support GPS Stand',
    productPrice: 2000,
    description:
      'Phone Holder Support GPS Stand For iPhone 14 13 Promax Xiaomi Samsung Compatible iPhone Model iPhone 3G/3GS,iPhone 4,iPhone 4S,iphone 5,iPhone12 Pro Max',
    isOff: false,
    productImage: require('../database/images/accessories/phonemount1.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/accessories/phonemount1.png'),
      require('../database/images/accessories/phonemount2.png'),
      require('../database/images/accessories/phonemount3.png'),
    ],
    tax: 5,
  },
  {
    id: 8,
    category: 'accessory',
    productName:
      'Kitchen Accessories Scissors Multi Function Tool Food Scissor For Chicken',
    productPrice: 4500,
    offPercentage: 10,
    description:
      'Heavy duty kitchen scissors are made of high-quality stainless steel blades and aluminum alloy handles, which increase a certain thickness, make them comfortable to hold, and are sharper and stronger',
    isOff: true,
    productImage: require('../database/images/accessories/scissor1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/scissor1.png'),
      require('../database/images/accessories/scissor2.png'),
      require('../database/images/accessories/scissor3.png'),
    ],
    tax: 0,
  },
];
