### Answer questions

1. *For the landing page, do you know how you're able to link the button with, say, a third-party service provider? If you don't know the answer to this one that's fine.*

 Yes, it is possible to add a button. The look and feel of that button can further be customized using **css** depending on your preferences.

2. *For the 404 page, is it okay to add a button below the text which redirects to a page I assign it to?*

 Yes. Same as in case (1)

### Notes
The landing page has a special variable

```yaml
landing-page: true
```
The title permalink for the landing page are provisional. Feel free to edit them. See the front matter on the *landing.html* file.

```
layout: page
landing-page: true # hides header and footer
title: Landing Page
permalink: /landing/
special: true # exclude link from menu
```

Please note that the home page and landing page have almost the same contents. This content can be altered to match what you want to communicate on each. That content is only provisional

You can choose to have a:

1. Static home page with your tailored
2. Blog  archives page as your home page. In this case, you would rename the *blog.html* file to *index.html*.

The 404 and landing page have a special variable that excludes them from being listed on the menu

```yaml
special: true
```

### Customize styles

The theme color of the site can be altered inside the **_sass/variables.scss** file.

### icons

We'll be using fontawesome icons. Want to add more? [Learn how to use here](https://fontawesome.com/how-to-use)

> look into the *Markdown sample* article in the blog page. It has some good insights on how to write articles

### Steps to build your own website

## 0. Pre-requisites

# Required
Domain name - Namecheap
Github
Jekyll
Amazon S3
Amazon Cloudformation
Travis and Travis-CI
Cloudflare

# Nice to haves
Github Desktop
Atom (from Github)
Google Analytics
Facebook Pixels
Disqus

## 1. Build a website locally.

## 2. Deploy the website onto the server.
Need the cloudformation.yml file
Delete Gemfile.lock and bundle install and bundle update


## 3. Test changes to the website before deploying.


## buttons
There are three types of buttons
1. A green button. Uses a class of *button*
2. A grey button. Uses a class of *button__light*
3. A button with a simple border radius. Uses a class of *button__simple*

> You can combine these classes to achieve a certain effect. See the following example

```html
  <!-- a green button with a full round border radius -->
  <a href = '' class = 'button'>I'm Green</a>
  <!-- a green button with a subtle border radius -->
  <a href = '' class = 'button button__simple'>Get Started</a>
  <!-- a grey button with a subtle border radius -->
  <a href = '' class = 'button__light button__simple'>Learn More</a>
```
Some of this code is in the *_layouts/welcome.html* template

