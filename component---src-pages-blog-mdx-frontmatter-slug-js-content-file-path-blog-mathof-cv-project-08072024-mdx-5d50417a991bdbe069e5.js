"use strict";(self.webpackChunkblog_v1=self.webpackChunkblog_v1||[]).push([[398],{577:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return d}});var o=n(8453),a=n(6540);function i(e){const t=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",strong:"strong"},(0,o.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Project Motivation"),"\n",a.createElement(t.p,null,"This project has taken me the longest to complete and is the most in-depth and thorough project I probably will ever complete. It is a compilation of various Computer Vision notes from different angles of learning the subject (EE/CE DIP approach to the CS Deep-Learning approach) to better understand the field. The notes are based on some of the computer vision presentations I made while I was in FIRST Robotics and the lectures I gave at conferences like the Battle O’ Baltimore Conference, but they also include various information/content from other avenues. For example, a section of the notes is centered on Fourier Analysis (which extends more broadly than Computer Vision); that section is based on the content of MATH416, a DSP course offered at UMD. To access the repository, go to ",a.createElement(t.a,{href:"https://github.com/BlueSinkers/Computer-Vision"},"this link"),", and to view a PDF of the notes, ",a.createElement(t.a,{href:"https://abhiramkidambi.com/additionals/CV_Notes_Kidambi_Abhiram.pdf"},"go here"),"."),"\n",a.createElement(t.h1,null,"Purpose and Content"),"\n",a.createElement(t.p,null,"This project contains 60 pages of notes with around 10 various demos showing various concepts in Computer Vision. Note that all the notes in the note-file are mine and should only be used with my permission and the MATH416 Notes belong to Dr. Wojcich Czaja at UMD."),"\n",a.createElement(t.h1,null,"Technical Content"),"\n",a.createElement(t.p,null,"Here is a brief description of some of the topics covered in the notes:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Basic Overview")," - this consists of important mathematical and photography tools/concepts you should know. Note that although PCA and SVD aren't that important in the notes, understanding convolution and the pinhole projection is of tantamount importance. The pinhole projection section in particular is one of the longest sections in the notes and took me a long time to make (since it's the only section with proper \"photos\") -- it becomes very important later down the line."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"DSP/Fourier-Analysis Topics")," - this section is pretty much useless for those solely interested in computer vision. That being said, this includes a bunch of topics about signals processing and transforms -- it will walk through a lot of the information pertaining the Discrete Fourier Transform, the Gabor Transform, the (Discrete) Wavelet Transform, the Discrete Haar Transform, the Laplace and Z Transforms, along with the ideas of Multiresolutional Analysis. This is a condensation of a lot of the material from MATH416, so do note that much of the notes will be in line with the 416 Notes. Note that there are a few demos from this section in the notes."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Image Processing AND Edge Detection")," - this section includes a lot of old-school computer vision topics that aren't really in use today simply because Deep-Learning has taken over. It includes concepts such as Kernels, Gradient Kernels, Laplacian Kernels, Template Matching/Correlation, Canny Edge Detector, the Hough Transform, and SIFT detectors. These are topics that involve certain mathematical ideals that are omitted for sake of understanding -- more information regarding the math can be found online on certain resources. That being said, you can also find a lot of demos which include information in the DIP/Edge-Detection folder. These are two separate chapters."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Image Stitching"),' - this section is why understanding the pinhole projection is important and details the process of taking two images, and performing the homography matrix linear operation in order to "match" the two images to create a single one. It\'s particularly useful in technologies like Google Street View where we want to stitch photos/videos from different angles to make it appear like a 3d-world. The concept of RANSAC (Random Sample Consensus) is introduced along with the ideas of different linear transformations (affine, projection) and homogeneous coordinates which are used significantly in many computer vision research topics.'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Facial Detection and Recognition"),' - this is a very broad topic that focuses on the idea of detecting faces, and then finding ways to recognize them (the latter part is very briefly covered because nowadays this is mostly done through Deep-Learning). Facial Detection is particularly useful in cameras for auto-focusing and auto-adjustment so that the photo can be adjusted to make the faces "look best" and that the focus-plane is matching where the most amount of "faces" are located (concepts that extend from the pinhole projection model taught in section 1). The Viola-Jones algorithm is mentioned along with some other facial recognition algorithms, and the broad focus is the idea of Haar-Cascading and the use of Haar-Features in developing a classifier. This can be loosely summarized as taking some of the content earlier from Haar Wavelets/Transforms and finding ways to create classifiers to detect faces and pinpoint them in an image.'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Deep Learning"),' - this is by far the least dense and explanatory section of the textbook simply because it occurred to me about midway through that most of the content here isn\'t really something you could "teach" in a typical sense since it all revolves around taking Neural Networks and fine-tuning them. Some of the content derives from a textbook which I read, but a lot of the content comes from my own personal research. That being said, for this particular topic, the best way to get into this field is simply by working with models like YOLO. If you would like to see some of my work with YOLO in the past, you can check out these two projects right here:'),"\n"),"\n",a.createElement(t.h1,null,"Further Notes"),"\n",a.createElement(t.p,null,"To learn more about the notes and what specifically is going on in this set of notes, please visit the Github README and the notes themself along with the various demos. If you have any questions about any of the content or things of the sort, please let me know by contacting ",a.createElement(t.a,{href:"mailto:akidamb1@terpmail.umd.edu"},"me here.")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.RP)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},s=n(8715),l=n(7528),c=n(8843);const h=e=>{let{data:t,children:n}=e;return a.createElement(s.A,{pageTitle:t.mdx.frontmatter.title},a.createElement(c.A,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.image,description:n,datew:t.mdx.frontmatter.dateMade,datee:t.mdx.frontmatter.dateEdited,tags:t.mdx.frontmatter.tags}))},m=e=>{let{data:t}=e;return a.createElement(l.A,{title:t.mdx.frontmatter.title})};function d(e){return a.createElement(h,e,a.createElement(r,e))}},8843:function(e,t,n){var o=n(6540);t.A=e=>{let{title:t,image:n,description:a,datew:i,datee:r,tags:s}=e;return o.createElement(o.Fragment,null,o.createElement("div",{className:"container1"},o.createElement("div",{className:"hero",style:{background:`url(${n}) no-repeat center center fixed`,backgroundSize:"cover"}},o.createElement("div",{className:"hero__image"},o.createElement("div",{className:"hero__image--overlay"}),o.createElement("div",{className:"hero__child hero__child--primary animation--floating"}),o.createElement("div",{className:"hero__child hero__child--secondary animation--floating"}),o.createElement("p",{className:"hero__title animation--title-in"},t),o.createElement("p",{className:"hero__subtitle animation--title-in"},"by Abhiram Kidambi")))),o.createElement("div",{className:"section"},a,o.createElement("hr",null),o.createElement("p",{className:"information"},"Author: Abhiram Kidambi ",o.createElement("br",null),"Written: ",i," ",o.createElement("br",null),"Tags: ",s.map((e=>e.toUpperCase())).join(", "))))}},8453:function(e,t,n){n.d(t,{RP:function(){return i}});var o=n(6540);const a=o.createContext({});function i(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-mathof-cv-project-08072024-mdx-5d50417a991bdbe069e5.js.map