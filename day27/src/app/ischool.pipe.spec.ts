import { IschoolPipe } from "./ischool.pipe";


describe("Test IschoolPipe",()=>{
    let ischoolpipe:IschoolPipe;

    beforeEach(()=>{
        console.log("beforeEach from ischoolpipe was called");
        ischoolpipe = new IschoolPipe();
    })

    it("should check if the ischoolpipe is defined",()=>{
        expect(ischoolpipe).toBeDefined();
    })
    it("should check if the ischoolpipe is working",()=>{
        expect(ischoolpipe.transfrom('khai','hi'))
    })
})