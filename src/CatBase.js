export const raceOptions= {
  alleycat: 'Dachowiec',
  purebred: 'Rasowy',
}

export const sexOptions = {
  male: 'Kocur',
  female: 'Kotka'}

export const colorOptions = {
  red: 'Rudy',
  black: 'Czarny',
  white: 'Biały',
  striped: 'Pręgowany',
  mixed: 'Mieszany'

}
export const ageOptions = {
  veryYoung:'poniżej 3 miesięcy',
  young: 'poniżej roku',
  adult: 'powyżej roku'
}


const DataBase = [
  {id: 1,
    name :'Migotka',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOptions.young,
    ointment: colorOptions.striped,
    description: 'Kotka o bardzo żywej naturze. Łowna. Przeznaczona do utrzymywania na podwórku. Szybko przywiązuje się do ludzi.',
    image: 'https://img01-olxpl.akamaized.net/img-olxpl/612308687_1_644x461_arli-roczna-kotka-poleca-sie-do-adopcji-bydgoszcz.jpg', },
  {id: 2,
    name :'Leon',
    race: raceOptions.purebred,
    sex: sexOptions.female,
    age: ageOptions.adult,
    ointment: colorOptions.red,
    description: 'Dostojny kocur rasy Ragdoll o spokojnej osobowości. Doskonale dogaduje się z psami. Cierpliwy, nadaje się do domu z dziećmi.'
    image: 'https://thumbs.img-sprzedajemy.pl/1000x901c/e9/5d/42/piekny-mlody-kocur-maine-coon-rodowod-417471012.jpg', },
  {id: 3,
    name :'Monroe',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOptions.adult,
    ointment: colorOptions.mixed,
    description: 'Kot z pieprzykiem. Czteroletni kocur, wykastrowany, odrobaczony. Ufny wobec ludzi. Nie lubi psów.',
    image: 'https://i.pinimg.com/originals/32/bf/1e/32bf1e1ed42f2bede09734aed79931c6.jpg', },
  {id: 4,
    name :'Lucipurr',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOptions.veryYoung,
    ointment: colorOptions.striped,
    description: 'Młody (ok 2 miesięcy) kocurek o czarnej sierci. Nie ma ogona. Dokazuje i dopiero przechodzi etap oswajania się z człowiekiem. Umie korzystać z kuwety.',
    image: 'https://img01-olxpl.akamaized.net/img-olxpl/645006011_1_644x461_myslowice-zaginal-czarny-kocurek-bez-ogonka-myslowice.jpg', },
  {id: 5,
    name :'Lady',
    race: raceOptions.purebred,
    sex: sexOptions.female,
    age: ageOptions.young,
    ointment: colorOptions.mixed,
    description: 'Rasowa kotka - syjam. Młoda (10 miesięcy), o umaszczeniu biszkoptowym. Dobrze czuje się w towarzystwie innych kotów, gorzej z psami. ',
    image: 'http://www.iswinoujscie.pl/im/artykuly/38535_20082015.jpg', },
  {id: 6,
    name :'Śnieżka',
    race: raceOptions.purebred,
    sex: sexOptions.female,
    age: ageOptions.young,
    ointment: colorOptions.white,
    description: 'Młoda kotka rasy pers. Bardzo lubi dzieci. Z powodu słabego stanu zdrowia, musi być na ścisłej diecie. Doskonała dla osób, które lubią godzinami siedzieć i grzać się pod kotem.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg', },
  {id: 7,
    name :'Zenek',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOptions.adult,
    ointment: colorOptions.mixed,
    description: 'Kocur po przejściach. Nieufny względem ludzi. Potrzebuje bardzo dużo miłości, troski i cierpliwości. Dobrze dogaduje się z innymi zwierzakami.',
    image: 'http://absfreepic.com/absolutely_free_photos/small_photos/a-tricolor-cat-3504x2336_78676.jpg', },
  {id: 8,
    name :'Szarada',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOptions.young,
    ointment: colorOptions.mixed,
    description: 'Szylkretowa kotka. Zadbana i dobrze ułożona. Korzysta z kuwety, dogaduje się z psami i innymi kotami. Nie nadaje się do domu, w którym są małe dzieci. ',
    image: 'http://wszystkookotach.pl/wp-content/uploads/2015/05/szylkretowe-umaszczenie-u-kotow.jpg', },
  {id: 9,
    name :'Ancymon',
    race: raceOptions.purebred,
    sex: sexOptions.male,
    age: ageOptions.adult,
    ointment: colorOptions.white,
    description: 'Kocur rasy syberyjskiej. Prawdziwy lew salonowy. Jego charakter dominuje nad mniej pewnymi siebie kotami, dlatego nie radzimy łączyć go z innymi kotami, zwłaszcza kocurami. Niekastrowany, posiada rodowód.',
    image: 'http://www.dzikabestia.pl/wp-content/uploads/2012/12/Lew-0091.jpg', },
  {id: 10,
    name :'Migotka',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOptions.veryYoung,
    ointment: colorOptions.striped,
    description: 'Młoda koteczka, ciekawa świata. Lubi obserwować wszystko, co robią jej właściciele. Ze względu na wiek nadaje się dla osób, które pracują z domu. Trzeba jej poświęcić czas, a odwdzięczy się szczerym przywiązaniem.',
    image: 'http://fotoforum.gazeta.pl/photo/7/fd/he/bcf6/qlGxTxQv9DpzwdgWbB.jpg, },

]





export default DataBase
