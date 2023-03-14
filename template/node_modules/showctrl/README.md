# Installing

```
yarn add showctrl
```

or

```
npm i showctrl
```

# Using

```
 // Import :
import { ShowCtrl } from 'showctrl'

// Options:
const options = {

  parentClass: 'menu-simple', // upper menu class - other classes must be inside

  controllerClass: 'menu-simple__controller', // class of the element which can make a block appear or be hidden inside the menu

  boxClass: 'menu-simple__box', // a class of the block-container that will be appear and be hidden, for example the block with menu items, block with social networks, etc.

  relativeBoxClass: 'menu-simple', // the block in relation to which the boxClass will be positioned. The item specified in this option will get position: relative. Between relativeBoxClass and the block specified in boxClass there should be no blocks with position: relative - otherwise boxClass will be positioned relative to an intermediate block with position: relative

  bp: 994, // the breakpoint at which the box becomes adaptive
}


// Create block with options
new ShowCtrl(options)
```

# Example of my html:

```
<div class="menu-simple">
    <div class="menu-simple__inner">
        <div class="menu-simple__controller">Cotroller</div>
        <div class="menu-simple__body">
            <div class="menu-simple__box">
                <div class="menu-simple__list">
                    <div class="menu-simple__item">Item 1</div>
                    <div class="menu-simple__item">Item 2</div>
                    <div class="menu-simple__item">Item 3</div>
                    <div class="menu-simple__item">Item 4</div>
                    <div class="menu-simple__item">Item 5</div>
                    <div class="menu-simple__item">Item 6</div>
                </div>
                <div class="menu-simple__offside">For example can be a list of social networks, which should be styled differently than the menu</div>
            </div>
        </div>
    </div>
</div>
```
