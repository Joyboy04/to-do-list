const Footer = () => {
  return (
    <footer className="footer-container">
      <p>If You Need</p>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background: var(--accents-2);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
