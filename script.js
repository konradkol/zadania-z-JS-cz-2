//  DANE WEJŚCIOWE
const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
];

/* 
    1. Napisz funkcję mapującą, która utworzy klucz(właściwość) nickname na każdej osobie w tablicy w następujący sposób:
    a) pobierze 3 pierwsze litery imienia, odwróci ich kolejność i zapisze do zmiennej
    //onazoL
    //Lozano
    b) pobierze 3 ostatnie litery nazwiska, zamieni kolejnością pierwszą i ostatnią i dołączy powstały string do poprzedniego
    c*) Zmieni wielkość liter w taki sposób, żeby powstały nick zaczynał się wielką literą i nie miał żadnych wielkich liter poza 1.
    d) Jeżeli liczba znaków w imieniu bądź nazwisku jest mniejsza niż 3, nickname będzie odpowiednio krótszy 
    e) rozważcie wszystkie skrajne przypadki, ponieważ Waszą funkcję mapującą wrzucimy do testów na platformie
    e) Have fun :)
    Na przykład:
    Dla osoby: 
    {
        firstName: 'Bartolomeo',
        lastName: 'Lozano'
    }
    powinniśmy uzyskać nickname Rabona
    Hints:
    - mając zmienną name = 'Bart'
      name.split('') => ['B', 'a', 'r', 't'] - tworzymy tablicę liter ze stringa
      ['B', 'a', 'r', 't'].join('') => 'Bart' - odwracamy ten proces
    - Na tablicy możemy użyć metody reverse()
    - Na stringach czy pojedynczych literkach możemy używać metod toLowerCase(), toUpperCase()
*/

// ad. 1.
const addNickToPeople = (people) => {
  const arrWithNick = people.map((person) => {
    return {
      ...person,
      nickname:
        person.firstName.slice(0, 3).split("").reverse().join("") +
        person.lastName.slice(-3).split("").reverse().join(""),
    };
  });
  return arrWithNick.map((pers) => {
    return {
      ...pers,
      nickname:
        pers.nickname.slice(0, 1).toUpperCase() +
        pers.nickname.slice(1).toLowerCase(),
    };
  });
};
let newPeoples = addNickToPeople(people);
console.log(newPeoples);

// console.log(people);

//  DANE WEJŚCIOWE
const people2 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
];

/* 
    2. 
    a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
    Oczywiście tekst powinien wyświetlić się dopiero po wywołaniu funkcji.
    Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
    "Cześć jestem Bartolomeo Lozano, ale w szkole mówią na mnie [Rabona]"
    Natomiast wywołanie funkcji: people[0].introduceYourself()
    Obiekt z przykładu powinien wyglądać w ten sposób
    {
        firstName: "Bartolomeo",
        lastName: "Lozano",
        nickname: "Rabona",
        introduceYourself: // tutaj ma się znajdować funkcja
    },
    b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
    pojawić się tekst powitalny dla każdej osoby w tablicy
    Hints:
    - nie używaj w tym zadaniu funkcji strzałkowej, ponieważ słówko this Ci nie zadziała i nie będziesz miał(a)
    dostępu do this.firstName lastName i nickname
    - postaraj się zdefiniować funkcję powitalną tylko raz (nie rób tego w pętli, ani funkcji map)
    
*/

//  DANE WEJŚCIOWE
const people3 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: "", // funkcja zamiast pustego stringa
  },
];

// ad. 2.
newPeoples[0] = {
  ...newPeoples[0],
  introduceYourself() {
    console.log(
      `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`
    );
  },
};
console.log(newPeoples);

newPeoples.forEach((el) => {
  newPeoples[0].introduceYourself.call(el);
});

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

