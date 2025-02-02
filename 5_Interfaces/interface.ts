interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

//reopening of the interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  // here both User interfaces will be mixed
  role: "admin" | "ta" | "learner";
}

const aditya: Admin = {
  dbId: 22,
  email: "adi@gmail.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "aditya10", off: 10) => {
    return 10;
  },
};
aditya.email = "aditya@gmail.com";
// aditya.dbId = 33 //error, its readonly
