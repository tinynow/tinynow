- They can be SVG now ([not in Safari yet](https://caniuse.com/link-icon-svg)). 
- There are fewer formats you need to support. 
- You need to add them to the web manifest if you want people to be able to add your website icon to their mobile device like a regular app. 
- They can be "adaptive" and support dark and light modes.

# Choosing colors
Color is a rabbit hole. CSS Color alone is a rabbit hole. Thinking about color spaces and things is not what I am going to do in this project. But, in choosing the colors of my favicon, I think I need to build my color scheme on the wild colors I picked. Orange. Purplish Blue. Blueish Purple

# Hand coding SVGs
![[can-and-cloud-16x16 1.svg]]
I spent a little time working on the SVG of the Can and the Cloud. Part of the path that outlined the cloud was creating an slightly sharp angle. TK images
This is absolutely not the way. I randomly changed values of the `d` attribute to smooth out the curve. The `d` is the actual path to be drawn and it is like [a sub language of SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).  6 types of path commands, for a total of 20 commands. 
This is the type of thing that I kinda want to understand really well, but also realize that it would continually hurt my head to understand how something like this:
```html
d="M8.2 5c1.93 0 3.5.9 3.5 2a2 2 0 11-1.55 3.26c-.7.44-1.98.74-3.45.74-2.2 0-4-.67-4-1.5 0-.23.14-.45.4-.65.17-.14.42-.27.7-.39-.88.02-2-.0-2.1-.96C1.75 6.37 3.57 6 5.5 6h-.03c.6-.6 1.73-1 3.03-1z"
```
Can describe something like this:
![[can-and-cloud-16x16.svg]]

# CSS Custom Properties
These are not "new" things per se, but I gotta say - it's one of the CSS features that I now reach for almost every time. Especially for color, gradients, box-shadows, and other things that are 1)hard to remember 2)repeated throughout a design. Today, I took my colors, and the stroke properties of my can and cloud logo.

