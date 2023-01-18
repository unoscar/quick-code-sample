# Quick Code Sample

This project is a small repo with a couple of code samples. It currently exemplifies a development strategy I have implemented in my latest big E2E projects where you separate your component library by `headless` and `UI`.

With this approach, you can separate all the logic from the theming of the component, and you can reuse the headless implementation in another project by just changing how the UI presents the component

## How to build it

Clone/Fork this repository and:

- install the packages `yarn install | npm install`
- run the demo command and this will build your storybook locally `yarn demo`

## NOTES

- If you want to test the menu ability to relocate based on viewport fit, zoom 2 to 3 times on the storybook and scroll when the menu is open
![](https://github.com/unoscar/quick-code-sample/blob/main/assets/Animation.gif)