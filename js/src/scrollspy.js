/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin, getElement, isDisabled } from './util/index'
import EventHandler from './dom/event-handler'
import SelectorEngine from './dom/selector-engine'
import BaseComponent from './base-component'

/**
 * Constants
 */

const NAME = 'scrollspy'
const DATA_KEY = 'bs.scrollspy'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_ACTIVATE = `activate${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item'
const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]'
const SELECTOR_TARGET_LINKS = '[href]'
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group'
const SELECTOR_NAV_LINKS = '.nav-link'
const SELECTOR_NAV_ITEMS = '.nav-item'
const SELECTOR_LIST_ITEMS = '.list-group-item'
const SELECTOR_DROPDOWN = '.dropdown'
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle'

const Default = {
  offset: null, // todo: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -40%',
  smoothScroll: false,
  target: null
}

const DefaultType = {
  offset: '(number|null)', // todo v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element'
}

/**
 * Class definition
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    // this._element is the observablesContainer and config.target the menu links wrapper
    this._targetLinks = new Map()
    this._observableSections = new Map()
    this._activeTarget = null
    this._observer = null
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }
    this.refresh() // initialize
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  refresh() {
    this._initializeTargetsAndObservables()
    this._maybeEnableSmoothScroll()

    if (this._observer) {
      this._observer.disconnect()
    } else {
      this._observer = this._getNewObserver()
    }

    for (const section of this._observableSections.values()) {
      this._observer.observe(section)
    }
  }

  dispose() {
    this._observer.disconnect()
    super.dispose()
  }

  // Private
  _configAfterMerge(config) {
    config.target = getElement(config.target)

    return config
  }

  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return
    }

    const wrapperOffsetTop = this._element.offsetTop

    EventHandler.off(this._config.target, EVENT_CLICK) // unregister any previous listeners

    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
      event.preventDefault()
      const observableSection = this._observableSections.get(event.target.hash)
      if (observableSection) {
        this._element.scrollTop = observableSection.offsetTop - wrapperOffsetTop // chrome 60 doesn't support `scrollTo`
      }
    })
  }

  _getNewObserver() {
    const options = {
      root: this._element,
      threshold: [0, 0.5],
      rootMargin: this._getRootMargin()
    }

    return new IntersectionObserver(entries => this._observerCallback(entries), options)
  }

  _observerCallback(entries) {
    const getTargetLink = entry => this._targetLinks.get(`#${entry.target.id}`)

    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop
      const targetToActivate = getTargetLink(entry)
      this._process(targetToActivate)
    }

    const parentScrollTop = this._element.scrollTop
    let previousIntersectionRatio = 0

    for (const entry of entries) {
      if (entry.isIntersecting && previousIntersectionRatio < entry.intersectionRatio) {
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop
        previousIntersectionRatio = entry.intersectionRatio

        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop

        // if we are scrolling down, pick the bigger offsetTop
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry)
          continue
        }

        // if we are scrolling up, pick the smallest offsetTop
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry)
        }

        continue
      }

      const notVisibleElement = getTargetLink(entry)
      this._clearActiveClass(notVisibleElement)
    }

    this._previousScrollData.parentScrollTop = parentScrollTop
  }

  // todo: v6 Only for backwards compatibility reasons. Use rootMargin only
  _getRootMargin() {
    return this._config.offset ? `${this._config.offset}px 0px 0px` : this._config.rootMargin
  }

  _initializeTargetsAndObservables() {
    this._targetLinks = new Map()
    this._observableSections = new Map()

    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target)

    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash.length || isDisabled(anchor)) {
        continue
      }

      const observableSection = SelectorEngine.findOne(anchor.hash, this._element)

      if (observableSection) {
        this._targetLinks.set(anchor.hash, anchor)
        this._observableSections.set(anchor.hash, observableSection)
      }
    }
  }

  _process(target) {
    if (this._activeTarget === target) {
      return
    }

    this._clearActiveClass(this._config.target)
    if (!target) {
      return
    }

    this._activeTarget = target

    target.classList.add(CLASS_NAME_ACTIVE)
    this._activateParents(target)

    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    })
  }

  _activateParents(target) {
    // Activate dropdown parents
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN))
        .classList.add(CLASS_NAME_ACTIVE)
      return
    }

    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`)) {
        item.classList.add(CLASS_NAME_ACTIVE)
      }

      // Handle special case when .nav-link is inside .nav-item
      for (const navItem of SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS)) {
        for (const item of SelectorEngine.children(navItem, SELECTOR_NAV_LINKS)) {
          item.classList.add(CLASS_NAME_ACTIVE)
        }
      }
    }
  }

  _clearActiveClass(parent) {
    if (parent !== this._config.target) {
      parent.classList.remove(CLASS_NAME_ACTIVE)
    }

    for (const node of SelectorEngine.find(`.${CLASS_NAME_ACTIVE}`, parent)) {
      node.classList.remove(CLASS_NAME_ACTIVE)
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

/**
 * Data API implementation
 */

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy)
  }
})

/**
 * jQuery
 */

defineJQueryPlugin(ScrollSpy)

export default ScrollSpy
