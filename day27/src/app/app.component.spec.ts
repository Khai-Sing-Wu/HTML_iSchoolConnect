import { AppComponent } from "./app.component";

describe("Testing AppComponent",()=>{
  let app:AppComponent;

  beforeAll(()=>{
    app = new AppComponent();
    console.log("Before All was called");
  });
  
  beforeEach(()=>{
    console.log("Before Each was called");
  });
  
  afterEach(()=>{
    console.log("After Each was called");
  });
  
  afterAll(()=>{
    console.log("After All was called");
  });

  it("should check for app to be defined",()=>{
    expect(app).toBeDefined();
    console.log("test 1 was called");
  });

  it("should check for app title to be defined",()=>{
    expect(app.title).toBeDefined();
    console.log("test 2 was called");
  });

  it("should check for app title is steps",()=>{
    expect(app.title).toBe('steps');
    console.log("test 3 was called");
  });

  it("should check for app title is steps",()=>{
    expect(app.title.length).toBe(5);
    console.log("test 4 was called");
  });

  describe("Test for UserAge",()=>{
    beforeAll(()=>{
      app = new AppComponent();
      console.log("Before All 2 was called");      
    });

    it("should test for user age to be defined",()=>{
      expect(app.userage).toBeDefined();
      console.log("check user age was called");
    });

    it("should test for user age to be 20",()=>{
      expect(app.userage).toBe(20)
      console.log("check user age value was called");
    });

    it("should test for user age to be 21",()=>{
      app.increaseAge();
      expect(app.userage).toBe(21);
      console.log("check increaseAge() was called");
    });

    afterEach(()=>{
      app.userage = 20;
    })
  })

})




