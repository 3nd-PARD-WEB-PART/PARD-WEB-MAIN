import { atom, selector } from "recoil";

export const myInfoAge = atom({
    key: 'myInfoAge', // 고유한 키 값
    default: 24,
});

export const myInfoName = atom({
    key: 'myInfoName', // 고유한 키 값
    default : '김광일',
})

export const myInfoSelector = selector({
    key: 'myInfoSelector',
    get: ({get}) => {
        const age = get(myInfoAge);
        const name = get(myInfoName);
        return { age, name };
    },
    set: ({set}, newValue) => {
        set(myInfoAge, newValue.age);
        set(myInfoName, newValue.name);
    },
});



