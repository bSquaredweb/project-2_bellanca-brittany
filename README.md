# Project 2 - Paperless Planner

#### Link to repository
[Paperless Planner on GitHub]()

#### Link to website
[Paperless Planner on the Web]()

#### Instructions on how to view
1. `git clone` the repository to view it locally.
2. Use `sass --watch sass:css --style compressed` to get sass started.

---
## Project 2 - Part 5

#### Resources


  ##### Plugins


#### Deductions


#### Comments
- I think I'm getting pretty close to finishing things up! I have a few more questions that I'll ask during class tomorrow!


- What I still have left to do
  - Add a lightweight smooth scroll Plugin or other jQuery plugin
  - Check over requirements
  - Check over code for DRY, spacing, etc.
  - **Extra idea / stretch goal**: Adjust my custom jQuery so that when user clicks on the circle again, the text box goes away.





  # Project 2 - Application Name Here

#### Link to repository
[Github Link](https://github.com/bSquaredweb/project-2_bellanca-brittany)

#### Link to website
[Website Link](http://brittanybellanca.com/advweb2/project2/)
<!-- Edit this for Project 2 - Part 3 -->

#### Link to W3C's Validator
[W3C Validator Link]()

#### Link to HTML5 Outliner
[HTML5 Outliner]()

#### Instructions on how to view
1. `git clone` the repository to view it locally.
2. Use `sass --watch sass:css --style compressed` to get sass started.

---

#### Resources
- [CSS-Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - I am referring to this site for help with Flexbox.
- [CSS-Tricks Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - This site really is awesome. It helped me understand how to set up my CSS Grid.
- [CSS-Tricks SVG](https://css-tricks.com/using-svg/)
  - I learned that I could look at Illustrator and get the code for SVGs! Neat!
- [CSS-Tricks When to Use Button Elements](https://css-tricks.com/use-button-element/)
  - So, when I was validating my code, it said that an `<a>` could not be a child of a `<button>` and vice versa, so I went searching and found this article. It says that we should only use `<button>` inside of `<form>`, so I changed my `<button>` back to `<div>`.
- [W3Schools - Modals](https://www.w3schools.com/howto/howto_css_modals.asp)
  - This site walked me through coding a modal beyond what we did in class (grayed out background, popup look / positioning).
- [W3Schools - `attr()` Method](https://www.w3schools.com/jquery/html_attr.asp)
  - I needed help with understanding how to set `disabled` in the `attr()` method.
- [Grid by Example](https://gridbyexample.com/learn/2016/12/20/learning-grid-day20/)
  - This video helped me understand how I could set content to overlap with CSS Grid.
[Bubbly](https://leaverou.github.io/bubbly/): This site is a quick helper for making the little arrows to give a rounded rectangle the "speech bubble" look.

##### Custom jQuery
- On the large size, desktop version of the "Perks" section of the homepage, users can click on the circles with icons to reveal text through CSS changes.
- On the contact form, the submit button is initially disabled, then when the user completes the fields, the submit button will activate. Also, if the reset button is clicked, the submit button will become disabled again, since the fields are empty again.

##### Custom javaScript
- The modal is coded with event listeners that are listening for a click on either the login button or the login link in the footer. Additionally, it is listening for a click on the close icon, and, then, the modal will close.

##### Plugin 1
- [Drawer jQuery Plugin](https://github.com/blivesta/drawer/)
  - A neat plugin for a fairly flexible hamburger navigation that lives in the upper right hand corner of each of my three major pages on the **mobile and medium** sizes.
  - [Dependent Plugin: iScroll](https://github.com/cubiq/iscroll#configuring-the-iscroll)
    - The Drawer documentation says the Drawer is dependent on iScroll, so iScroll is included as well, but is _only_ used to support Drawer.

##### Plugin 2
- [ScrollReveal (a JS plugin)](https://scrollrevealjs.org/)
  - This plugin is used on the Homepage on actual **mobile** devices (I do have it turned off on desktop devices). On the hompage, it makes the five "bubbles" appear next to their icons under the "Perks" section as the user scrolls on their mobile device.

#### Deductions
> I reviewed the list of deductions for this project and in the syllabus.

#### Comments
