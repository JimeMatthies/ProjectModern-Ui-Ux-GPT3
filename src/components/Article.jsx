import React from "react";
import PropTypes from "prop-types";
import "../styles/Article.css"

const Article = ({ imgUrl, date, text }) => (
    <div className="gpt3__blog-container__article">
        <div className="gpt3__blog-container__article-image">
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="gpt3__blog-container__article-content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
);

Article.propTypes = {
    imgUrl: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Article;