
import '@testing-library/jest-dom';

global.window = global.window || {};
global.window.matchMedia = global.window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

