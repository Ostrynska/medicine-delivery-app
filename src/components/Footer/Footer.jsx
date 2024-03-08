import { FooterWrapp } from './Footer.styled';

function Footer() {
 return (
  <FooterWrapp>
   <p>
    © <strong>Ostrynska Kateryna🇺🇦</strong> {new Date().getFullYear()}. All
    rights are reserved{' '}
   </p>
  </FooterWrapp>
 );
}

export default Footer;
