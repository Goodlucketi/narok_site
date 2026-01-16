const Footer = () => {
return (
        <footer className="bg-navy text-blue py-10 px-6 mt-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                <div>
                    <h3 className="font-bold text-xl mb-3">Narok Electrical Services</h3>
                    <p className="opacity-80">
                    Bringing Technology to Reality…
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Contact</h4>
                    <p>Email: Narokelectrical@gmail.com</p>
                    <p>Phone: 08137180348</p>
                    <p>Address: 34 Uyo Road, Nung Udoe, Ibesikpo Asutan, Akwa Ibom</p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                    <p>Facebook: Narok Electrical Services</p>
                </div>
            </div>
            <p className="text-center text-sm opacity-70 mt-10">© 2025 Narok Electrical Services. All Rights Reserved.</p>
        </footer>
    );
};
export default Footer;