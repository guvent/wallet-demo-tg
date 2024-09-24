
globalThis.open = (function (open) {
    return function (url, _, features) {
        return open.call(window, url, "_blank", features);
    };
})(globalThis.open);
