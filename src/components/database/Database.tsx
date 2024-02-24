export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
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
  tax:number;
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
    tax:0,
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
    tax:5,
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
    tax:8,
  },
  {
    id: 4,
    category: 'product',
    productName: 'boAt Rockerz 450 Bluetooth Headphone',
    productPrice: 5000,
    description:
      'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
    isOff: false,
    productImage: require('../database/images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/boat1.png'),
      require('../database/images/products/boat2.png'),
      require('../database/images/products/boat3.png'),
    ],
    tax:5,
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'boAt Airdopes 441',
    productPrice: 8000,
    description:
      'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
    isOff: true,
    offPercentage: 5,
    productImage: require('../database/images/accessories/boatairpods1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boatairpods1.png'),
      require('../database/images/accessories/boatairpods2.png'),
      require('../database/images/accessories/boatairpods3.png'),
    ],
    tax:0,
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'boAt Bassheads 242',
    productPrice: 500,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
    productImage: require('../database/images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boatbassheads1.png'),
      require('../database/images/accessories/boatbassheads2.png'),
      require('../database/images/accessories/boatbassheads3.png'),
    ],
    tax:10,
  },
  {
    id: 7,
    category: 'accessory',
    productName: 'boAt Rockerz 255 Pro+',
    productPrice: 4000,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('../database/images/accessories/boatrockerz1.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/accessories/boatrockerz1.png'),
      require('../database/images/accessories/boatrockerz2.png'),
      require('../database/images/accessories/boatrockerz3.png'),
    ],
    tax:5,
  },
  {
    id: 8,
    category: 'accessory',
    productName: 'Boult Audio AirBass Propods TWS',
    productPrice: 15000,
    offPercentage: 5,
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: true,
    productImage: require('../database/images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/boultairbass1.png'),
      require('../database/images/accessories/boultairbass2.png'),
      require('../database/images/accessories/boultairbass3.png'),
    ],
    tax:0,
  },
];
