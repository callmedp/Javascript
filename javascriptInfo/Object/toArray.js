// Object.keys()
// Object.values()
// Object.entries()

const obj = {
    a: { aa: 11},
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

const entries = Object.entries(obj)
console.log("entries ", entries)

const keys = Object.keys(obj)
console.log("keys ", keys)

const values = Object.values(obj)
console.log("values ", values)



