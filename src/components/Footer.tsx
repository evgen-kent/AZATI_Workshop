import { useId } from 'react';
import {
  footerCredits,
  footerList,
  footerSocials,
} from '../constants/Footer.ts';
import style from '../styles/Footer.module.scss';
import InputBar from './InputBar.tsx';
import { TfiEmail } from 'react-icons/tfi';
import { Button } from '@mui/material';

const Footer = (): JSX.Element => {
  const id = useId();
  return (
    <div className={style.wrapper}>
      <div className={style.form}>
        <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'baseline',
            justifyContent: 'center',
          }}
        >
          <InputBar
            Icon={TfiEmail}
            placeholder="Enter your email address"
            backgroundColor="#ffffff"
            width="355px"
          />
          <Button
            className={style.button_subscribe}
            sx={{
              fontSize: '16px',
              borderRadius: '50px',
              marginTop: '20px',
              backgroundColor: 'white',
              color: 'black',
              textTransform: 'none',
              fontFamily: 'Satoshi-Medium',
              padding: '20px 90px',
            }}
            variant="contained"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.list_row}>
          <div className={style.list_block}>
            <h3>shop.co</h3>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className={style.socials_icons}>
              {footerSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={id}>
                    <Icon />
                  </li>
                );
              })}
            </ul>
          </div>
          {footerList.map((item) => (
            <div key={id} className={style.list_block}>
              <h3 className={style.list_h3}>{item.title}</h3>
              <ul className={style.list_links}>
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={style.copy}>
          <p>© 2000-2021, All rights reserved</p>
          <ul>
            {footerCredits.map((social) => {
              return (
                <li key={id}>
                  <img src={social.icon} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