/*
    3. 
    a) Dodaj do każdego obiektu funkcję getFavouriteColor
    b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
    c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
        - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
        - podałeś za dużą liczbę, liczba nie może być większa niż 30
    d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
    e) funkcja powinna zsumować wszystkie litery imienia, nazwiska i przezwiska, 
    odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
    wyznaczyć index
    f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
    Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
    (22 - 5) % 6 = 5
    console.log("orange")
    Hints
    - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math, 
    Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
    - w funkcji musicie użyć słówka this, parametru i tablicy, która jest na zewnątrz, tablica z kolorami może mieć
    dowoloną ilość kolorów
*/

// ad.3.
function getFavouriteColor(num = 5) {
  if (typeof num !== "number") {
    return console.log("Można podać tylko wartość typu 'number'");
  }
  if (num < 1) {
    return console.log(
      "Podałeś za małą liczbę, liczba nie może być mniejsza niż 1"
    );
  }
  if (num > 30) {
    return console.log(
      "Podałeś za dużą liczbę, liczba nie może być większa niż 30"
    );
  }
  const index =
    Math.abs(
      this.firstName.length + this.lastName.length + this.nickname.length - num
    ) % colors.length;
  return console.log(colors[index]);
}
newPeoples = newPeoples.map((pers) => {
  return {
    ...pers,
    getFavouriteColor,
  };
});

console.log(newPeoples);

newPeoples[0].getFavouriteColor();
// newPeoples[0].getFavouriteColor(4);
// newPeoples[0].getFavouriteColor(30);
// newPeoples[0].getFavouriteColor(0);
// newPeoples[1].getFavouriteColor();

/*
    4. Napisz funkcję analogiczną do funkcji z zadania 3, ale nie dodawaj jej w obiekcie.
    a) funkcja powinna przyjąć 2 parametry (obiekt osoby i liczbę z zakresu 1 - 30)
    b) funkcja powinna wykonać dokładnie takie samo działanie jak poprzednia
    c) Za pomocą pętli for of przeiteruj po wszystkich osobach z tablicy i wyświetl ich ulubione kolory
*/

// ad.4.
function getFavouriteColorFromArr(obj, num = 5) {
  if (typeof num !== "number") {
    return console.log("Można podać tylko wartość typu 'number'");
  }
  if (num < 1) {
    return console.log(
      "Podałeś za małą liczbę, liczba nie może być mniejsza niż 1"
    );
  }
  if (num > 30) {
    return console.log(
      "Podałeś za dużą liczbę, liczba nie może być większa niż 30"
    );
  }
  const index =
    Math.abs(
      obj.firstName.length + obj.lastName.length + obj.nickname.length - num
    ) % colors.length;
  return console.log(colors[index]);
}

for (const people of newPeoples) {
  getFavouriteColorFromArr(people);
}

/*
    5. Zadanie polega na użyciu .filter() .map() .reduce w wersji łańcuchowej,
    czyli nie twórz nowych tablic w momencie wykonanie jednej z powyższych metod, połącz wykonanie ze sobą w jeden 
    "łańcuch" tzn. const wynik = arr.filter().map().reduce()
    a) Przefiltruj tablicę w taki sposób, aby zostały w niej osoby,
    których imię kończy się na literę 'a' lub 'k' 
    i nazwisko ma więcej znaków niż 6 
    i nick zawiera w sobie przynajmniej jedną literę a
    b) do powyższego warunku dodaj "furtkę" w postaci parametru isElite. Zmienna isElite powinna być obliczona
    za pomocą generatora liczb pseudolosowych Math.random(). Za pomocą tego generatora wylosujcie liczbę z zakresu 0 - 100.
    Jeżeli wartość losowej liczby będzie liczbą pierwszą lub będzie podzielna przez 3 i 5, ustawcie isElite na true, w pozostałych przypadkach
    isElite powinno być ustawione na false
    c) jeżeli zmienna isElite ma wartość true, nie bierzcie pod uwagę warunku z punktu a przy filtracji
    d) za pomocą funkcji map i for in odwróccie wartości i klucze w obiekcie, usuwając przy tym funkcje
    Przykład
    INPUT
    {
        firstName: "Bartolomeo",
        lastName: "Lozano",
        nickname: "Rabona",
        introduceYourself: '' // funkcja zamiast pustego stringa
        getFavouriteColor: '' // funkcja zamiast pustego stringa
    },
    OUTPUT
    {
        Bartolomeo: "firstName",
        Lozano: "lastName",
        Rabona: "nickname",
    },
    e) zredukuj tablicę obiektów do pojedynczego obiektu, który będzie zawierał wszystkie klucze i wartości
    wszystkich obiektów z tablicy, dzięki temu, że w punkcie d) odwrócilismy klucze z wartościami, nie będzie 
    z tym problemu :)
    f) posortuj tablicę alfabetycznie
*/

