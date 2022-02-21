---
title: Social SVG
date: "2022-02-20T14:24:33.169Z"
description: Styling up social icons.
---

Pinochle last night, 3-hand cut-throat: my bro own three out of four games.

Back at the ol' Gatsby React Webpack easy-peasy starter blog. I couldn't get the base64 (<--yep,  that's right...) SVGs to display.

I tried everything, including pulling in the SVG as React Components in the `bio.js` file:

``` js
import { ReactComponent as Devpost } from "../images/social/devpost.svg"
```

Adding in the gatsby-plugin-react-svg plugin in `gatsby-config.js`:

``` json
{
    resolve: "gatsby-plugin-react-svg",
    options: {
        rule: {
            include: `/src/images/svg/`
        }
    }
}
```

Then, I thought I'd explicitly excluding the `url-loader` from loading SVG files. I'd try `svg-url-loader`. That meant trying a little WebPack configuration in Gatsby, which meant creating a separate module, `onCreateWebpackConfig`, and loading it from the `gatsby-node.js` file.

All the time, I could see that the data was being loaded, but I thought because it was base64, Chrome wouldn't read it.

Oh, and Gatsby `Link`, as well. Even though the docs said don't use it for external links, it worked.

But the images still didn't display. I had set a height and width early on, so I thought I was covered by silly CSS transpiling issues. But nope. Turned out all I had to do is drop _either_ the height or the width (something about ratios?), and the icons displayed perfectly.

Next up? Loading this site into Namecheap shared hosting.
