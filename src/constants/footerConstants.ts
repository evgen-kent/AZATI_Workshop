import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import Visa from '../assets/icons/Visa.svg';
import MasterCard from '../assets/icons/MasterCard.svg';
import PayPal from '../assets/icons/PayPal.svg';
import ApplePay from '../assets/icons/ApplePay.svg';
import GooglePay from '../assets/icons/GooglePay.svg';

export const footerList = [
  { title: 'Company', list: ['About', 'Features', 'Works', 'Career'] },
  {
    title: 'Help',
    list: [
      'Customer Support',
      'Delivery Details',
      ' Terms & Conditions',
      ' Privacy Policy',
    ],
  },
  {
    title: 'FAQ',
    list: ['Account', ' Manage Deliveries', 'Orders', '  Payments'],
  },
  {
    title: 'Resources',
    list: [
      'Free eBooks',
      'Development Tutorial',
      'How to - Blog',
      ' Youtube Playlist',
    ],
  },
];

export const footerSocials = [
  { icon: FaTwitter },
  { icon: FaFacebookF },
  { icon: FaInstagram },
  { icon: FaGithub },
];

export const footerCredits = [
  { icon: Visa },
  { icon: MasterCard },
  { icon: PayPal },
  { icon: ApplePay },
  { icon: GooglePay },
];
