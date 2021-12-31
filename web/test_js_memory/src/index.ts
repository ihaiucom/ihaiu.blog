class TestClip {
    name: string = "ClipName";
    frames: TestFrame[] = [];


    Destory() {
        if (this.frames) {
            while (this.frames.length > 0) {
                var f = this.frames.pop();
                f?.Destory();
            }
        }
    }
}

class TestFrame {
    frameIndex?: number = 0;
    data?: TestFrameData = new TestFrameData();

    Destory() {
        this.data = undefined;
        this.frameIndex = undefined;
    }
}

class TestFrameData {
    x: number = 10;
    y: number = 10;
    z: number = 10;
    w: number = 10;
    r: number = 10;
    g: number = 10;
    b: number = 10;
    a: number = 10;

}

class Main {
    clipIndex = 0;
    frameIndex = 0;
    clipList: TestClip[] = [];
    constructor() {

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
            clip?.Destory();
        }
    }


}

var m = new Main();
window.m = m;