// ad.5.

// funkcja sprawdzajaca czy dana liczba jest liczba pierwsza
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(4))

let isElite = false;
const randomNum = Math.round(Math.random() * 100);
const isPrimeNum = isPrime(randomNum);
isPrimeNum || (randomNum % 3 === 0 && randomNum % 5 === 0)
  ? (isElite = true)
  : (isElite = false);

const result = newPeoples
  .filter(
    (per) =>
      isElite ||
      ((per.firstName.slice(-1) === "a" || per.firstName.slice(-1) === "k") &&
        per.lastName.length > 6 &&
        per.nickname.includes("a"))
  )
  .map((person) => {
    const newObj = {};
    for (const key in person) {
      if (typeof person[key] !== "function") {
        newObj[person[key]] = key;
      }
    }
    return newObj;
  })
  .reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});

console.log(result);

const arrResult = Object.entries(result).flat().sort();
console.log(arrResult);

/*
    *6. Currying function
    a) Napisz taką funkcję mnożącą 2 liczby, aby możliwe były następujące wywołania:
    - multi(5)(6)
    - const multiplyBySix = sum(6)
      multiplyBySix(10)
    b) Analogicznie napisz funkcję, która mnoży 4 liczby i możliwe jest wywołanie
    - multi(4)(5)(6)(10)
    Hints:
    - funkcja może zwracać inne funkcje
    - funkcja może korzystać ze zmiennych i parametrów funkcji zewnętrznych (czyli tych w których się znajduje)
*/

// ad.6.
// a)
const multi = (a) => {
  return (b) => {
    return a * b;
  };
};
console.log(multi(5)(6));

const sum = (a) => {
  return a + 1;
};
const multiplyBySix = sum(6);
console.log(multiplyBySix);

//  b)
const multi2 = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return a * b * c * d;
      };
    };
  };
};
console.log(multi2(4)(5)(6)(10));

/*
    **7. Rekurencja
     a) Mając zagnieżdżony obiekt, wyciągnij z niego wszystkie imiona i dodaj do tablicy
     ***b) Jeżeli osoba ma więcej niż jedno imię, te imiona powinny znajdować się w jednym stringu w tablicy
     Na przykład 'Kamil Bartek'
    INPUT:
*/
const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// TUTAJ MUSZĘ SIĘ PRZYZNAĆ, ŻE ROZWIĄZANIE ZAD. 7 (Z REKURENCJĄ) NIE JEST MOJE. WYSZUKAŁEM JE W 'INTERNECIE'. Ja niestety nie mogłem sobie z nim poradzić :(

function getAllNames(obj, arr) {
  if (!arr) {
    arr = [];
  }

  for (let key in obj) {
    if (key === "name") {
      arr.push(obj[key]);
    } else if (key.startsWith("name")) {
      if (arr.length > 0) {
        arr[arr.length - 1] += " " + obj[key];
      } else {
        arr.push(obj[key]);
      }
    } else if (typeof obj[key] === "object") {
      getAllNames(obj[key], arr);
    }
  }

  return arr;
}

const allNames = getAllNames(nestedObject);
console.log(allNames);
