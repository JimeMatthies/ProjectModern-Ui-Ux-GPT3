import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footer }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="footer col-lg-12 text-center pt-3 fixed-bottom text-white">
                    <p>Copyright &copy; {footer.text} </p>
                </div>
            </div>
        </div>
    );
}

Footer.propTypes = {
    footer: PropTypes.object.isRequired,
};

export default Footer;
