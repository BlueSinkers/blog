// ArticleCard.js
import React from 'react';
import './blogcard.css'; // Import the specific CSS for this component

function timeAgo(inputDate) {
    // Parse the input date
    const input = new Date(inputDate);
    const now = new Date();
    
    // Calculate the difference in milliseconds
    const diff = now - input;
    
    // Convert milliseconds to days, months, and years
    const msPerDay = 86400000; // Number of milliseconds in a day
    const msPerMonth = 2592000000; // Approximate number of milliseconds in a month (30 days)
    const msPerYear = 31536000000; // Number of milliseconds in a year
    
    const days = Math.floor(diff / msPerDay);
    const months = Math.floor(diff / msPerMonth);
    const years = Math.floor(diff / msPerYear);
    
    if (days < 1) {
        return "Today";
    } else if (days < 2) {
        return "Yesterday";
    } else if (days < 7) {
        return `${Math.floor(days)}d ago`;
    } else if (days < 30) {
        return `${Math.ceil(days / 7)}w ago`;
    } else if (days < 365) {
        return `${months}mo ago`;
    } else {
        return `${years}y ago`;
    }
}


const BlogCard = ({ imgSrc, tag, title, description, userImg, userName, date }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={imgSrc} alt="article" className="card-image" />
            </div>
            <div className="card-body">
                <span className={`tag tag-${tag}`}>{tag}</span>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="user">
                    <img src={userImg} alt="user" />
                    <div className="user-info">
                        <h5>{userName}</h5>
                        <small>{timeAgo(date)}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;