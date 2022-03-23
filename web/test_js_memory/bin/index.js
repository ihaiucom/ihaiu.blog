"use strict";
class TestClip {
    constructor() {
        this.name = "ClipName";
        this.frames = [];
    }
    Destory() {
        if (this.frames) {
            while (this.frames.length > 0) {
                var f = this.frames.pop();
                f === null || f === void 0 ? void 0 : f.Destory();
            }
        }
    }
}
class TestFrame {
    constructor() {
        this.frameIndex = 0;
        this.data = new TestFrameData();
    }
    Destory() {
        this.data = undefined;
        this.frameIndex = undefined;
    }
}
class TestFrameData {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.z = 10;
        this.w = 10;
        this.r = 10;
        this.g = 10;
        this.b = 10;
        this.a = 10;
    }
}
class Main {
    constructor() {
        this.clipIndex = 0;
        this.frameIndex = 0;
        this.clipList = [];
    }
    Change() {
        this.Clear();
        this.Create();
    }
    Clear() {
        this.clipList.length = 0;
    }
    Create() {
        for (var ci = 0; ci < 100; ci++) {
            var clip = new TestClip();
            clip.name = "Clip_" + this.clipIndex++;
            this.clipList.push(clip);
            for (var fi = 0; fi < 10000; fi++) {
                var frame = new TestFrame();
                frame.frameIndex = this.frameIndex++;
                clip.frames.push(frame);
            }
        }
    }
    DepthClear() {
        while (this.clipList.length > 0) {
            var clip = this.clipList.pop();
            clip === null || clip === void 0 ? void 0 : clip.Destory();
        }
    }
}
var m = new Main();
window.m = m;
//# sourceMappingURL=index.js.map