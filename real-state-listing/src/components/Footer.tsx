const Footer = () => {
  return (
    <footer className="bg-light-gray py-8 mt-10 w-full">
      <div className="container mx-auto text-center  text-dark-blue">
        <p>&copy; {new Date().getFullYear()} Real State. All rights reserved.</p>
        <p>Made with ❤️ by Tiago Esdras.</p>
      </div>
    </footer>
  );
};

export default Footer;