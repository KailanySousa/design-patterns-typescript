import Passport from "./context/Passport";
import FacebookStrategy from "./strategies/FacebookStrategy";
import JWTStrategy from "./strategies/JWTStrategy";

const estrategia1 = new Passport(new JWTStrategy());
estrategia1.login({});

const estrategia2 = new Passport(new FacebookStrategy());
estrategia2.login({})
