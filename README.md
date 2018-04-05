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
