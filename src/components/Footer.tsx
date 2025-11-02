import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandTiktok } from "@tabler/icons-react";
import FlowingMenu from "./FlowingMenu";

export const footerLinks = [
  {
    link: 'https://www.instagram.com/bosbascent',
    text: 'Instagram',
    icon: <IconBrandInstagram className="w-8 h-8" />,
  },
  {
    link: 'https://www.facebook.com/profile.php?id=100087517814138',
    text: 'Facebook',
    icon: <IconBrandFacebook className="w-8 h-8" />,
  },
  {
    link: 'https://t.me/bosbascent',
    text: 'Telegram',
    icon: <IconBrandTelegram className="w-8 h-8" />,
  },
  {
    link: 'https://www.tiktok.com/@bosbascent?is_from_webapp=1&sender_device=pc',
    text: 'TikTok',
    icon: <IconBrandTiktok className="w-8 h-8" />,
  },
];

const Footer = () => {
  return (
    <footer>
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={footerLinks} />
      </div>
    </footer>
  );
};

export default Footer;
