# smoothScrollingJS
Simple script to add a smooth scrolling to your site wrote in vanilla JavaScript.

## Getting Started
Just download and add to your site like normal JS script.
For example:
```
<script src="./yourFolderWithJS/script.js" type="text/javascript"></script>
```
Of course there is no problem with renaming this file.

###How to use
Add class="js-nav" to parent of elements you want to run this script when clicked. You can have many menus if you want, but every of them need to have class="js-nav". Links must be in 'href' of element 'a' and point to id located on site.
For example:
```
<ul class="js-nav">
	<li><a href="#home">Home</a></li>
	<li><a href="#about">About me</a></li>
	<li><a href="#contact">Contact me</a></li>
</ul>
<header id="home"></header>
<section id="about"></section>
<section id="contact"></section>
```
## About
That`s first version of script so it could work not exactly predictable, but I`m working omn it, so be prepared for next versions with brand new bugs.

##License
It`s free to use and to change whatever you want.