# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
<!-- to test our code -->
- What is the purpose of events and event handling?
<!-- Events allow user interactions, and event handling lets us respond to them, making web pages interactive. -->
- Are all possible parameters required to use a JavaScript method or function?
<!-- no -->
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
<!-- the "addEventListener -->
- What is a callback function?
<!-- A callback function is a function passed as an argument to another function, to be executed later. -->
- What object is passed into an event listener callback when the event fires?
<!-- The Event object is passed into the event listener callback when the event fires. -->
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
<!-- event.target is the element that triggered the event. To check it, log console.log(event.target). You can find more info in the MDN Web Docs. -->
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  <!-- #1 calls the passes the function and #2 calls the function. -->

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
