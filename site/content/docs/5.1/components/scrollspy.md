---
layout: docs
title: Scrollspy
description: Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.
group: components
toc: true
---

## How it works

Scrollspy toggles the `.active` class on anchor (`<a>`) elements when the element with the `id` referenced by the anchor's `href` is scrolled into view. Generally, it will be most useful in conjunction with a Bootstrap [nav component]({{< docsref "/components/navs-tabs" >}}) or [list group]({{< docsref "/components/list-group" >}}), but it will also work with any anchor elements in the current page.

{{< callout >}}
### Scrollable containers and keyboard access

If you're making a scrollable container (other than the `<body>`), be sure to have a `height` set and `overflow-y: scroll;` applied to it—alongside a `tabindex="0"` to ensure keyboard access.
{{< /callout >}}

## Example in navbar

Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.

<div class="bd-example">
  <nav id="navbar-example2" class="navbar bg-light px-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">First</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading2">Second</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
          <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  </div>
</div>

```html
<nav id="navbar-example2" class="navbar bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p>
</div>
```

## Example with nested nav

Scrollspy also works with nested `.nav`s. If a nested `.nav` is `.active`, its parents will also be `.active`. Scroll the area next to the navbar and watch the active class change.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <nav id="navbar-example3" class="navbar bg-light flex-column align-items-stretch p-3">
        <a class="navbar-brand" href="#">Navbar</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">Item 1</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
            <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
          </nav>
          <a class="nav-link" href="#item-2">Item 2</a>
          <a class="nav-link" href="#item-3">Item 3</a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
            <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
          </nav>
        </nav>
      </nav>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" class="scrollspy-example-2" tabindex="0">
        <h4 id="item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div>
</div>

```html
<nav id="navbar-example3" class="navbar bg-light flex-column align-items-stretch p-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#item-1">Item 1</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
      <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
    </nav>
    <a class="nav-link" href="#item-2">Item 2</a>
    <a class="nav-link" href="#item-3">Item 3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
      <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
    </nav>
  </nav>
</nav>

<div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
  <h4 id="item-1">Item 1</h4>
  <p>...</p>
  <h5 id="item-1-1">Item 1-1</h5>
  <p>...</p>
  <h5 id="item-1-2">Item 1-2</h5>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h5 id="item-3-1">Item 3-1</h5>
  <p>...</p>
  <h5 id="item-3-2">Item 3-2</h5>
  <p>...</p>
</div>
```

## Example with list-group

Scrollspy also works with `.list-group`s. Scroll the area next to the list group and watch the active class change.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="list-item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="list-item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="list-item-4">Item 4</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div>
</div>

```html
<div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
  <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
</div>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="list-item-1">Item 1</h4>
  <p>...</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>...</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>...</p>
</div>
```

## Example with simple anchors

Scrollspy is not limited to nav components and list groups, but will work on any `<a>` anchor elements in the current document. Scroll the area and watch the `.active` class change.

<div class="bd-example">
  <div class="row">
    <div class="col-4">
      <div id="simple-list-example" class="d-flex flex-column simple-list-example-scrollspy">
        <a href="#simple-list-item-1">Item 1</a>
        <a href="#simple-list-item-2">Item 2</a>
        <a href="#simple-list-item-3">Item 3</a>
        <a href="#simple-list-item-4">Item 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <h4 id="simple-list-item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
        <h4 id="simple-list-item-4">Item 4</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
      </div>
    </div>
  </div>
</div>

```html
<div id="list-example" class="d-flex flex-column">
  <a href="#item-1">Item 1</a>
  <a href="#item-2">Item 2</a>
  <a href="#item-3">Item 3</a>
  <a href="#item-4">Item 4</a>
</div>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="item-1">Item 1</h4>
  <p>...</p>
  <h4 id="item-2">Item 2</h4>
  <p>...</p>
  <h4 id="item-3">Item 3</h4>
  <p>...</p>
  <h4 id="item-4">Item 4</h4>
  <p>...</p>
</div>
```

## Usage

### Via data attributes

To easily add scrollspy behavior to your topbar navigation, add `data-bs-spy="scroll"` to the element you want to spy on (most typically this would be the `<body>`). Then add the `data-bs-target` attribute with the `id` or class name of the parent element of any Bootstrap `.nav` component.

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example">
  ...
  <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
      ...
    </ul>
  </div>
  ...
</body>
```

### Via JavaScript

```js
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})
```

{{< callout danger >}}
#### Requires resolvable `id` targets

Links must have resolvable `id` targets, otherwise they are being ignored. For example, a `<a href="#home">home</a>` must correspond to something in the DOM like `<div id="home"></div>`
{{< /callout >}}

{{< callout info >}}
#### Non-visible target elements are ignored

Target elements that are not visible will be ignored and their corresponding nav items will never be highlighted.
{{< /callout >}}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-bs-`, as in `data-bs-root-margin=""`.

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `rootMargin` | string | `0px 0px -40%` | Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) valid units, when calculating scroll position. |
| `smoothScroll` | boolean | `false` | Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables. |
| `target` | string \| jQuery object \| DOM element |  | Specifies element to apply Scrollspy plugin. |
{{< /bs-table >}}

{{< callout warning >}}
**Deprecated Options**

Up until v5.1.3 we were using `offset` & `method` options, which are now deprecated and replaced by `rootMargin`.
To keep backwards compatibility, we will continue to parse a given `offset` to `rootMargin`, but this feature will be removed in **v6**.
{{< /callout >}}

### Methods

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `refresh` | When adding or removing elements in the DOM, you'll need to call the refresh method. |
| `dispose` | Destroys an element's scrollspy. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method to get the scrollspy instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method to get the scrollspy instance associated with a DOM element, or to create a new one in case it wasn't initialized. |
{{< /bs-table >}}

Here's an example using the refresh method:

```js
var dataSpyList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
```

### Events

{{< bs-table "table" >}}
| Event | Description |
| --- | --- |
| `activate.bs.scrollspy` | This event fires on the scroll element whenever an anchor is activated by the scrollspy. |
{{< /bs-table >}}

```js
var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function () {
  // do something...
})
```
