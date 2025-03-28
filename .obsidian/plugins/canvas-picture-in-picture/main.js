/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CanvasFloatPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var CanvasFloatPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.floatingElement = null;
    this.originalElement = null;
    this.isResizing = false;
    this.resizeDirection = null;
    this.aspectRatio = 9 / 16;
  }
  // Default aspect ratio
  async onload() {
    console.log("Loading Canvas Float Plugin");
    this.addCommand({
      id: "float-selected-element",
      name: "Float selected element",
      checkCallback: (checking) => {
        const canvas = this.getActiveCanvas();
        if (canvas) {
          if (!checking) {
            this.floatSelectedElement(canvas);
          }
          return true;
        }
        return false;
      }
    });
    this.app.workspace.on("layout-change", () => this.handleLayoutChange());
  }
  getActiveCanvas() {
    const activeLeaf = this.app.workspace.activeLeaf;
    if (activeLeaf && activeLeaf.view.containerEl) {
      return activeLeaf.view.containerEl.querySelector(".canvas");
    }
    return null;
  }
  floatSelectedElement(canvas) {
    var _a;
    const selectedElement = (_a = this.getSelectedElement(canvas)) == null ? void 0 : _a.parentElement;
    if (selectedElement) {
      const originalRect = selectedElement.getBoundingClientRect();
      this.aspectRatio = originalRect.width / originalRect.height;
      this.createFloatingElement(selectedElement);
      this.replaceOriginalElement(selectedElement);
    }
  }
  getSelectedElement(canvas) {
    return canvas.querySelector(".canvas-node.is-focused .canvas-node-content");
  }
  replaceOriginalElement(element) {
    element.dataset.originalContent = element.children.toString();
    const newElement = document.createElement("div");
    newElement.classList.add("canvas-pip-restore-message");
    const message = document.createElement("p");
    message.textContent = "Element is in picture-in-picture mode.";
    const button = document.createElement("button");
    button.classList.add("restore-btn");
    button.textContent = "Restore";
    newElement.appendChild(message);
    newElement.appendChild(button);
    element.empty();
    element.appendChild(newElement);
    const restoreBtn = element.querySelector(".restore-btn");
    restoreBtn.onclick = () => {
      this.restoreElementBack(element);
    };
  }
  restoreElement(floatingContainer, originalElement) {
    originalElement.empty();
    originalElement.appendChild(floatingContainer.children[0].children[0].cloneNode(true));
    document.body.removeChild(floatingContainer);
    this.floatingElement = null;
    this.originalElement = null;
  }
  restoreElementBack(element) {
    const floatingContainer = document.querySelector(".floating-container");
    if (floatingContainer) {
      this.restoreElement(floatingContainer, element);
    }
  }
  createFloatingElement(element) {
    if (this.floatingElement && this.originalElement) {
      this.restoreElement(this.floatingElement, this.originalElement);
    }
    const floatingContainer = document.createElement("div");
    floatingContainer.classList.add("floating-container");
    floatingContainer.appendChild(element.cloneNode(true));
    document.body.appendChild(floatingContainer);
    this.applyFloatingStyles(floatingContainer);
    const restoreButton = document.createElement("button");
    restoreButton.innerText = "Restore";
    restoreButton.onclick = () => {
      this.restoreElement(floatingContainer, element);
    };
    floatingContainer.appendChild(restoreButton);
    this.floatingElement = floatingContainer;
    this.originalElement = element;
    this.addResizeHandlers(floatingContainer);
  }
  applyFloatingStyles(container) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let width = windowWidth * 0.4;
    let height = width / this.aspectRatio;
    if (height > windowHeight * 0.5) {
      height = windowHeight * 0.5;
      width = height * this.aspectRatio;
    }
    container.style.setProperty("--width", `${width}px`);
    container.style.setProperty("--height", `${height}px`);
  }
  addResizeHandlers(container) {
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const isResizingRight = e.clientX > rect.right - 10 && e.clientX < rect.right;
      const isResizingTop = e.clientY < rect.top + 10 && e.clientY > rect.top;
      const isResizingCorner = e.clientX > rect.right - 10 && e.clientY < rect.top + 10;
      if (isResizingCorner) {
        container.dataset.resizeDirection = "corner";
      } else if (isResizingRight) {
        container.dataset.resizeDirection = "right";
      } else if (isResizingTop) {
        container.dataset.resizeDirection = "top";
      } else {
        container.dataset.resizeDirection = "";
      }
    });
    container.addEventListener("mouseleave", () => {
      container.dataset.resizeDirection = "";
    });
    container.addEventListener("mousedown", (e) => {
      var _a, _b, _c;
      const rect = container.getBoundingClientRect();
      if (e.clientX > rect.right - 10 && e.clientX < rect.right && e.clientY < rect.top + 10 && e.clientY > rect.top) {
        this.isResizing = true;
        this.resizeDirection = "corner";
        (_a = this.floatingElement) == null ? void 0 : _a.classList.add("resizing");
        e.preventDefault();
      } else if (e.clientX > rect.right - 10 && e.clientX < rect.right) {
        this.isResizing = true;
        this.resizeDirection = "right";
        (_b = this.floatingElement) == null ? void 0 : _b.classList.add("resizing");
        e.preventDefault();
      } else if (e.clientY < rect.top + 10 && e.clientY > rect.top) {
        this.isResizing = true;
        this.resizeDirection = "top";
        (_c = this.floatingElement) == null ? void 0 : _c.classList.add("resizing");
        e.preventDefault();
      }
    });
    document.addEventListener("mousemove", this.resizeElement.bind(this));
    document.addEventListener("mouseup", this.stopResizing.bind(this));
  }
  resizeElement(e) {
    if (!this.isResizing || !this.floatingElement)
      return;
    e.preventDefault();
    const rect = this.floatingElement.getBoundingClientRect();
    if (this.resizeDirection === "corner") {
      this.floatingElement.style.setProperty("--width", `${e.clientX - rect.left}px`);
      this.floatingElement.style.setProperty("--height", `${rect.bottom - e.clientY}px`);
    } else if (this.resizeDirection === "right") {
      this.floatingElement.style.setProperty("--width", `${e.clientX - rect.left}px`);
    } else if (this.resizeDirection === "top") {
      this.floatingElement.style.setProperty("--height", `${rect.bottom - e.clientY}px`);
    }
  }
  stopResizing(e) {
    var _a;
    this.isResizing = false;
    this.resizeDirection = null;
    (_a = this.floatingElement) == null ? void 0 : _a.classList.remove("resizing");
    e.preventDefault();
  }
  handleLayoutChange() {
    if (this.floatingElement && this.originalElement) {
      const canvas = this.getActiveCanvas();
      if (!canvas || !canvas.contains(this.originalElement)) {
        this.restoreElement(this.floatingElement, this.originalElement);
      }
    }
  }
  onunload() {
    console.log("Unloading Canvas Float Plugin");
  }
};

/* nosourcemap */