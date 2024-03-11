////Task 1
function filterObjectsWithValues(objects) {
    const filteredObjects = [];
    objects.forEach(function (obj) {

        let hasUndefined = false;

        for (let key in obj) {
            if (obj[key] === undefined) {
                hasUndefined = true;
            }
        }

        if (!hasUndefined) {
            filteredObjects.push(obj);
        }
    });

    return filteredObjects;
}

const objects = [
    { name: "Vasya", age: 33 },
    { name: "Katya", age: undefined },
    { name: "Igor", age: 25 },
];

console.log(filterObjectsWithValues(objects));

////Task 2
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
}
const obj1 = {};
console.log(isEmptyObject(obj1));

const obj2 = { name: "Vasya", age: 35 };
console.log(isEmptyObject(obj2));

///Task 3
function hasProperty(obj, propertyName) {
    return propertyName in obj
}
const person = { name: 'Jimmy', age: 45, job: 'engineer' }
console.log(hasProperty(person, 'name'))
console.log(hasProperty(person, 'salary'))

////Task 4
function haveSameProperties(obj3, obj4) {
    const keys1 = Object.keys(obj3)
    const keys2 = Object.keys(obj4)
    for (let i = 0; i < keys1.length; i += 1) {
        if (keys1[i] !== keys2[i]) {
            return false;
        }
    }
    return true
}
const obj3 = { name: "Dima", age: 30, city: "New York" };
const obj4 = { name: "Masha", age: 30, city: "Chicago" };
const obj5 = { name: "Katya", age: 25 };
console.log(haveSameProperties(obj3, obj4))
console.log(haveSameProperties(obj3, obj5))

////Task 5
function swapKeysAndValues(obj) {
    const swappedObj = {};

    for (const key in obj) {
        const value = obj[key];
        swappedObj[value] = key;
    }

    return swappedObj;
}

const obj6 = { name: "John", age: 30, city: "New York" };
console.log(swapKeysAndValues(obj6))

///Task 6
function groupObjectsByProperty(array, property) {
    const groupedObject = {};

    array.forEach(obj => {
        const value = obj[property];

        if (!(value in groupedObject)) {
            groupedObject[value] = [];
        }
        groupedObject[value].push(obj);
    });

    return groupedObject;
}


const objects12 = [
    {"name": "John", "age": 30, "city": "New York"},
    {"name": "Alice", "age": 25, "city": "Los Angeles"},
    {"name": "Bob", "age": 35, "city": "New York"}
];

const grouped = groupObjectsByProperty(objects12, "city");
console.log(grouped);



///Task 7 
function invertObject(obj) {
    const invertedObj = {};

    for (const key in obj) {
        const value = obj[key];

        if (!(value in invertedObj)) {
            invertedObj[value] = [];
        }
        invertedObj[value].push(key);
    }

    return invertedObj;
}


const object11 = {
    "a": 1,
    "b": 2,
    "c": 1,
    "d": 3,
    "e": 2
};

const res = invertObject(object11);
console.log(res);


////Task 8
function differenceObjects(obj1, obj2) {
    const result = {};
    for (const key in obj1) {
        if (!(key in obj2) || obj1[key] !== obj2[key]) {
            result[key] = obj1[key];
        }
    }

    for (const key in obj2) {
        if (!(key in obj1)) {
            result[key] = obj2[key];
        }
    }

    return result;
}

const object9 = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

const object10 = {
    "name": "Alice",
    "age": 25,
    "country": "USA"
};

const difference = differenceObjects(object9, object10);
console.log(difference);


////Task 11
function filteredObj(arr, name, value) {
    const filteredArr = []
    for (const obj of arr) {
        if (obj[name] === value) {
            filteredArr.push(obj)
        }
    }
    return filteredArr
}
const objects8 = [
    { "name": "John", "age": 30 },
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 35 }
];
const filtered = filteredObj(objects8, "age", 25);
console.log(filtered)

///Task 12
function getFunctionProperties(obj) {
    const newFunction = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            newFunction.push(key)
        }
    }
    return newFunction
}
const obj8 = {
    1: 1,
    2: function () { console.log("hi dear"); },
    3: "salam",
    4: function () { console.log("how are you"); }
};
console.log(getFunctionProperties(obj8))

////Task 13
function filterNonFunctionProperties(obj) {
    const result = {};

    for (const key in obj) {
        if (typeof obj[key] !== 'function') {
            result[key] = obj[key];
        }
    }

    return result;
}

const exampleObj = {
    1: 1,
    2: function () { console.log("Hello"); },
    3: "my name Gorxmaz",

};

console.log(filterNonFunctionProperties(exampleObj));




