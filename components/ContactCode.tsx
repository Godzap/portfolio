import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'enzo.baiao1@hotmail.com',
    href: 'mailto:enzo.baiao1@hotmail.com',
  },
  {
    social: 'phone',
    link: '+55 22 99209-2347',
    href: 'tel:+5522992092347',
  },
  {
    social: 'linkedin',
    link: 'enzo-baião',
    href: 'https://www.linkedin.com/in/enzo-bai%C3%A3o-292944227/',
  },
  {
    social: 'github',
    link: 'Godzap',
    href: 'https://github.com/Godzap',
  },
  {
    social: 'location',
    link: 'Rio de Janeiro, Brazil',
    href: 'https://maps.google.com/?q=Rio+de+Janeiro,+Brazil',
  },
  {
    social: 'availability',
    link: 'Remote (Brazil) | Europe/Portugal',
    href: '#',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
