// gatsby-browser.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import Popper from '@popperjs/core';

// Add Font Awesome CDN link
export const onClientEntry = () => {
  const link = document.createElement('link');
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};